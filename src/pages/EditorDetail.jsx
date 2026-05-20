import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import editors from "../data/editors";
import PageWrapper from "../components/PageWrapper";

function EditorDetail() {
  const { id } = useParams();
  const editor = editors.find((e) => e.id === id);

  const card = {
    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "14px", padding: "20px",
  };

  if (!editor) {
    return (
      <div style={{ minHeight: "100vh", background: "#16111b", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#eadfed", fontSize: "20px", marginBottom: "20px" }}>Editor not found</p>
          <Link to="/editors" style={{ padding: "10px 20px", borderRadius: "8px", background: "#842bd2", color: "#fff", textDecoration: "none", fontSize: "14px" }}>
            Back to Editors
          </Link>
        </div>
      </div>
    );
  }

  return (
    <PageWrapper>
      <div style={{ background: "#16111b", minHeight: "100vh", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 0" }}>

          <Link to="/editors" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#988d9f", fontSize: "13px", textDecoration: "none", marginBottom: "32px" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m19 12H5M12 19l-7-7 7-7"/></svg>
            Back to Editors
          </Link>

          {/* Cover */}
          <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "32px", height: "220px", position: "relative" }}>
            <img src={editor.cover} alt={editor.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(22,17,27,0.9), transparent)" }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "24px", alignItems: "start" }} className="detail-grid">

            {/* Left */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Profile header */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                <img src={editor.avatar} alt={editor.name} style={{ width: "72px", height: "72px", borderRadius: "14px", objectFit: "cover", border: "2px solid rgba(255,255,255,0.1)" }} />
                <div>
                  <h1 style={{ color: "#eadfed", fontWeight: 700, fontSize: "24px" }}>{editor.name}</h1>
                  <p style={{ color: "#988d9f", fontSize: "13px", marginTop: "3px" }}>{editor.title}</p>
                  <p style={{ color: "#4d4354", fontSize: "12px", marginTop: "3px" }}>{editor.location}</p>
                </div>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px" }}>
                {[
                  { label: "Rating", value: editor.rating, color: "#fabc4e" },
                  { label: "Reviews", value: editor.reviews, color: "#eadfed" },
                  { label: "Status", value: editor.available ? "Open" : "Busy", color: editor.available ? "#4ade80" : "#988d9f" },
                ].map((s) => (
                  <div key={s.label} style={{ ...card, textAlign: "center" }}>
                    <p style={{ fontWeight: 700, fontSize: "20px", color: s.color }}>{s.value}</p>
                    <p style={{ color: "#988d9f", fontSize: "11px", marginTop: "4px" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              {/* About */}
              <div style={card}>
                <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "14px", marginBottom: "10px" }}>About</p>
                <p style={{ color: "#988d9f", fontSize: "13px", lineHeight: 1.7 }}>
                  {editor.name} is a professional video editor specializing in {editor.skills.join(", ")}.
                  Based in {editor.location}, they bring creativity and technical expertise to every project.
                  With {editor.reviews} completed projects and a {editor.rating} star rating,
                  they are one of the top editors on the platform.
                </p>
              </div>

              {/* Skills */}
              <div style={card}>
                <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "14px", marginBottom: "14px" }}>Skills</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {editor.skills.map((skill) => (
                    <span key={skill} style={{
                      padding: "6px 14px", borderRadius: "999px", fontSize: "12px",
                      background: "rgba(221,183,255,0.08)", color: "#ddb7ff",
                      border: "1px solid rgba(221,183,255,0.15)",
                    }}>{skill}</span>
                  ))}
                </div>
              </div>

              {/* Sample work */}
              <div style={card}>
                <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "14px", marginBottom: "14px" }}>Sample Work</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                  {[editor.cover, editor.avatar].map((src, i) => (
                    <div key={i} style={{ aspectRatio: "16/9", borderRadius: "10px", overflow: "hidden" }}>
                      <img src={src} alt="work" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right booking card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px", padding: "24px", position: "sticky", top: "80px",
              }}
            >
              <p style={{ color: "#988d9f", fontSize: "12px", marginBottom: "4px" }}>Starting from</p>
              <p style={{ color: "#eadfed", fontWeight: 700, fontSize: "32px", marginBottom: "2px" }}>
                ₹{editor.price.toLocaleString("en-IN")}
              </p>
              <p style={{ color: "#4d4354", fontSize: "11px", marginBottom: "24px" }}>per project</p>

              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "24px" }}>
                {["Professional editing", "Revisions included", "Fast delivery", "HD quality output"].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#ddb7ff", flexShrink: 0 }} />
                    <p style={{ color: "#cfc2d6", fontSize: "13px" }}>{item}</p>
                  </div>
                ))}
              </div>

              <Link to="/hire" style={{
                display: "block", width: "100%", padding: "13px", borderRadius: "10px",
                background: "#842bd2", color: "#fff", fontWeight: 600, fontSize: "14px",
                textDecoration: "none", textAlign: "center", marginBottom: "10px",
              }}>
                Hire {editor.name.split(" ")[0]}
              </Link>
              <button style={{
                width: "100%", padding: "13px", borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.12)", background: "transparent",
                color: "#cfc2d6", fontSize: "14px", cursor: "pointer",
              }}>
                Send Message
              </button>
              <p style={{ textAlign: "center", color: "#4d4354", fontSize: "11px", marginTop: "14px" }}>
                {editor.rating} · {editor.reviews} reviews
              </p>
            </motion.div>

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default EditorDetail;