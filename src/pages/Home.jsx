import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import PageWrapper from "../components/PageWrapper";

const categories = [
  "Wedding", "Commercial", "Music Video", "Documentary",
  "Corporate", "Social Media", "Film", "Events",
];

function Home() {
  const s = (bg, border = "rgba(255,255,255,0.08)") => ({
    background: bg, border: `1px solid ${border}`, borderRadius: "12px",
  });

  return (
    <PageWrapper>
      <div style={{ background: "#16111b", color: "#eadfed", minHeight: "100vh" }}>

        {/* Hero */}
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "120px 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="hero-grid">

            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <span style={{
                  display: "inline-block", padding: "6px 14px", borderRadius: "999px",
                  background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.2)",
                  color: "#ddb7ff", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em",
                  textTransform: "uppercase", marginBottom: "24px",
                }}>
                  India's Largest Editor Network
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{ fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}
              >
                Hire Expert{" "}
                <span style={{ color: "#ddb7ff" }}>Video Editors</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{ color: "#cfc2d6", fontSize: "16px", lineHeight: 1.6, marginBottom: "36px", maxWidth: "440px" }}
              >
                Connect with India's top video editors for weddings, commercials,
                music videos, documentaries and more. Professional talent, delivered fast.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
              >
                <Link to="/editors" style={{
                  padding: "11px 24px", borderRadius: "8px", background: "#842bd2",
                  color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none",
                  display: "inline-flex", alignItems: "center", gap: "6px",
                }}>
                  Browse Editors
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </Link>
                <Link to="/hire" style={{
                  padding: "11px 24px", borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#eadfed", fontSize: "14px", textDecoration: "none",
                }}>
                  Post a Job
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ display: "flex", gap: "40px", marginTop: "48px" }}
              >
                {[["200+", "Active Editors"], ["500+", "Projects Done"], ["4.9", "Avg. Rating"]].map(([v, l]) => (
                  <div key={l}>
                    <p style={{ fontWeight: 700, fontSize: "24px", color: "#eadfed" }}>{v}</p>
                    <p style={{ fontSize: "12px", color: "#988d9f", marginTop: "2px" }}>{l}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right preview card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden md:block"
            >
              <div style={{
                ...s("rgba(255,255,255,0.03)"),
                padding: "24px", backdropFilter: "blur(12px)",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#fabc4e" }} />
                  <p style={{ color: "#988d9f", fontSize: "12px", fontWeight: 500 }}>New Editor Match · Wedding Specialist</p>
                </div>
                <div style={{ background: "#110c15", borderRadius: "10px", padding: "20px" }}>
                  <p style={{ color: "#ddb7ff", fontWeight: 700, fontSize: "18px", marginBottom: "16px" }}>Hire Expert Video Editors</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px", marginBottom: "16px" }}>
                    {[["200+", "Editors"], ["500+", "Projects"], ["4.9", "Rating"]].map(([v, l]) => (
                      <div key={l} style={{ ...s("rgba(255,255,255,0.04)"), padding: "12px", textAlign: "center" }}>
                        <p style={{ color: "#ddb7ff", fontWeight: 700, fontSize: "14px" }}>{v}</p>
                        <p style={{ color: "#988d9f", fontSize: "10px", marginTop: "2px" }}>{l}</p>
                      </div>
                    ))}
                  </div>
                  <p style={{ color: "#988d9f", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "10px" }}>Everything you need</p>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
                    {["Top Editors", "Fast Match", "Safe Payments", "Any Budget"].map((f) => (
                      <div key={f} style={{ ...s("rgba(255,255,255,0.03)"), padding: "10px" }}>
                        <p style={{ color: "#cfc2d6", fontSize: "12px" }}>{f}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Browse by Category */}
        <div style={{ background: "#1f1a23", padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "48px" }}>
                <h2 style={{ fontWeight: 700, fontSize: "28px", color: "#eadfed", marginBottom: "10px" }}>Browse by Category</h2>
                <p style={{ color: "#988d9f", fontSize: "14px" }}>Find specialized talent for any production type.</p>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px" }} className="cat-grid">
              {categories.map((cat, i) => (
                <FadeIn key={cat} delay={i * 0.04}>
                  <Link to="/editors" style={{
                    display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                    padding: "28px 16px", borderRadius: "12px", textDecoration: "none",
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                    transition: "border-color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(221,183,255,0.35)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                  >
                    <p style={{ color: "#cfc2d6", fontSize: "13px", fontWeight: 500 }}>{cat}</p>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Features bento */}
        <div style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <FadeIn>
              <h2 style={{ fontWeight: 700, fontSize: "28px", color: "#eadfed", marginBottom: "32px", maxWidth: "400px", lineHeight: 1.2 }}>
                Everything you need to deliver high-end videos
              </h2>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "12px" }} className="bento-grid">
              <FadeIn>
                <div style={{ ...s("rgba(255,255,255,0.03)"), padding: "36px", height: "100%" }}>
                  <h3 style={{ color: "#ddb7ff", fontWeight: 700, fontSize: "18px", marginBottom: "10px" }}>Real-time Review System</h3>
                  <p style={{ color: "#988d9f", fontSize: "14px", lineHeight: 1.6, marginBottom: "32px" }}>
                    Annotate frames directly and provide feedback with timestamped comments. No more endless email threads.
                  </p>
                  <div style={{
                    ...s("rgba(255,255,255,0.04)", "rgba(255,255,255,0.06)"),
                    height: "160px", display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{
                      width: "52px", height: "52px", borderRadius: "50%",
                      background: "rgba(132,43,210,0.25)", border: "1px solid rgba(132,43,210,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#ddb7ff"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {[
                  { title: "Secure Payments", desc: "Escrow protection ensures your funds are safe until you approve the final cut." },
                  { title: "Fast Turnaround", desc: "Our editors are vetted for speed and precision, delivering high-quality edits in record time." },
                ].map((f, i) => (
                  <FadeIn key={f.title} delay={i * 0.1}>
                    <div style={{ ...s("rgba(255,255,255,0.03)"), padding: "28px", flex: 1 }}>
                      <h3 style={{ color: "#eadfed", fontWeight: 600, fontSize: "15px", marginBottom: "8px" }}>{f.title}</h3>
                      <p style={{ color: "#988d9f", fontSize: "13px", lineHeight: 1.6 }}>{f.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: "#1f1a23", padding: "80px 24px" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <FadeIn>
              <h2 style={{ fontWeight: 700, fontSize: "32px", color: "#eadfed", marginBottom: "14px", lineHeight: 1.2 }}>
                Ready to start your project?
              </h2>
              <p style={{ color: "#988d9f", fontSize: "15px", marginBottom: "36px", lineHeight: 1.6 }}>
                Join hundreds of creators and businesses who find their creative partners on EditHire.
              </p>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/hire" style={{
                  padding: "12px 28px", borderRadius: "8px", background: "#842bd2",
                  color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none",
                }}>
                  Post a Job Now
                </Link>
                <Link to="/editors" style={{
                  padding: "12px 28px", borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.15)",
                  color: "#eadfed", fontSize: "14px", textDecoration: "none",
                }}>
                  Talk to an Expert
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}

export default Home;