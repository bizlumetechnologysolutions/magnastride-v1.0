import { FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";
import styles from "./brochure.module.css";

export default function BrochurePage() {
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
                        Corporate Brochure
                    </h1>
                    <p className="text-center" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
                        Get a comprehensive overview of Magnastride's capabilities, our engineering approach, and our commitment to absolute precision.
                    </p>
                </div>
            </section>

            <section className="section bg-soft-gradient">
                <div className="container">
                    <div className={styles.contentCard}>
                        <div className={styles.iconCircle}>
                            <FileText size={48} className="text-accent" />
                        </div>
                        <h2>Magnastride Overview 2026/2027</h2>
                        <p>
                            This complete company brochure covers our history, our R&D processes, global certifications, and high-level case studies across 8 macro-industries.
                        </p>
                        <div className={styles.actionContainer}>
                            <p className="text-muted" style={{ fontSize: "0.9rem", marginBottom: "1rem" }}>
                                PDF Format • 12 MB • English
                            </p>
                            {/* In a real app this would point to a public PDF asset */}
                            <a href="#" className="btn btn-primary">
                                Download Full Brochure (PDF)
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
