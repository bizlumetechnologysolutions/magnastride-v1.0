"use client";

import styles from "./about.module.css";
import {
    Target, Award, Factory, ShieldCheck, Lightbulb, Microscope, Zap, CircleDot
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// GSAP Imports
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function AboutPage() {
    const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            // General fade up for sections
            gsap.utils.toArray(".fade-up-section").forEach((section: any) => {
                gsap.fromTo(section,
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power2.out"
                    }
                );
            });

            // Stagger arrays
            gsap.utils.toArray(".stagger-grid").forEach((grid: any) => {
                gsap.fromTo(grid.children,
                    { y: 30, opacity: 0 },
                    {
                        scrollTrigger: {
                            trigger: grid,
                            start: "top 85%"
                        },
                        y: 0,
                        opacity: 1,
                        duration: 0.6,
                        stagger: 0.15,
                        ease: "power2.out"
                    }
                );
            });
        });

        mm.add("(max-width: 767px)", () => {
            gsap.utils.toArray(".fade-up-section, .stagger-grid > *").forEach((section: any) => {
                gsap.fromTo(section,
                    { opacity: 0, y: 15 },
                    {
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                        },
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.out"
                    }
                );
            });
        });
    }, { scope: container });

    return (
        <div ref={container}>
            {/* Hero Section */}
            <section className={styles.aboutHero}>
                <div className={`${styles.heroContent} fade-up-section text-center`}>
                    <h1 className={styles.heroTitle}>About Magnastride</h1>
                    <p style={{ fontSize: "1.2rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.8, maxWidth: "700px", margin: "0 auto" }}>
                        Pioneering advanced electromagnetic solutions and high-precision automation components for global industries.
                    </p>
                </div>
            </section>

            {/* Company Overview Section */}
            <section className="section bg-soft-gradient">
                <div className="container">
                    <div className={styles.overviewGrid}>
                        {/* Left Column */}
                        <div className={`${styles.contentBlock} fade-up-section`}>
                            <span style={{ textTransform: "uppercase", letterSpacing: "2px", color: "var(--accent-color)", fontWeight: 700, fontSize: "0.85rem" }}>Company Overview</span>
                            <h2 style={{ marginTop: "1rem" }} className="section-title">Engineering Innovation Through Precision</h2>
                            <p>
                                Magnastride was founded with a singular focus: to engineer robust, high-performance electromagnetic components that power the most critical industrial applications. Based in Pune, India, we have built a reputation as a trusted OEM partner for complex manufacturing sectors.
                            </p>
                            <p>
                                Our core mission is to develop <strong>Import Substitute Innovations</strong>. By relying on rigorous in-house R&D, we offer high-quality superior alternatives to expensive imported systems, dramatically reducing lead times and strengthening domestic and global supply chains without compromising on performance.
                            </p>

                            <h3 style={{ marginTop: "3rem", display: "flex", alignItems: "center", gap: "10px" }}><Target className="text-secondary" /> Our Vision</h3>
                            <p>
                                To be the globally preferred partner for bespoke electromagnetic and motion control logic systems, setting industry benchmarks for load-holding reliability, transient voltage protection, and million-cycle operational lifespans.
                            </p>
                        </div>

                        {/* Right Column Highlights */}
                        <div style={{ width: "100%" }}>
                            <div
                                className={`${styles.highlightCards} stagger-grid`}
                                onScroll={(e) => {
                                    const element = e.currentTarget;
                                    const index = Math.round(element.scrollLeft / (element.offsetWidth * 0.70));
                                    const dots = document.querySelectorAll('.highlight-dot');
                                    dots.forEach((dot, i) => {
                                        if (i === index) dot.classList.add('active');
                                        else dot.classList.remove('active');
                                    });
                                }}
                            >
                                <div className={styles.highlightCard}>
                                    <div className={styles.highlightIcon}><ActivityIcon /></div>
                                    <h4>15+ Years</h4>
                                    <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "var(--text-muted)" }}>R&D Experience</p>
                                </div>
                                <div className={styles.highlightCard}>
                                    <div className={styles.highlightIcon}><Lightbulb size={32} /></div>
                                    <h4>7+ Patents</h4>
                                    <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "var(--text-muted)" }}>Proprietary Tech</p>
                                </div>
                                <div className={styles.highlightCard}>
                                    <div className={styles.highlightIcon}><ShieldCheck size={32} /></div>
                                    <h4>CE & RoHS</h4>
                                    <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "var(--text-muted)" }}>Fully Compliant</p>
                                </div>
                                <div className={styles.highlightCard}>
                                    <div className={styles.highlightIcon}><Factory size={32} /></div>
                                    <h4>ARAI Certified</h4>
                                    <p style={{ margin: "5px 0 0", fontSize: "0.9rem", color: "var(--text-muted)" }}>Automotive Grade</p>
                                </div>
                            </div>
                            <div className="scroll-hint">
                                {[0, 1, 2, 3].map((i) => (
                                    <div key={i} className={`scroll-dot highlight-dot ${i === 0 ? "active" : ""}`} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Research & Innovation Section */}
            <section className={`${styles.researchSection} bg-dark-refined`}>
                <div className="faint-bg-text" style={{ top: "15%", left: "50%", transform: "translateX(-50%)" }}>INNOVATION</div>
                <div className="container relative z-10">
                    <div className="text-center fade-up-section">
                        <h2 className="section-title center">Research & Innovation</h2>
                        <p className="section-subtitle center">
                            Continuous advancement in magnetic flux optimization and high-frequency actuation.
                        </p>
                    </div>

                    {/* Stats Bar */}
                    <div ref={statsRef} className="grid grid-4 stagger-grid" style={{ marginBottom: "5rem", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "3rem" }}>
                        <div>
                            <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--accent-color)" }}>
                                {statsInView ? <CountUp end={100} duration={2.5} /> : "0"}<span>%</span>
                            </div>
                            <div style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>In-House Design</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--accent-color)" }}>
                                {statsInView ? <CountUp end={5} duration={2.5} /> : "0"}<span>M+</span>
                            </div>
                            <div style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>Cycle Lifespans</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--accent-color)" }}>
                                {statsInView ? <CountUp end={94} duration={2.5} /> : "0"}<span>%</span>
                            </div>
                            <div style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>Max Efficiency</div>
                        </div>
                        <div>
                            <div style={{ fontSize: "3rem", fontWeight: 800, color: "var(--accent-color)" }}>
                                {statsInView ? <CountUp end={48} duration={2.5} /> : "0"}<span>hrs</span>
                            </div>
                            <div style={{ color: "#ffffff", fontSize: "0.9rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "1px" }}>Rapid Prototyping</div>
                        </div>
                    </div>

                    <div className={`${styles.timeline} stagger-grid`}>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4>Magnetic Flux Optimization</h4>
                                <p>Proprietary circuits designed to maximize holding force while simultaneously reducing residual retention to zero via precision anti-residual pins.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4>Transient Voltage Suppression</h4>
                                <p>Advanced embedded electronic shielding ensures our coils survive massive back-EMF spikes in intense industrial motor control scenarios.</p>
                            </div>
                        </div>
                        <div className={styles.timelineItem}>
                            <div className={styles.timelineDot}></div>
                            <div className={styles.timelineContent}>
                                <h4>Thermal Management Analysis</h4>
                                <p>Finite Element Analysis (FEA) driven thermal dissipation mapping ensures 100% duty cycle rating under continuous extreme heavy load conditions.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className={`${styles.foundersSection} bg-soft-gradient`}>
                <div className="container">
                    <div className="text-center fade-up-section">
                        <h2 className="section-title center">Executive Leadership</h2>
                        <p className="section-subtitle center">Led by engineering veterans intensely passionate about driving indigenous manufacturing and structural innovation.</p>
                    </div>

                    <div style={{ width: "100%" }}>
                        <div
                            className={`${styles.foundersGrid} stagger-grid`}
                            onScroll={(e) => {
                                const element = e.currentTarget;
                                const index = Math.round(element.scrollLeft / (element.offsetWidth * 0.85));
                                const dots = document.querySelectorAll('.founder-dot');
                                dots.forEach((dot, i) => {
                                    if (i === index) dot.classList.add('active');
                                    else dot.classList.remove('active');
                                });
                            }}
                        >
                            <div className={styles.founderCard}>
                                <div className={styles.founderImage} style={{ backgroundColor: "var(--primary-color)" }}>
                                    {/* Fallback pattern while no image exists */}
                                    <div style={{ width: "100%", height: "100%", opacity: 0.1, backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
                                </div>
                                <div className={styles.founderInfo}>
                                    <h3 className={styles.founderName}>Dr. Dhanashri Dhuri</h3>
                                    <span className={styles.founderRole}>Chief Operating Officer (COO)</span>
                                    <p className={styles.founderDesc}>
                                        Bringing over 15 years of experience in process industries and advanced materials research. With deep expertise in catalysis, nanomaterials, and applied electromagnetics, she successfully led high-impact programs at GE Research and Bharat Forge. Her innovation has resulted in over 40 journal publications and multiple patents. She oversees operational excellence, product validation, and research-driven innovation.
                                    </p>
                                    <div className={styles.founderTags}>
                                        <span className={styles.founderTag}>Ph.D DST-DAAD, NCL</span>
                                        <span className={styles.founderTag}>Post-Doc NIMS Japan</span>
                                        <span className={styles.founderTag}>40+ Publications</span>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.founderCard}>
                                <div className={styles.founderImage} style={{ backgroundColor: "var(--accent-color)" }}>
                                    <div style={{ width: "100%", height: "100%", opacity: 0.1, backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)", backgroundSize: "30px 30px" }}></div>
                                </div>
                                <div className={styles.founderInfo}>
                                    <h3 className={styles.founderName}>Dr. Krishnarao Dhuri</h3>
                                    <span className={styles.founderRole}>Chief Strategy & Marketing Officer (CSMO)</span>
                                    <p className={styles.founderDesc}>
                                        With more than 20 years of expertise in research, product development, and system-level engineering, Dr. Dhuri has contributed to global organizations like GE, Mahindra & Mahindra, and L&T. A proven serial technology entrepreneur and expert in system-level dynamics, optimization, and data science. At Magnastride, he drives strategic growth, technology commercialization, and key industry partnerships.
                                    </p>
                                    <div className={styles.founderTags}>
                                        <span className={styles.founderTag}>Ph.D. IIT Bombay</span>
                                        <span className={styles.founderTag}>Strategy & Growth</span>
                                        <span className={styles.founderTag}>Multiple US Patents</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="scroll-hint">
                            {[0, 1].map((i) => (
                                <div key={i} className={`scroll-dot founder-dot ${i === 0 ? "active" : ""}`} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

function ActivityIcon() {
    return <Microscope size={32} />;
}
