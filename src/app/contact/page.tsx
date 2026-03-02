import { Mail, MapPin, Phone, ArrowLeft, Clock } from "lucide-react";
import Link from "next/link";
import styles from "../page.module.css";
import brochureStyles from "../brochure/brochure.module.css";

export default function ContactPage() {
    return (
        <main className="main-content">
            <section className={brochureStyles.headerSection}>
                <div className="container">
                    <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                        <Link href="/#contact" className={brochureStyles.backLink}>
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </div>
                    <h1 className="section-title center" style={{ color: "#fff", marginBottom: "1rem" }}>
                        Speak To Engineering
                    </h1>
                    <p className="text-center" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
                        Connect directly with our technical team to discuss your application parameters, request quotes, or initiate custom prototyping.
                    </p>
                </div>
            </section>

            <section className="section bg-soft-gradient">
                <div className="container">
                    <div className={styles.contactGrid} style={{ alignItems: "start", marginTop: "-4rem", position: "relative", zIndex: 10 }}>
                        {/* Left Column - Contact Info */}
                        <div className="fade-up-section" style={{ background: "#fff", padding: "3rem", borderRadius: "var(--border-radius)", border: "1px solid var(--support-color)", boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
                            <h2 className="text-primary" style={{ marginBottom: "2rem" }}>Global Headquarters</h2>

                            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 3rem 0", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                                <li style={{ display: "flex", gap: "15px", alignItems: "flex-start" }}>
                                    <MapPin size={24} style={{ color: "var(--accent-color)", flexShrink: 0, marginTop: "4px" }} />
                                    <div>
                                        <strong>Manufacturing & R&D Center</strong><br />
                                        <span style={{ color: "var(--text-muted)", lineHeight: "1.6" }}>
                                            Plot No. 45, Sector 10, MIDC Chinchwad,<br />
                                            Pune, Maharashtra 411019, India
                                        </span>
                                    </div>
                                </li>
                                <li style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                    <Phone size={24} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                                    <div>
                                        <strong>Direct Engineering Line</strong><br />
                                        <span style={{ color: "var(--text-muted)" }}>+91 98765 43210</span>
                                    </div>
                                </li>
                                <li style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                    <Mail size={24} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                                    <div>
                                        <strong>Technical Sales</strong><br />
                                        <span style={{ color: "var(--text-muted)" }}>engineering@magnastride.com</span>
                                    </div>
                                </li>
                                <li style={{ display: "flex", gap: "15px", alignItems: "center" }}>
                                    <Clock size={24} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                                    <div>
                                        <strong>Operating Hours</strong><br />
                                        <span style={{ color: "var(--text-muted)" }}>Mon - Sat: 08:30 AM - 06:30 PM (IST)</span>
                                    </div>
                                </li>
                            </ul>

                            <div style={{ padding: "2rem", background: "var(--bg-soft-grey)", borderRadius: "var(--border-radius)", borderLeft: "4px solid var(--accent-color)" }}>
                                <h4 style={{ color: "var(--primary-color)", marginBottom: "0.5rem" }}>Rapid Prototyping Requests?</h4>
                                <p style={{ color: "var(--text-muted)", margin: 0, fontSize: "0.95rem" }}>
                                    For urgently required custom 3D-printed bobbins or specific force profiles, please use the <Link href="/custom-solution" style={{ color: "var(--secondary-color)", textDecoration: "underline" }}>Custom Solutions</Link> portal for faster routing.
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Engineering Inquiry Form */}
                        <div className="fade-up-section">
                            <div className={styles.contactForm} style={{ boxShadow: "0 10px 40px rgba(0,0,0,0.05)" }}>
                                <h2 className="text-primary" style={{ marginBottom: "2rem" }}>Submit Engineering Inquiry</h2>
                                <form>
                                    <div className={styles.formGroup}>
                                        <label>Company Name</label>
                                        <input type="text" className={styles.formControl} placeholder="Enter your registered company name" required />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Contact Person</label>
                                        <input type="text" className={styles.formControl} placeholder="Enter full name" required />
                                    </div>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup} style={{ flex: 1, marginRight: "1rem" }}>
                                            <label>Business Email</label>
                                            <input type="email" className={styles.formControl} placeholder="Email address" required />
                                        </div>
                                        <div className={styles.formGroup} style={{ flex: 1 }}>
                                            <label>Contact Number</label>
                                            <input type="tel" className={styles.formControl} placeholder="Phone number" required />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Product Domain of Interest</label>
                                        <select className={styles.formControl} required>
                                            <option value="">Select a product domain...</option>
                                            <option value="solenoids">Linear Solenoids</option>
                                            <option value="holding-magnets">Holding Magnets</option>
                                            <option value="rotary-actuators">Rotary Actuators</option>
                                            <option value="voice-coil">Voice Coil Systems</option>
                                            <option value="other">General Inquiry</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label>Technical Application Details</label>
                                        <textarea className={styles.formControl} rows={4} placeholder="Please briefly describe your application, necessary cycle load, spacing constraints, and operating environment..." required></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem", padding: "1rem", fontSize: "1.1rem" }}>
                                        <Mail size={18} style={{ marginRight: '10px' }} /> Send Message to Engineering
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
