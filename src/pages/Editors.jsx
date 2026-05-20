import { useState } from "react";
import { Link } from "react-router-dom";
import editors from "../data/editors";
import FadeIn from "../components/FadeIn";
import PageWrapper from "../components/PageWrapper";

const categories = ["All", "Wedding", "Commercial", "Music Video", "Corporate", "Documentary", "Social Media", "Events"];

function Editors() {
  const [active,    setActive]    = useState("All");
  const [search,    setSearch]    = useState("");
  const [available, setAvailable] = useState(false);

  const filtered = editors
    .filter((e) => active === "All" || e.skills.includes(active))
    .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.title.toLowerCase().includes(search.toLowerCase()))
    .filter((e) => !available || e.available);

  return (
    <PageWrapper>
      <div style={{ background: "#16111b", minHeight: "100vh", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

          <FadeIn>
            <div style={{ textAlign: "center", padding: "48px 0 40px" }}>
              <span style={{
                display: "inline-block", padding: "5px 12px", borderRadius: "999px",
                background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.2)",
                color: "#ddb7ff", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em",
                textTransform: "uppercase", marginBottom: "16px",
              }}>Find Your Editor</span>
              <h1 style={{ fontWeight: 700, fontSize: "36px", color: "#eadfed", marginBottom: "10px" }}>Browse Video Editors</h1>
              <p style={{ color: "#988d9f", fontSize: "15px" }}>Choose from our top-rated video editing professionals</p>
            </div>
          </FadeIn>

          {/* Search + filter */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
            <div style={{
              flex: 1, minWidth: "200px", display: "flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px", padding: "10px 14px",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#988d9f" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input
                type="text"
                placeholder="Search editors by name or skill..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ background: "transparent", border: "none", color: "#eadfed", fontSize: "14px", outline: "none", width: "100%" }}
              />
            </div>
            <button
              onClick={() => setAvailable(!available)}
              style={{
                padding: "10px 20px", borderRadius: "8px", fontSize: "13px", fontWeight: 500, cursor: "pointer",
                background: available ? "rgba(5,102,217,0.2)" : "transparent",
                border: available ? "1px solid #0566d9" : "1px solid rgba(255,255,255,0.1)",
                color: available ? "#adc6ff" : "#988d9f",
              }}
            >
              {available ? "Available Only" : "Available Only"}
            </button>
          </div>

          {/* Category pills */}
          <div style={{ display: "flex", gap: "8px", marginBottom: "32px", overflowX: "auto", paddingBottom: "4px" }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                style={{
                  padding: "7px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: 500,
                  cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, transition: "all 0.2s",
                  background: active === cat ? "#842bd2" : "transparent",
                  border: active === cat ? "1px solid #842bd2" : "1px solid rgba(255,255,255,0.1)",
                  color: active === cat ? "#fff" : "#988d9f",
                }}>
                {cat}
              </button>
            ))}
          </div>

          <p style={{ color: "#988d9f", fontSize: "13px", marginBottom: "24px" }}>{filtered.length} editors found</p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "80px 0", color: "#988d9f", fontSize: "15px" }}>
              No editors found. Try a different search.
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "16px" }} className="editors-grid">
              {filtered.map((editor, i) => (
                <FadeIn key={editor.id} delay={i * 0.04}>
                  <Link to={`/editor/${editor.id}`} style={{ textDecoration: "none", display: "block" }}>
                    <div style={{
                      background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "16px", overflow: "hidden", transition: "border-color 0.2s",
                    }}
                      onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(221,183,255,0.3)"}
                      onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                    >
                      <div style={{ position: "relative", height: "160px", overflow: "hidden" }}>
                        <img src={editor.cover} alt={editor.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent, rgba(22,17,27,0.6))" }} />
                        <span style={{
                          position: "absolute", top: "12px", right: "12px",
                          padding: "4px 10px", borderRadius: "999px", fontSize: "11px", fontWeight: 600,
                          background: editor.available ? "rgba(0,200,100,0.15)" : "rgba(255,255,255,0.08)",
                          color: editor.available ? "#4ade80" : "#988d9f",
                          border: editor.available ? "1px solid rgba(74,222,128,0.3)" : "1px solid rgba(255,255,255,0.1)",
                        }}>
                          {editor.available ? "Available" : "Busy"}
                        </span>
                      </div>

                      <div style={{ padding: "16px 18px 20px" }}>
                        <div style={{ marginTop: "-28px", marginBottom: "12px" }}>
                          <img src={editor.avatar} alt={editor.name} style={{ width: "48px", height: "48px", borderRadius: "10px", objectFit: "cover", border: "2px solid #16111b" }} />
                        </div>
                        <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "15px" }}>{editor.name}</p>
                        <p style={{ color: "#988d9f", fontSize: "12px", marginTop: "3px" }}>{editor.title}</p>
                        <p style={{ color: "#4d4354", fontSize: "11px", marginTop: "4px" }}>{editor.location}</p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "12px" }}>
                          {editor.skills.map((skill) => (
                            <span key={skill} style={{
                              padding: "3px 10px", borderRadius: "999px", fontSize: "11px",
                              background: "rgba(221,183,255,0.08)", color: "#ddb7ff",
                              border: "1px solid rgba(221,183,255,0.15)",
                            }}>{skill}</span>
                          ))}
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "16px", paddingTop: "14px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                          <div>
                            <span style={{ color: "#fabc4e", fontSize: "13px", fontWeight: 600 }}>{editor.rating}</span>
                            <span style={{ color: "#4d4354", fontSize: "11px", marginLeft: "4px" }}>({editor.reviews})</span>
                          </div>
                          <div style={{ textAlign: "right" }}>
                            <p style={{ color: "#eadfed", fontWeight: 700, fontSize: "14px" }}>₹{editor.price.toLocaleString("en-IN")}</p>
                            <p style={{ color: "#4d4354", fontSize: "10px" }}>per project</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          )}

        </div>
      </div>
    </PageWrapper>
  );
}

export default Editors;