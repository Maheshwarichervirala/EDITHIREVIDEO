import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login, signup } = useAuth();
  const navigate          = useNavigate();
  const [tab, setTab]     = useState("login");
  const [form, setForm]   = useState({ name: "", email: "", password: "" });
  const [error,   setError]   = useState("");
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    setError(""); setLoading(true);
    try {
      if (tab === "login") {
        await login(form.email, form.password);
      } else {
        if (!form.name) { setError("Please enter your name"); setLoading(false); return; }
        await signup(form.email, form.password, form.name);
      }
      navigate("/dashboard");
    } catch (err) {
      setError(err.message.replace("Firebase: ", "").replace(/\(auth.*\)/, ""));
    } finally {
      setLoading(false);
    }
  };

  const input = {
    width: "100%", padding: "11px 14px", borderRadius: "8px",
    background: "#110c15", border: "1px solid rgba(255,255,255,0.1)",
    color: "#eadfed", fontSize: "14px", outline: "none",
    boxSizing: "border-box",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#16111b", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <div style={{ width: "100%", maxWidth: "420px" }}>

        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <Link to="/" style={{ color: "#ddb7ff", fontSize: "13px", textDecoration: "none" }}>← Back to home</Link>
          <h1 style={{ color: "#eadfed", fontWeight: 700, fontSize: "28px", marginTop: "20px", marginBottom: "6px" }}>
            {tab === "login" ? "Welcome back" : "Join EditHire"}
          </h1>
          <p style={{ color: "#988d9f", fontSize: "14px" }}>
            {tab === "login" ? "Log in to your editor account" : "Create your editor profile"}
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "4px", marginBottom: "24px" }}>
          {["login", "signup"].map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "9px", borderRadius: "8px", border: "none", cursor: "pointer", fontSize: "13px", fontWeight: 500, transition: "all 0.2s",
              background: tab === t ? "#842bd2" : "transparent",
              color: tab === t ? "#fff" : "#988d9f",
            }}>
              {t === "login" ? "Log In" : "Sign Up"}
            </button>
          ))}
        </div>

        <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px", display: "flex", flexDirection: "column", gap: "16px" }}>

          {tab === "signup" && (
            <div>
              <label style={{ color: "#988d9f", fontSize: "12px", display: "block", marginBottom: "6px" }}>Full Name</label>
              <input name="name" value={form.name} onChange={handle} placeholder="Your full name" style={input} />
            </div>
          )}

          <div>
            <label style={{ color: "#988d9f", fontSize: "12px", display: "block", marginBottom: "6px" }}>Email</label>
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="your@email.com" style={input} />
          </div>

          <div>
            <label style={{ color: "#988d9f", fontSize: "12px", display: "block", marginBottom: "6px" }}>Password</label>
            <input name="password" type="password" value={form.password} onChange={handle} placeholder="••••••••" style={input} />
          </div>

          {error && (
            <div style={{ background: "rgba(255,75,75,0.08)", border: "1px solid rgba(255,75,75,0.2)", borderRadius: "8px", padding: "10px 14px", color: "#ff9494", fontSize: "13px" }}>
              {error}
            </div>
          )}

          <button onClick={handleSubmit} disabled={loading}
            style={{ width: "100%", padding: "12px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontWeight: 600, fontSize: "14px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.6 : 1 }}>
            {loading ? "Please wait..." : tab === "login" ? "Log In" : "Create Account"}
          </button>

        </div>

        <p style={{ textAlign: "center", color: "#4d4354", fontSize: "12px", marginTop: "20px" }}>
          By continuing you agree to our Terms of Service
        </p>

      </div>
    </div>
  );
}

export default Login;