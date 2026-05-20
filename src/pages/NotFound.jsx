import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <div style={{ minHeight: "100vh", background: "#16111b", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px" }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        style={{ textAlign: "center" }}
      >
        <p style={{ fontSize: "80px", fontWeight: 700, color: "#ddb7ff", lineHeight: 1, marginBottom: "16px" }}>404</p>
        <h2 style={{ color: "#eadfed", fontWeight: 700, fontSize: "24px", marginBottom: "10px" }}>Scene Not Found</h2>
        <p style={{ color: "#988d9f", fontSize: "14px", lineHeight: 1.6, maxWidth: "320px", margin: "0 auto 32px" }}>
          Looks like this page got cut from the final edit. Let's get you back on track.
        </p>
        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/" style={{ padding: "11px 24px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
            Back to Home
          </Link>
          <Link to="/editors" style={{ padding: "11px 24px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.12)", color: "#eadfed", fontSize: "14px", textDecoration: "none" }}>
            Browse Editors
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;