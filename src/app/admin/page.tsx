"use client";

import { Lock, FileText, Package, Users, Settings } from "lucide-react";
import { useState } from "react";

export default function AdminPlaceholder() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    if (!isAuthenticated) {
        return (
            <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--bg-gray)" }}>
                <div style={{ background: "#fff", padding: "3rem", borderRadius: "8px", boxShadow: "var(--box-shadow)", width: "100%", maxWidth: "400px", textAlign: "center" }}>
                    <Lock size={48} style={{ color: "var(--primary-color)", margin: "0 auto 1.5rem" }} />
                    <h2 style={{ marginBottom: "1.5rem", color: "var(--primary-color)" }}>Admin Access</h2>
                    <form onSubmit={(e) => { e.preventDefault(); setIsAuthenticated(true); }}>
                        <input
                            type="password"
                            placeholder="Enter Admin Password"
                            style={{ width: "100%", padding: "0.75rem", marginBottom: "1rem", border: "1px solid #ccc", borderRadius: "4px" }}
                        />
                        <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>Login</button>
                    </form>
                    <p style={{ marginTop: "1rem", fontSize: "0.85rem", color: "#666" }}>*This is a frontend placeholder for the headless CMS admin interface.</p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", minHeight: "calc(100vh - 80px)" }}>
            {/* Sidebar */}
            <div style={{ width: "250px", background: "var(--primary-color)", color: "#fff", padding: "2rem 0" }}>
                <h3 style={{ padding: "0 2rem", marginBottom: "2rem", color: "var(--accent-color)" }}>Content Manager</h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li style={{ padding: "1rem 2rem", background: "rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}><FileText size={18} /> Pages</li>
                    <li style={{ padding: "1rem 2rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}><Package size={18} /> Products</li>
                    <li style={{ padding: "1rem 2rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}><Users size={18} /> Inquiries</li>
                    <li style={{ padding: "1rem 2rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "10px" }}><Settings size={18} /> Site Settings</li>
                </ul>
            </div>

            {/* Main Content */}
            <div style={{ flex: 1, padding: "3rem", background: "var(--bg-gray)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                    <h2 style={{ color: "var(--primary-color)" }}>Dashboard</h2>
                    <button onClick={() => setIsAuthenticated(false)} className="btn btn-outline-primary">Logout</button>
                </div>

                <div className="grid grid-3">
                    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--accent-color)" }}>
                        <h4 style={{ color: "#666", marginBottom: "0.5rem" }}>Total Products</h4>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--primary-color)" }}>14</div>
                    </div>
                    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--accent-color)" }}>
                        <h4 style={{ color: "#666", marginBottom: "0.5rem" }}>New Inquiries</h4>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--primary-color)" }}>5</div>
                    </div>
                    <div style={{ background: "#fff", padding: "1.5rem", borderRadius: "8px", borderLeft: "4px solid var(--accent-color)" }}>
                        <h4 style={{ color: "#666", marginBottom: "0.5rem" }}>Page Views (30d)</h4>
                        <div style={{ fontSize: "2rem", fontWeight: "bold", color: "var(--primary-color)" }}>2,451</div>
                    </div>
                </div>

                <div style={{ background: "#fff", padding: "2rem", borderRadius: "8px", marginTop: "2rem" }}>
                    <h4>Recent Content Updates</h4>
                    <p style={{ color: "#666", marginTop: "1rem" }}>This portal connects to your chosen headless CMS (e.g. Sanity/Strapi) where you can easily update text, add new products to the catalog, and modify specifications tables without touching the source code.</p>
                </div>
            </div>
        </div>
    );
}
