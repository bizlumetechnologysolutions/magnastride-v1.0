import Link from "next/link";
import { Zap, ShieldCheck, Activity, Power, Battery, Settings, Download } from "lucide-react";

export default function ProductsPage() {
    return (
        <div className="section" style={{ minHeight: "80vh", backgroundColor: "var(--bg-soft-grey)", paddingTop: "8rem" }}>
            <div className="container">
                <h1 className="section-title center">Engineered Solutions</h1>
                <p className="section-subtitle center">Precision components built for industrial strength and reliability.</p>

                <div className="grid grid-3" style={{ marginTop: "3rem" }}>
                    {/* Solenoids */}
                    <Link href="/products/solenoids" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                        <div className="oem-card" style={{ height: "100%", cursor: "pointer" }}>
                            <Zap size={40} style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Solenoids (Linear)</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>High-performance linear actuation for automation and sorting systems.</p>
                        </div>
                    </Link>

                    {/* Holding Magnets */}
                    <Link href="/products/holding-magnets" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                        <div className="oem-card" style={{ height: "100%", cursor: "pointer" }}>
                            <ShieldCheck size={40} style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Holding Magnets</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Industrial-grade electromagnetic holding for secure locking mechanisms.</p>
                        </div>
                    </Link>

                    {/* Rotary Actuators */}
                    <Link href="/products/rotary-actuators" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                        <div className="oem-card" style={{ height: "100%", cursor: "pointer" }}>
                            <Settings size={40} style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Rotary Actuators</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Precision rotary motion control for industrial applications.</p>
                        </div>
                    </Link>

                    {/* Voice Coil Systems */}
                    <Link href="/products/voice-coil-systems" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                        <div className="oem-card" style={{ height: "100%", cursor: "pointer" }}>
                            <Activity size={40} style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Voice Coil Systems</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Micron-level control and high-speed response applications.</p>
                        </div>
                    </Link>

                    {/* BLDC Motors */}
                    <Link href="/products/bldc-motors" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                        <div className="oem-card" style={{ height: "100%", cursor: "pointer" }}>
                            <Power size={40} style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>BLDC Motors</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>High-efficiency brushless DC motors for EV and robotics.</p>
                        </div>
                    </Link>

                    {/* Li-Ion Battery Packs */}
                    <Link href="/products/li-ion-battery-packs" style={{ textDecoration: "none", color: "inherit", display: "block", height: "100%" }}>
                        <div className="oem-card" style={{ height: "100%", cursor: "pointer" }}>
                            <Battery size={40} style={{ color: "var(--accent-color)", marginBottom: "1.5rem" }} />
                            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "0.5rem" }}>Li-Ion Battery Packs</h3>
                            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>Custom BMS integrated energy storage solutions.</p>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
}
