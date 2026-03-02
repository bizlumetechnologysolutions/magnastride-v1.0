import Link from "next/link";
import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="grid grid-4" style={{ gap: "3rem" }}>
                    <div>
                        <h3 className="footer-title">Quick Links</h3>
                        <ul className="footer-links">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/products">Products</Link></li>
                            <li><Link href="/#applications">Industries</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
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

                    <div>
                        <h3 className="footer-title">Certifications</h3>
                        <ul className="footer-links">
                            <li><span style={{ color: "var(--accent-color)", marginRight: "8px" }}>✔</span> CE Compliant</li>
                            <li><span style={{ color: "var(--accent-color)", marginRight: "8px" }}>✔</span> RoHS Certified</li>
                            <li><span style={{ color: "var(--accent-color)", marginRight: "8px" }}>✔</span> ARAI Certified</li>
                            <li><span style={{ color: "var(--accent-color)", marginRight: "8px" }}>✔</span> ISO 9001:2015</li>
                        </ul>
                        <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                            <a href="#" style={{ color: "var(--text-muted)", transition: "var(--transition)" }}><Linkedin size={20} /></a>
                            <a href="#" style={{ color: "var(--text-muted)", transition: "var(--transition)" }}><Twitter size={20} /></a>
                            <a href="#" style={{ color: "var(--text-muted)", transition: "var(--transition)" }}><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h3 className="footer-title">Quick Inquiry</h3>
                        <form style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            <input type="text" placeholder="Name" required style={{ padding: "0.8rem", borderRadius: "4px", border: "1px solid var(--support-color)", background: "#fff", width: "100%", fontFamily: "inherit" }} />
                            <input type="email" placeholder="Email Address" required style={{ padding: "0.8rem", borderRadius: "4px", border: "1px solid var(--support-color)", background: "#fff", width: "100%", fontFamily: "inherit" }} />
                            <textarea placeholder="Message" rows={3} required style={{ padding: "0.8rem", borderRadius: "4px", border: "1px solid var(--support-color)", background: "#fff", width: "100%", fontFamily: "inherit" }}></textarea>
                            <button type="submit" className="btn btn-primary" style={{ padding: "0.6rem", fontSize: "0.95rem" }}>Send Message</button>
                        </form>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Magnastride. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
