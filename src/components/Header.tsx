"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Assuming most links navigate to hashes on the homepage
    const isActive = (path: string) => {
        if (pathname === '/' && path === '/') return true;
        if (pathname.startsWith(path) && path !== '/') return true;
        return false;
    };

    return (
        <header className={`header ${isScrolled || pathname !== '/' ? "scrolled" : ""}`}>
            <div className="container header-container">
                <Link href="/" className="logo">
                    Magna<span>stride</span>
                </Link>

                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <nav className={`nav ${isOpen ? "active" : ""}`}>
                    <Link href="/" className={`nav-link ${isActive('/') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="/about" className="nav-link" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="/products" className={`nav-link ${isActive('/products') ? 'active' : ''}`} onClick={() => setIsOpen(false)}>Products</Link>
                    <Link href="/#applications" className="nav-link" onClick={() => setIsOpen(false)}>Industries</Link>
                    <Link href="/contact" className="nav-link" onClick={() => setIsOpen(false)}>Contact</Link>
                    <Link href="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)}>
                        Request a Quote
                    </Link>
                </nav>
            </div>
        </header>
    );
}
