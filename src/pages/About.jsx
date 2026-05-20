import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import FadeIn from "../components/FadeIn";
import PageWrapper from "../components/PageWrapper";

function About() {
  const stats = [
    ["200+", "Video Editors", "Active professionals on our platform"],
    ["500+", "Projects Done", "Successfully completed and delivered"],
    ["100+", "Happy Clients", "Brands and creators who trust us"],
    ["4.9", "Avg Rating", "Across all completed projects"],
  ];

  const values = [
    {
      title: "Quality First",
      desc: "Every editor on our platform goes through a strict vetting process. We only accept the top 10% of applicants.",
    },
    {
      title: "Fast Delivery",
      desc: "We match you with editors who are known for speed and precision. Most projects are delivered ahead of schedule.",
    },
    {
      title: "Trust & Safety",
      desc: "Escrow-based payments and verified profiles ensure both clients and editors are protected at every step.",
    },
    {
      title: "Top Talent",
      desc: "From wedding films to brand commercials — our editors specialize across every genre of video production.",
    },
  ];

  const steps = [
    { number: "01", title: "Post Your Job", desc: "Describe your project, budget and timeline in under 2 minutes." },
    { number: "02", title: "Get Matched", desc: "We surface the best editors for your specific project type." },
    { number: "03", title: "Review & Hire", desc: "Browse profiles, check portfolios and hire with confidence." },
    { number: "04", title: "Get Results", desc: "Receive your edited video and approve before any payment releases." },
  ];

  return (
    <PageWrapper>
      <div style={{ background: "#16111b", minHeight: "100vh" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(180deg, #1f1a23 0%, #16111b 100%)", padding: "120px 24px 80px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <span style={{
                display: "inline-block", padding: "5px 14px", borderRadius: "999px",
                background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.2)",
                color: "#ddb7ff", fontSize: "11px", fontWeight: 600,
                letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "24px",
              }}>
                About EditHire
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontWeight: 700, fontSize: "clamp(32px,5vw,52px)", color: "#eadfed", lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "20px" }}
            >
              Built for the future of{" "}
              <span style={{ color: "#ddb7ff" }}>video production</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: "#988d9f", fontSize: "17px", lineHeight: 1.7, maxWidth: "560px", margin: "0 auto" }}
            >
              EditHire is India's first dedicated marketplace connecting professional
              video editors with brands, creators and filmmakers who demand quality work.
            </motion.p>
          </div>
        </div>

        {/* Stats bar */}
        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)" }} className="stats-bar">
            {stats.map(([value, label, sub], i) => (
              <FadeIn key={label} delay={i * 0.08}>
                <div style={{
                  padding: "40px 24px", textAlign: "center",
                  borderRight: i < 3 ? "1px solid rgba(255,255,255,0.06)" : "none",
                }}>
                  <p style={{ fontWeight: 700, fontSize: "36px", color: "#ddb7ff", lineHeight: 1, marginBottom: "6px" }}>{value}</p>
                  <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "13px", marginBottom: "4px" }}>{label}</p>
                  <p style={{ color: "#4d4354", fontSize: "12px" }}>{sub}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="mission-grid">
            <FadeIn>
              <div>
                <span style={{
                  display: "inline-block", padding: "4px 12px", borderRadius: "999px",
                  background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.15)",
                  color: "#ddb7ff", fontSize: "11px", fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "20px",
                }}>Our Mission</span>
                <h2 style={{ fontWeight: 700, fontSize: "32px", color: "#eadfed", lineHeight: 1.2, letterSpacing: "-0.01em", marginBottom: "16px" }}>
                  Empowering creators at every level
                </h2>
                <p style={{ color: "#988d9f", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px" }}>
                  We believe every story deserves to be told beautifully. Our mission is
                  to make professional video editing accessible to everyone — from independent
                  creators to Fortune 500 brands.
                </p>
                <p style={{ color: "#988d9f", fontSize: "15px", lineHeight: 1.8 }}>
                  At the same time, we give talented editors a platform to grow their careers,
                  find consistent work, and build lasting relationships with clients who value
                  their craft.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                {[
                  { value: "2022", label: "Founded" },
                  { value: "India", label: "Headquartered" },
                  { value: "12+", label: "Cities covered" },
                  { value: "24hr", label: "Avg. match time" },
                ].map((item) => (
                  <div key={item.label} style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "12px", padding: "20px",
                  }}>
                    <p style={{ fontWeight: 700, fontSize: "22px", color: "#eadfed", marginBottom: "4px" }}>{item.value}</p>
                    <p style={{ color: "#4d4354", fontSize: "12px" }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>

        {/* How it works */}
        <div style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "#1f1a23" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ textAlign: "center", marginBottom: "56px" }}>
                <span style={{
                  display: "inline-block", padding: "4px 12px", borderRadius: "999px",
                  background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.15)",
                  color: "#ddb7ff", fontSize: "11px", fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px",
                }}>How It Works</span>
                <h2 style={{ fontWeight: 700, fontSize: "30px", color: "#eadfed", lineHeight: 1.2 }}>
                  From brief to final cut in 4 steps
                </h2>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2px" }} className="steps-grid">
              {steps.map((step, i) => (
                <FadeIn key={step.number} delay={i * 0.1}>
                  <div style={{
                    padding: "32px 24px",
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: i === 0 ? "14px 0 0 14px" : i === 3 ? "0 14px 14px 0" : "0",
                    position: "relative",
                  }}>
                    <p style={{
                      fontWeight: 700, fontSize: "11px", letterSpacing: "0.1em",
                      textTransform: "uppercase", color: "#ddb7ff", marginBottom: "20px",
                    }}>{step.number}</p>
                    <h3 style={{ color: "#eadfed", fontWeight: 600, fontSize: "15px", marginBottom: "10px" }}>{step.title}</h3>
                    <p style={{ color: "#988d9f", fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div style={{ padding: "80px 24px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{ marginBottom: "48px" }}>
                <span style={{
                  display: "inline-block", padding: "4px 12px", borderRadius: "999px",
                  background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.15)",
                  color: "#ddb7ff", fontSize: "11px", fontWeight: 600,
                  letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px",
                }}>Our Values</span>
                <h2 style={{ fontWeight: 700, fontSize: "30px", color: "#eadfed", lineHeight: 1.2, maxWidth: "400px" }}>
                  What we stand for
                </h2>
              </div>
            </FadeIn>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }} className="values-grid">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.08}>
                  <div style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px", padding: "28px",
                    transition: "border-color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = "rgba(221,183,255,0.25)"}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"}
                  >
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "10px",
                      background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.15)",
                      display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px",
                    }}>
                      <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#ddb7ff" }} />
                    </div>
                    <h3 style={{ color: "#eadfed", fontWeight: 600, fontSize: "16px", marginBottom: "10px" }}>{v.title}</h3>
                    <p style={{ color: "#988d9f", fontSize: "14px", lineHeight: 1.7 }}>{v.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: "80px 24px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <FadeIn>
              <div style={{
                background: "linear-gradient(135deg, rgba(132,43,210,0.15) 0%, rgba(221,183,255,0.05) 100%)",
                border: "1px solid rgba(221,183,255,0.15)",
                borderRadius: "20px", padding: "64px 48px",
                display: "grid", gridTemplateColumns: "1fr auto", gap: "40px", alignItems: "center",
              }} className="cta-grid">
                <div>
                  <h2 style={{ fontWeight: 700, fontSize: "30px", color: "#eadfed", lineHeight: 1.2, marginBottom: "12px" }}>
                    Ready to find your perfect editor?
                  </h2>
                  <p style={{ color: "#988d9f", fontSize: "15px", lineHeight: 1.7, maxWidth: "480px" }}>
                    Join hundreds of creators and businesses who find their creative partners on EditHire.
                    Post your first job for free — no commitment required.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px", flexShrink: 0 }}>
                  <Link to="/editors" style={{
                    padding: "12px 28px", borderRadius: "8px", background: "#842bd2",
                    color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none",
                    textAlign: "center", whiteSpace: "nowrap",
                  }}>
                    Browse Editors
                  </Link>
                  <Link to="/hire" style={{
                    padding: "12px 28px", borderRadius: "8px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#cfc2d6", fontSize: "14px", textDecoration: "none",
                    textAlign: "center", whiteSpace: "nowrap",
                  }}>
                    Post a Job Free
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </PageWrapper>
  );
}

export default About;