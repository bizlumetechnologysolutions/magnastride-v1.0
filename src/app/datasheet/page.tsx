import { BookOpen, ArrowLeft, Download } from "lucide-react";
import Link from "next/link";
import styles from "../brochure/brochure.module.css";

export default function DatasheetPage() {
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
                        Technical Datasheets
                    </h1>
                    <p className="text-center" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
                        Access comprehensive mechanical, electrical, and environmental specifications for our entire product catalog.
                    </p>
                </div>
            </section>

            <section className="section bg-soft-gradient">
                <div className="container">
                    <div className={styles.contentCard} style={{ maxWidth: "1000px" }}>
                        <div className={styles.iconCircle}>
                            <BookOpen size={48} className="text-accent" />
                        </div>
                        <h2>Product Family Documentation</h2>
                        <p style={{ maxWidth: "800px", margin: "0 auto 3rem auto" }}>
                            Detailed force metrics, duty cycle constraints, holding forces, operating voltages, and precise CAD dimensional data.
                        </p>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", textAlign: "left" }}>
                            <div style={{ padding: "2rem", border: "1px solid var(--support-color)", borderRadius: "var(--border-radius)", background: "#fff" }}>
                                <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>Linear Solenoids</h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8" }}>
                                    <li>› Pull & Push Type Specifications</li>
                                    <li>› Heavy Duty Tubular Variants</li>
                                    <li>› Open Frame Low-Profile</li>
                                </ul>
                                <button className="btn btn-outline" style={{ marginTop: "1.5rem", width: "100%", padding: "0.5rem" }}>
                                    <Download size={16} style={{ marginRight: "10px" }} /> Download Zip
                                </button>
                            </div>

                            <div style={{ padding: "2rem", border: "1px solid var(--support-color)", borderRadius: "var(--border-radius)", background: "#fff" }}>
                                <h3 style={{ color: "var(--primary-color)", marginBottom: "1rem" }}>Holding Magnets</h3>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: "1.8" }}>
                                    <li>› Flat Profile Round Magnets</li>
                                    <li>› Rectangular High-Force Bars</li>
                                    <li>› Electromanents (Zero-Power holds)</li>
                                </ul>
                                <button className="btn btn-outline" style={{ marginTop: "1.5rem", width: "100%", padding: "0.5rem" }}>
                                    <Download size={16} style={{ marginRight: "10px" }} /> Download Zip
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
