import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import PageWrapper from "../components/PageWrapper";

function PostJob() {
  const [step, setStep]           = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [form, setForm] = useState({ title: "", category: "", description: "", budget: "", deadline: "", name: "", email: "", phone: "" });

  const categories = ["Wedding", "Commercial", "Music Video", "Corporate", "Documentary", "Social Media", "Events", "Film", "Other"];
  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.name || !form.email) return alert("Please fill in your contact details!");
    setLoading(true);
    try {
      await addDoc(collection(db, "jobs"), { ...form, budget: parseFloat(form.budget), status: "open", createdAt: serverTimestamp() });
      setSubmitted(true);
    } catch (err) { alert("Something went wrong."); console.error(err); }
    finally { setLoading(false); }
  };

  const input = {
    width: "100%", padding: "11px 14px", borderRadius: "8px",
    background: "#110c15", border: "1px solid rgba(255,255,255,0.1)",
    color: "#eadfed", fontSize: "14px", outline: "none", boxSizing: "border-box",
  };

  const label = { color: "#988d9f", fontSize: "12px", display: "block", marginBottom: "6px" };

  if (submitted) {
    return (
      <PageWrapper showFooter={false}>
        <div style={{ minHeight: "100vh", background: "#16111b", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
          <div style={{ textAlign: "center", maxWidth: "420px" }}>
            <div style={{ width: "64px", height: "64px", borderRadius: "16px", background: "rgba(132,43,210,0.15)", border: "1px solid rgba(132,43,210,0.3)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ddb7ff" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
            <h2 style={{ color: "#eadfed", fontWeight: 700, fontSize: "26px", marginBottom: "10px" }}>Job Posted!</h2>
            <p style={{ color: "#988d9f", fontSize: "14px", lineHeight: 1.6, marginBottom: "28px" }}>
              Your job has been saved. Our editors will reach out within 24 hours.
            </p>
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "20px", textAlign: "left", marginBottom: "24px" }}>
              <p style={{ color: "#4d4354", fontSize: "11px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Job Summary</p>
              <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "15px" }}>{form.title}</p>
              <p style={{ color: "#988d9f", fontSize: "13px", marginTop: "4px" }}>{form.category}</p>
              <p style={{ color: "#ddb7ff", fontSize: "13px", marginTop: "4px" }}>Budget: ₹{parseInt(form.budget).toLocaleString("en-IN")}</p>
            </div>
            <button
              onClick={() => { setSubmitted(false); setStep(1); setForm({ title: "", category: "", description: "", budget: "", deadline: "", name: "", email: "", phone: "" }); }}
              style={{ padding: "11px 28px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer" }}>
              Post Another Job
            </button>
          </div>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper showFooter={false}>
      <div style={{ minHeight: "100vh", background: "#16111b", paddingTop: "100px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 24px" }}>

          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <span style={{ display: "inline-block", padding: "5px 12px", borderRadius: "999px", background: "rgba(221,183,255,0.08)", border: "1px solid rgba(221,183,255,0.2)", color: "#ddb7ff", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "16px" }}>Get Started</span>
            <h1 style={{ color: "#eadfed", fontWeight: 700, fontSize: "32px", marginBottom: "8px" }}>Post a Job</h1>
            <p style={{ color: "#988d9f", fontSize: "14px" }}>Tell us what you need and we'll match you with the right editor</p>
          </div>

          {/* Step indicator */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "36px" }}>
            {[1, 2, 3].map((s) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "32px", height: "32px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 600,
                  background: step >= s ? "#842bd2" : "rgba(255,255,255,0.04)",
                  border: step >= s ? "1px solid #842bd2" : "1px solid rgba(255,255,255,0.1)",
                  color: step >= s ? "#fff" : "#4d4354",
                }}>
                  {step > s ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg> : s}
                </div>
                {s < 3 && <div style={{ width: "40px", height: "1px", background: step > s ? "#842bd2" : "rgba(255,255,255,0.1)" }} />}
              </div>
            ))}
          </div>

          <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px" }}>

            {step === 1 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 style={{ color: "#eadfed", fontWeight: 600, fontSize: "17px" }}>Job Details</h2>
                <div>
                  <label style={label}>Job Title</label>
                  <input name="title" value={form.title} onChange={handle} placeholder="e.g. Wedding highlight video editor needed" style={input} />
                </div>
                <div>
                  <label style={label}>Category</label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px" }}>
                    {categories.map((cat) => (
                      <button key={cat} onClick={() => setForm({ ...form, category: cat })}
                        style={{ padding: "9px", borderRadius: "8px", fontSize: "12px", cursor: "pointer", transition: "all 0.15s",
                          background: form.category === cat ? "rgba(132,43,210,0.2)" : "transparent",
                          border: form.category === cat ? "1px solid #842bd2" : "1px solid rgba(255,255,255,0.08)",
                          color: form.category === cat ? "#ddb7ff" : "#988d9f",
                        }}>
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={label}>Description</label>
                  <textarea name="description" value={form.description} onChange={handle} rows={4} placeholder="Describe your project in detail..."
                    style={{ ...input, resize: "none", lineHeight: 1.6 }} />
                </div>
                <button onClick={() => { if (!form.title || !form.category) return alert("Please fill in title and category!"); setStep(2); }}
                  style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer" }}>
                  Continue
                </button>
              </div>
            )}

            {step === 2 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 style={{ color: "#eadfed", fontWeight: 600, fontSize: "17px" }}>Budget & Timeline</h2>
                <div>
                  <label style={label}>Budget (₹)</label>
                  <input name="budget" type="number" value={form.budget} onChange={handle} placeholder="e.g. 5000" style={input} />
                  <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
                    {["3000", "5000", "10000", "20000"].map((b) => (
                      <button key={b} onClick={() => setForm({ ...form, budget: b })}
                        style={{ flex: 1, padding: "8px", borderRadius: "8px", fontSize: "11px", cursor: "pointer",
                          background: form.budget === b ? "rgba(132,43,210,0.2)" : "transparent",
                          border: form.budget === b ? "1px solid #842bd2" : "1px solid rgba(255,255,255,0.08)",
                          color: form.budget === b ? "#ddb7ff" : "#988d9f",
                        }}>
                        ₹{parseInt(b).toLocaleString("en-IN")}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label style={label}>Deadline</label>
                  <input name="deadline" type="date" value={form.deadline} onChange={handle} style={input} />
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => setStep(1)} style={{ flex: 1, padding: "12px", borderRadius: "8px", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#988d9f", fontSize: "14px", cursor: "pointer" }}>Back</button>
                  <button onClick={() => { if (!form.budget) return alert("Please enter a budget!"); setStep(3); }}
                    style={{ flex: 1, padding: "12px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontWeight: 600, fontSize: "14px", border: "none", cursor: "pointer" }}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <h2 style={{ color: "#eadfed", fontWeight: 600, fontSize: "17px" }}>Your Contact Details</h2>
                <div>
                  <label style={label}>Full Name</label>
                  <input name="name" value={form.name} onChange={handle} placeholder="Your full name" style={input} />
                </div>
                <div>
                  <label style={label}>Email</label>
                  <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" style={input} />
                </div>
                <div>
                  <label style={label}>Phone (optional)</label>
                  <input name="phone" value={form.phone} onChange={handle} placeholder="+91 00000 00000" style={input} />
                </div>
                <div style={{ background: "#110c15", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", padding: "16px" }}>
                  <p style={{ color: "#4d4354", fontSize: "11px", marginBottom: "10px", textTransform: "uppercase", letterSpacing: "0.06em" }}>Job Summary</p>
                  <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "14px" }}>{form.title}</p>
                  <p style={{ color: "#988d9f", fontSize: "12px", marginTop: "4px" }}>{form.category}</p>
                  <p style={{ color: "#ddb7ff", fontSize: "12px", marginTop: "4px" }}>₹{parseInt(form.budget || 0).toLocaleString("en-IN")}</p>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button onClick={() => setStep(2)} style={{ flex: 1, padding: "12px", borderRadius: "8px", background: "transparent", border: "1px solid rgba(255,255,255,0.1)", color: "#988d9f", fontSize: "14px", cursor: "pointer" }}>Back</button>
                  <button onClick={handleSubmit} disabled={loading}
                    style={{ flex: 1, padding: "12px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontWeight: 600, fontSize: "14px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1 }}>
                    {loading ? "Saving..." : "Post Job"}
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default PostJob;