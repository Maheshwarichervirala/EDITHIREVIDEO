import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { AnimatePresence, motion } from "framer-motion";
import editors from "../data/editors";

function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [query,      setQuery]      = useState("");
  const [results,    setResults]    = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const { user, logout }            = useAuth();
  const navigate                    = useNavigate();
  const searchRef                   = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setQuery("");
        setResults([]);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    if (!val.trim()) { setResults([]); return; }
    setResults(
      editors.filter((ed) =>
        ed.name.toLowerCase().includes(val.toLowerCase()) ||
        ed.title.toLowerCase().includes(val.toLowerCase()) ||
        ed.skills.some((s) => s.toLowerCase().includes(val.toLowerCase()))
      ).slice(0, 5)
    );
  };

  const handleSelect = (id) => {
    setSearchOpen(false); setQuery(""); setResults([]);
    navigate(`/editor/${id}`);
  };

  const handleLogout = async () => {
    await logout(); navigate("/"); setMenuOpen(false);
  };

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      background: "rgba(22,17,27,0.9)", backdropFilter: "blur(16px)",
      borderBottom: "1px solid rgba(255,255,255,0.08)",
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>

        <Link to="/" style={{ color: "#eadfed", fontWeight: 700, fontSize: "16px", textDecoration: "none", flexShrink: 0 }}>
          EditHire
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "32px", flex: 1, justifyContent: "center" }} className="hidden md:flex">
          <Link to="/editors" style={{ color: "#cfc2d6", fontSize: "14px", textDecoration: "none" }}>Find Editors</Link>
          <Link to="/hire"    style={{ color: "#cfc2d6", fontSize: "14px", textDecoration: "none" }}>Post a Job</Link>
          <Link to="/about"   style={{ color: "#cfc2d6", fontSize: "14px", textDecoration: "none" }}>About</Link>
        </div>

        {/* Search + auth */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }} className="hidden md:flex">

          {/* Search */}
          <div style={{ position: "relative" }} ref={searchRef}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "8px", padding: "7px 12px", width: "200px",
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#988d9f" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              <input
                type="text"
                value={query}
                onChange={handleSearch}
                onFocus={() => setSearchOpen(true)}
                placeholder="Search editors..."
                style={{ background: "transparent", color: "#eadfed", fontSize: "13px", outline: "none", width: "100%", border: "none" }}
              />
            </div>

            <AnimatePresence>
              {searchOpen && query && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 6 }}
                  style={{
                    position: "absolute", top: "44px", left: 0, right: 0, minWidth: "260px",
                    background: "#231e27", border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "12px", overflow: "hidden", boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                  }}
                >
                  {results.length === 0 ? (
                    <div style={{ padding: "16px", color: "#988d9f", fontSize: "13px", textAlign: "center" }}>
                      No editors found
                    </div>
                  ) : (
                    <>
                      <div style={{ padding: "10px 14px 6px", color: "#988d9f", fontSize: "11px", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>Editors</div>
                      {results.map((ed) => (
                        <button key={ed.id} onClick={() => handleSelect(ed.id)}
                          style={{ width: "100%", display: "flex", alignItems: "center", gap: "10px", padding: "10px 14px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
                          onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.05)"}
                          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                        >
                          <img src={ed.avatar} alt={ed.name} style={{ width: "32px", height: "32px", borderRadius: "8px", objectFit: "cover", flexShrink: 0 }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <p style={{ color: "#eadfed", fontSize: "13px", fontWeight: 500 }}>{ed.name}</p>
                            <p style={{ color: "#988d9f", fontSize: "11px" }}>{ed.title}</p>
                          </div>
                          <span style={{ color: "#fabc4e", fontSize: "11px" }}>{ed.rating}</span>
                        </button>
                      ))}
                      <button onClick={() => { navigate("/editors"); setSearchOpen(false); setQuery(""); }}
                        style={{ width: "100%", padding: "10px", borderTop: "1px solid rgba(255,255,255,0.08)", background: "transparent", border: "none", color: "#ddb7ff", fontSize: "12px", cursor: "pointer" }}>
                        View all editors
                      </button>
                    </>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {user ? (
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Link to="/dashboard" style={{ color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>Dashboard</Link>
              <button onClick={handleLogout}
                style={{ padding: "7px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#cfc2d6", fontSize: "13px", cursor: "pointer" }}>
                Log Out
              </button>
            </div>
          ) : (
            <div style={{ display: "flex", gap: "8px" }}>
              <Link to="/login"
                style={{ padding: "7px 14px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "transparent", color: "#cfc2d6", fontSize: "13px", textDecoration: "none" }}>
                Editor Login
              </Link>
              <Link to="/hire"
                style={{ padding: "7px 16px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontSize: "13px", fontWeight: 600, textDecoration: "none" }}>
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden"
          style={{ background: "transparent", border: "none", color: "#eadfed", cursor: "pointer", fontSize: "20px" }}>
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)", background: "#16111b", overflow: "hidden" }}
          >
            <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
              <Link to="/editors" onClick={() => setMenuOpen(false)} style={{ color: "#cfc2d6", fontSize: "14px", textDecoration: "none" }}>Find Editors</Link>
              <Link to="/hire"    onClick={() => setMenuOpen(false)} style={{ color: "#cfc2d6", fontSize: "14px", textDecoration: "none" }}>Post a Job</Link>
              <Link to="/about"   onClick={() => setMenuOpen(false)} style={{ color: "#cfc2d6", fontSize: "14px", textDecoration: "none" }}>About</Link>
              {user ? (
                <>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)} style={{ color: "#cfc2d6", fontSize: "14px", textDecoration: "none" }}>Dashboard</Link>
                  <button onClick={handleLogout} style={{ background: "transparent", border: "none", color: "#cfc2d6", fontSize: "14px", textAlign: "left", cursor: "pointer" }}>Log Out</button>
                </>
              ) : (
                <Link to="/login" onClick={() => setMenuOpen(false)}
                  style={{ padding: "10px 16px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontSize: "14px", fontWeight: 600, textDecoration: "none", textAlign: "center" }}>
                  Editor Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;