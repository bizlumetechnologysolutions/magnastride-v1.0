"use client";

import { Download, Mail, CheckCircle2, Factory, Zap, BarChart3 } from "lucide-react";
import Link from "next/link";
import styles from "./product.module.css";
import { use, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { ExplodedMotorScene } from "@/components/Three/ExplodedMotorScene";
import { PerformanceGaugeScene } from "@/components/Three/PerformanceGaugeScene";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Minimal mock database for product pages
const products = {
    "solenoids": {
        name: "Linear Solenoids",
        description: "High-performance linear solenoids engineered for industrial automation, sorting mechanisms, and vending machines. Designed to provide maximum force output with minimal power consumption, ensuring long life cycles under intensive use.",
        specs: [
            { label: "Operating Voltage", value: "12V / 24V / 48V DC" },
            { label: "Duty Cycle", value: "10% - 100% Continuous" },
            { label: "Stroke Length", value: "2mm - 30mm" },
            { label: "Life Expectancy", value: "> 5 Million Cycles" },
            { label: "IP Rating", value: "IP40 / Custom Options available" },
        ],
        performance: [
            { label: "Torque Delivery", value: 88 },
            { label: "Cycle Speed (RPM Eqv.)", value: 95 },
            { label: "Operational Efficiency", value: 92 }
        ],
        applications: [
            "Vending & Ticket Machines",
            "Textile Machinery Automation",
            "Packaging Equipment",
            "Sorting & Processing Lines"
        ]
    },
    "holding-magnets": {
        name: "Holding Magnets",
        description: "Industrial-grade electromagnetic holding magnets designed for secure locking, material handling, and safety applications. Our holding magnets feature robust construction with optimal magnetic flux distribution for superior hold forces.",
        specs: [
            { label: "Operating Voltage", value: "12V / 24V DC" },
            { label: "Duty Cycle", value: "100% ED" },
            { label: "Holding Force", value: "Up to 5000N" },
            { label: "Residual Magnetism", value: "Extremely low via anti-residual pin" },
            { label: "IP Rating", value: "IP65 / IP67" },
        ],
        performance: [
            { label: "Holding Load Rating", value: 98 },
            { label: "Response Time", value: 85 },
            { label: "Power Efficiency", value: 94 }
        ],
        applications: [
            "Fire Security Doors",
            "Robotic Arms & Handlers",
            "Machine Tool Clamping",
            "Multi-Level Parking Systems"
        ]
    }
} as const;

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const productId = resolvedParams.id as keyof typeof products;
    const container = useRef<HTMLDivElement>(null);

    // Minimal fallback for non-mapped products
    const product = products[productId] || {
        name: resolvedParams.id.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()),
        description: "Precision engineered electromagnetic component designed for robust industrial applications across various sectors.",
        specs: [
            { label: "Operating Voltage", value: "Custom based on requirement" },
            { label: "Duty Cycle", value: "Intermittent / Continuous" },
            { label: "Certification", value: "CE / RoHS / ARAI Compliant" }
        ],
        performance: [
            { label: "Torque Output", value: 80 },
            { label: "RPM Efficiency", value: 85 },
            { label: "Thermal Stability", value: 90 }
        ],
        applications: ["Industrial Automation", "Medical Equipment", "Electric Vehicles"]
    };

    useGSAP(() => {
        // Hero transition
        gsap.fromTo(".hero-element",
            { y: 30, opacity: 0 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }
        );

        // Content fade in
        gsap.fromTo(".content-section",
            { y: 20, opacity: 0 },
            {
                scrollTrigger: {
                    trigger: ".content-section",
                    start: "top 80%"
                },
                y: 0,
                opacity: 1,
                duration: 0.7,
                stagger: 0.2,
                ease: "power2.out"
            }
        );

        // Data bars fill animation
        gsap.utils.toArray(".data-bar-fill").forEach((bar: any) => {
            const width = bar.getAttribute("data-width");
            gsap.to(bar, {
                scrollTrigger: {
                    trigger: ".spec-box",
                    start: "top 85%"
                },
                width: width + "%",
                duration: 1.2,
                ease: "power2.out"
            });
        });

    }, { scope: container });

    return (
        <div className={styles.productPage} ref={container}>
            <div className={`${styles.heroBanner} bg-soft-gradient`}>
                <div className="container relative z-10">
                    <h1 className={`${styles.productTitle} hero-element`}>{product.name}</h1>
                    <p className={`${styles.productSubtitle} hero-element`}>Precision components for advanced engineering applications</p>
                </div>
            </div>

            <div className="section bg-soft-gradient">
                <div className="container">
                    <div className="grid grid-2" style={{ gap: "4rem" }}>
                        <div className="content-section">
                            <h2 className="section-title">Product Overview</h2>
                            <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-dark)" }}>
                                {product.description}
                            </p>

                            <div className="content-section" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }}>
                                <h3 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Interactive Component Architecture</h3>
                                <div style={{ backgroundColor: 'var(--bg-off-white)', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(15, 30, 51, 0.1)' }}>
                                    <ExplodedMotorScene />
                                </div>
                            </div>

                            <h3 style={{ marginTop: "3rem", fontSize: "1.5rem" }}>Key Advantages</h3>
                            <ul className={styles.advantageList}>
                                <li><CheckCircle2 className="text-accent" size={20} /> High efficiency magnetic circuit design</li>
                                <li><CheckCircle2 className="text-accent" size={20} /> Strict quality control and testing</li>
                                <li><CheckCircle2 className="text-accent" size={20} /> Domestic import substitute offering</li>
                                <li><CheckCircle2 className="text-accent" size={20} /> Full custom engineering support available</li>
                            </ul>

                            <h3 style={{ marginTop: "3rem", fontSize: "1.5rem" }}>Application Areas</h3>
                            <div className={styles.appsGrid}>
                                {product.applications.map((app, i) => (
                                    <div key={i} className={styles.appBadge}>
                                        <Factory size={16} /> {app}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="content-section">
                            <div className={`${styles.specBox} spec-box`}>
                                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0", padding: "1.5rem", borderBottom: "1px solid var(--support-color)" }}>
                                    <Zap className="text-accent" size={24} />
                                    <h3 style={{ margin: 0, color: "var(--primary-color)" }}>Technical Specifications</h3>
                                </div>

                                <table className={styles.specTable}>
                                    <tbody>
                                        {product.specs.map((spec, i) => (
                                            <tr key={i}>
                                                <th>{spec.label}</th>
                                                <td>{spec.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                                <div style={{ padding: "1.5rem", borderTop: "3px solid var(--accent-color)", backgroundColor: "#fff" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "1.5rem" }}>
                                        <BarChart3 className="text-accent" size={20} />
                                        <h4 style={{ margin: 0, color: "var(--primary-color)" }}>Performance Metrics</h4>
                                    </div>
                                    <PerformanceGaugeScene metrics={product.performance} />
                                </div>
                            </div>

                            <div className={styles.actionBox}>
                                <button className="btn btn-outline-primary" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%", marginBottom: "1rem" }}>
                                    <Download size={20} /> Download Full Datasheet
                                </button>
                                <Link href="/contact" className="btn btn-primary cta-pulse" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", width: "100%" }}>
                                    <Mail size={20} /> Submit Product Inquiry
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
