"use client";

import { Mail, MapPin, Phone, ArrowLeft, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import styles from "./contact.module.css";
import brochureStyles from "../brochure/brochure.module.css";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call processing structured engineering specs
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 1500);
    };

    return (
        <main className="main-content">
            <section className={brochureStyles.headerSection} style={{ paddingBottom: '4rem' }}>
                <div className="container">
                    <div style={{ textAlign: "left", marginBottom: "2rem" }}>
                        <Link href="/#contact" className={brochureStyles.backLink}>
                            <ArrowLeft size={16} /> Back to Home
                        </Link>
                    </div>
                    <h1 className="section-title center" style={{ color: "#fff", marginBottom: "1rem" }}>
                        Engineering Partnership
                    </h1>
                    <p className="text-center" style={{ color: "rgba(255,255,255,0.8)", maxWidth: "600px", margin: "0 auto" }}>
                        Initiate a technical consultation or request a custom OEM solution.
                    </p>
                </div>
            </section>

            <section className={styles.contactSection}>
                <div className={styles.technicalGridOverlay}></div>
                <div className="container">
                    <div className={styles.contactGrid}>
                        {/* Left Column - Contact Info */}
                        <div className={`fade-up-section ${styles.leftColumn}`}>
                            <h2 className={styles.heading}>Engineering Inquiry</h2>
                            <p className={styles.credibilityText}>
                                Connect directly with our technical team to discuss your application parameters, request quotes, or initiate custom prototyping. We deliver precision, steadfast reliability, and uncompromised innovation to global OEMs.
                            </p>

                            <ul className={styles.contactInfoList}>
                                <li className={styles.infoItem}>
                                    <MapPin size={24} className={styles.infoIcon} />
                                    <div className={styles.infoText}>
                                        <strong>Manufacturing & R&D Center</strong>
                                        <span>
                                            Plot No. 45, Sector 10, MIDC Chinchwad,<br />
                                            Pune, Maharashtra 411019, India
                                        </span>
                                    </div>
                                </li>
                                <li className={styles.infoItem}>
                                    <Phone size={24} className={styles.infoIcon} />
                                    <div className={styles.infoText}>
                                        <strong>Direct Engineering Line</strong>
                                        <span>+91 98765 43210</span>
                                    </div>
                                </li>
                                <li className={styles.infoItem}>
                                    <Mail size={24} className={styles.infoIcon} />
                                    <div className={styles.infoText}>
                                        <strong>Technical Sales</strong>
                                        <span>engineering@magnastride.com</span>
                                    </div>
                                </li>
                                <li className={styles.infoItem}>
                                    <Clock size={24} className={styles.infoIcon} />
                                    <div className={styles.infoText}>
                                        <strong>Operating Hours</strong>
                                        <span>Mon - Sat: 08:30 AM - 06:30 PM (IST)</span>
                                    </div>
                                </li>
                            </ul>

                            <div className={styles.badgesRow}>
                                <div className={styles.badge}><ShieldCheck size={18} /> ISO 9001:2015</div>
                                <div className={styles.badge}><CheckCircle2 size={18} /> CE Certified</div>
                            </div>
                        </div>

                        {/* Right Column - Engineering Inquiry Form */}
                        <div className="fade-up-section" style={{ zIndex: 2 }}>
                            <div className={styles.formCard}>
                                {submitted ? (
                                    <div style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                                        <CheckCircle2 size={64} style={{ color: 'var(--accent-color)', margin: '0 auto 1.5rem' }} />
                                        <h3 style={{ fontSize: '1.8rem', color: 'var(--primary-color)', marginBottom: '1rem', fontFamily: 'var(--font-heading)' }}>INQUIRY RECEIVED</h3>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Your technical specifications have been submitted successfully. An engineer will be in touch within 24 hours.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        <div className={styles.formGrid}>
                                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                                <label className={styles.label}>Company Name</label>
                                                <input type="text" className={styles.input} required />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Contact Person</label>
                                                <input type="text" className={styles.input} required />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Business Email</label>
                                                <input type="email" className={styles.input} required />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Contact Number</label>
                                                <input type="tel" className={styles.input} required />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Industry / Application Domain</label>
                                                <input type="text" className={styles.input} placeholder="e.g. Automation, Medical, Aerospace" required />
                                            </div>

                                            <div className={styles.formGroup}>
                                                <label className={styles.label}>Product Category</label>
                                                <select className={styles.input} required defaultValue="">
                                                    <option value="" disabled>Select category...</option>
                                                    <option value="solenoids">Linear Solenoids</option>
                                                    <option value="holding-magnets">Holding Magnets</option>
                                                    <option value="rotary-actuators">Rotary Actuators</option>
                                                    <option value="voice-coil">Voice Coil Systems</option>
                                                    <option value="custom">Custom Engineering Solution</option>
                                                </select>
                                            </div>

                                            <div className={`${styles.formGroup} ${styles.fullWidth}`}>
                                                <label className={styles.label}>Technical Requirements</label>
                                                <textarea
                                                    className={styles.input}
                                                    placeholder="Specify operating voltage, duty cycle, force/torque requirements, or environmental constraints..."
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                                            {isSubmitting ? (
                                                <div className={styles.loader}></div>
                                            ) : (
                                                <>SUBMIT ENGINEERING REQUEST</>
                                            )}
                                        </button>

                                        <p className={styles.trustLine}>
                                            <ShieldCheck size={16} style={{ display: 'inline', verticalAlign: 'text-bottom', marginRight: '6px' }} />
                                            All technical inquiries are handled directly by our engineering team.
                                        </p>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
