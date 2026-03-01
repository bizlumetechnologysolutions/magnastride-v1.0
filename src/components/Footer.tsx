import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-4">
                    <div>
                        <div className="footer-logo">Magna<span>stride</span></div>
                        <p style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
                            Precision Electromagnetic Solutions for Industrial Applications. Innovative components designed for performance and reliability.
                        </p>
                        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
                            <a href="#" style={{ color: "var(--text-muted)" }}><Linkedin size={20} /></a>
                            <a href="#" style={{ color: "var(--text-muted)" }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: "var(--text-muted)" }}><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/industries">Industries</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-title">Certifications</h3>
                        <ul className="footer-links">
                            <li><span style={{ color: "var(--accent-color)" }}>✔</span> CE Compliant</li>
                            <li><span style={{ color: "var(--accent-color)" }}>✔</span> RoHS Certified</li>
                            <li><span style={{ color: "var(--accent-color)" }}>✔</span> ARAI Certified</li>
                            <li><span style={{ color: "var(--accent-color)" }}>✔</span> ISO 9001:2015</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="footer-title">Contact Us</h3>
                        <ul className="footer-links" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                            <li style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                                <MapPin size={20} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                                <span>MIDC Chinchwad,<br />Maharashtra, India</span>
                            </li>
                            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <Phone size={20} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                                <span>+91 98765 43210</span>
                            </li>
                            <li style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                                <Mail size={20} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                                <span>sales@magnastride.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Magnastride. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
