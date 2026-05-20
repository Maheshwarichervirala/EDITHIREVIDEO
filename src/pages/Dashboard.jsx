import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import Spinner from "../components/Spinner";
import EmptyState from "../components/EmptyState";
import PageWrapper from "../components/PageWrapper";
import { motion } from "framer-motion";

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate         = useNavigate();
  const [jobs, setJobs]  = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) { navigate("/login"); return; }
    const fetchJobs = async () => {
      try {
        const q    = query(collection(db, "jobs"), orderBy("createdAt", "desc"));
        const snap = await getDocs(q);
        setJobs(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
      } catch (err) { console.error(err); }
      finally { setLoading(false); }
    };
    fetchJobs();
  }, [user]);

  const handleLogout = async () => { await logout(); navigate("/"); };

  const card = { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "14px" };

  return (
    <PageWrapper showFooter={false}>
      <div style={{ background: "#16111b", minHeight: "100vh", paddingTop: "80px", paddingBottom: "80px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 0" }}>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}
          >
            <div>
              <p style={{ color: "#988d9f", fontSize: "13px", marginBottom: "4px" }}>Welcome back</p>
              <h1 style={{ color: "#eadfed", fontWeight: 700, fontSize: "28px" }}>{user?.displayName || "Editor"}</h1>
              <p style={{ color: "#4d4354", fontSize: "13px", marginTop: "4px" }}>{user?.email}</p>
            </div>
            <button onClick={handleLogout}
              style={{ padding: "9px 18px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.1)", background: "transparent", color: "#988d9f", fontSize: "13px", cursor: "pointer" }}>
              Log Out
            </button>
          </motion.div>

          {/* Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "12px", marginBottom: "32px" }}>
            {[
              { label: "Available Jobs", value: jobs.length },
              { label: "Applied Jobs",   value: 0 },
              { label: "Completed",      value: 0 },
            ].map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                style={{ ...card, padding: "20px" }}
              >
                <p style={{ color: "#ddb7ff", fontWeight: 700, fontSize: "28px" }}>{s.value}</p>
                <p style={{ color: "#988d9f", fontSize: "12px", marginTop: "4px" }}>{s.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Profile notice */}
          <div style={{
            background: "rgba(221,183,255,0.05)", border: "1px solid rgba(221,183,255,0.15)",
            borderRadius: "14px", padding: "20px 24px", marginBottom: "32px",
            display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px",
          }}>
            <div>
              <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>Complete your profile</p>
              <p style={{ color: "#988d9f", fontSize: "13px" }}>Add your skills and pricing to start getting hired.</p>
            </div>
            <button style={{ padding: "9px 20px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontSize: "13px", fontWeight: 600, border: "none", cursor: "pointer" }}>
              Set Up Profile
            </button>
          </div>

          <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "16px", marginBottom: "16px" }}>Latest Job Requests</p>

          {loading ? (
            <Spinner text="Loading jobs..." />
          ) : jobs.length === 0 ? (
            <EmptyState icon="" title="No jobs yet" desc="Share the platform with clients to start receiving job requests." link="/hire" linkText="Post a Job" />
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {jobs.map((job, i) => (
                <motion.div key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04 }}
                  style={{ ...card, padding: "20px" }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "16px", flexWrap: "wrap" }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
                        <span style={{ padding: "3px 10px", borderRadius: "999px", fontSize: "11px", background: "rgba(221,183,255,0.08)", color: "#ddb7ff", border: "1px solid rgba(221,183,255,0.15)" }}>
                          {job.category}
                        </span>
                        <span style={{ padding: "3px 10px", borderRadius: "999px", fontSize: "11px", background: "rgba(74,222,128,0.08)", color: "#4ade80", border: "1px solid rgba(74,222,128,0.2)" }}>
                          Open
                        </span>
                      </div>
                      <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "15px" }}>{job.title}</p>
                      <p style={{ color: "#988d9f", fontSize: "13px", marginTop: "4px" }}>{job.description}</p>
                      <div style={{ display: "flex", gap: "24px", marginTop: "14px", flexWrap: "wrap" }}>
                        {[["Budget", `₹${job.budget?.toLocaleString("en-IN")}`], ["Deadline", job.deadline || "Flexible"], ["Client", job.name]].map(([l, v]) => (
                          <div key={l}>
                            <p style={{ color: "#4d4354", fontSize: "11px" }}>{l}</p>
                            <p style={{ color: "#eadfed", fontWeight: 600, fontSize: "13px", marginTop: "2px" }}>{v}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button style={{ padding: "9px 20px", borderRadius: "8px", background: "#842bd2", color: "#fff", fontSize: "13px", fontWeight: 600, border: "none", cursor: "pointer", flexShrink: 0 }}>
                      Apply
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

        </div>
      </div>
    </PageWrapper>
  );
}

export default Dashboard;