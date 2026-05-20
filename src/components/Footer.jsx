import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ background: "#110c15", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "60px 24px 32px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "40px", marginBottom: "48px" }} className="grid-footer">
          <div>
            <p style={{ color: "#eadfed", fontWeight: 700, fontSize: "16px", marginBottom: "12px" }}>EditHire</p>
            <p style={{ color: "#988d9f", fontSize: "13px", lineHeight: 1.7, maxWidth: "260px" }}>
              Professional video editing marketplace connecting talent with vision.
            </p>
          </div>
          <div>
            <p style={{ color: "#988d9f", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Explore</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link to="/editors" style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Find Editors</Link>
              <Link to="/editors" style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Success Stories</Link>
              <Link to="/hire"    style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Pricing</Link>
            </div>
          </div>
          <div>
            <p style={{ color: "#988d9f", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Company</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Link to="/about" style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>About Us</Link>
              <Link to="/about" style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Careers</Link>
              <Link to="/hire"  style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Contact Us</Link>
            </div>
          </div>
          <div>
            <p style={{ color: "#988d9f", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "16px" }}>Legal</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a href="#" style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Privacy Policy</a>
              <a href="#" style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Terms of Service</a>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "24px", textAlign: "center" }}>
          <p style={{ color: "#988d9f", fontSize: "12px" }}>
            © 2024 EditHire. All rights reserved. Professional Video Editing Marketplace.
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;