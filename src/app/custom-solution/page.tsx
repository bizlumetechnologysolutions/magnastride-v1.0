import { Settings, ArrowLeft } from "lucide-react";
import Link from "next/link";
import styles from "../brochure/brochure.module.css";

export default function CustomSolutionPage() {
    return (
        <main className="main-content">
            <section className={styles.headerSection}>
                <div className="container">
                    <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                        <Link href="/#contact" className={styles.backLink}>
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </div>
                    <h1 className="section-title center" style={{ color: "#fff", marginBottom: "1rem" }}>
                        Initiate Custom Co-Development
                    </h1>
                    <p className="text-center" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
                        Need an actuator perfectly matched to your envelope, force profile, or extreme environment? Our R&D team partners with OEMs worldwide.
                    </p>
                </div>
            </section>

            <section className="section bg-soft-gradient">
                <div className="container">
                    <div className={styles.contentCard} style={{ maxWidth: "800px" }}>
                        <div className={styles.iconCircle}>
                            <Settings size={48} className="text-accent" />
                        </div>
                        <h2>Let's build exactly what you need.</h2>
                        <p style={{ maxWidth: "600px", margin: "0 auto 3rem auto" }}>
                            From rapid 3D-printed bobbin validation to full FEA-driven magnetic flux optimization, Magnastride specializes in bringing specialized concepts to heavy manufacturing scale.
                        </p>

                        <div className="text-left" style={{ textAlign: "left" }}>
                            <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <div>
                                    <label style={{ display: "block", marginBottom: "0.5rem", fontWeight: "600", color: "var(--primary-color)" }}>Your Engineering Concept</label>
                                    <textarea
                                        rows={6}
                                        style={{ width: "100%", padding: "1rem", borderRadius: "10px", border: "1px solid var(--support-color)", background: "var(--bg-soft-grey)", resize: "vertical" }}
                                        placeholder="Briefly describe the mechanism you are powering, the stroke/force required, and any space constraints..."
                                        required
                                    ></textarea>
                                </div>

                                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                                    <input type="text" placeholder="Company Name" required style={{ padding: "1rem", borderRadius: "10px", border: "1px solid var(--support-color)" }} />
                                    <input type="email" placeholder="Work Email" required style={{ padding: "1rem", borderRadius: "10px", border: "1px solid var(--support-color)" }} />
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: "100%", padding: "1rem", fontSize: "1.1rem", marginTop: "1rem" }}>
                                    Request NDA & Scope Consultation
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
