"use client";

import Link from "next/link";
import styles from "./page.module.css";
import {
  ArrowRight, Download, Mail, Zap, Target, Award, Cpu,
  Factory, ShieldCheck, Battery, Power, CircleDot, Activity, Settings, Settings2,
  ChevronDown, BookOpen
} from "lucide-react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

// GSAP Imports
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { HeroMotorScene } from "@/components/Three/HeroMotorScene";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Home() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Media match for heavy motion on desktop
    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // Hero Timeline
      const tl = gsap.timeline();

      // Radial Precision Grid slow rotation loop
      gsap.to(".bg-radial-precision", {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "linear"
      });

      // Hero Timeline
      tl.fromTo(".hero-content-anim",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power2.out"
        }
      );

      // Stagger product cards on scroll
      gsap.fromTo(".product-card-anim",
        { y: 20, opacity: 0 },
        {
          scrollTrigger: {
            trigger: "#products",
            start: "top 70%",
          },
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "power2.out"
        }
      );

      // General fade up for sections
      gsap.utils.toArray(".fade-up-section").forEach((section: any) => {
        gsap.fromTo(section,
          { y: 20, opacity: 0 },
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

      // Industrial background layers parallax
      gsap.utils.toArray(".parallax-bg").forEach((bg: any) => {
        gsap.to(bg, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: bg.parentElement,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          },
        });
      });
    });

    mm.add("(max-width: 767px)", () => {
      // Mobile Hero Fade
      gsap.fromTo(".hero-content-anim",
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out"
        }
      );

      gsap.utils.toArray(".fade-up-section").forEach((section: any) => {
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

      gsap.fromTo(".product-card-anim",
        { opacity: 0, y: 15 },
        {
          scrollTrigger: {
            trigger: "#products",
            start: "top 85%",
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out"
        }
      );
    });

  }, { scope: container });

  return (
    <div ref={container}>
      {/* Hero Section */}
      <section className={styles.hero} style={{ position: 'relative' }}>
        <div className="bg-radial-precision"></div>

        <HeroMotorScene />

        <div className={styles.heroContent} style={{ position: 'relative', zIndex: 10, pointerEvents: 'none' }}>
          <span className={`${styles.heroTag} hero-content-anim`}>Industrial OEM Manufacturer</span>
          <h1 className={`${styles.heroTitle} hero-content-anim`} style={{ pointerEvents: 'auto' }}>Precision Electromagnetic Solutions</h1>
          <p className={`${styles.heroSubtitle} hero-content-anim`} style={{ pointerEvents: 'auto' }}>
            Innovative Solenoids, Holding Magnets, Actuators & BLDC Systems Designed for Industrial Automation and Performance.
          </p>
          <div className={`${styles.heroButtons} hero-content-anim`} style={{ pointerEvents: 'auto' }}>
            <Link href="#products" className="btn btn-primary">
              View Products
            </Link>
            <Link href="#contact" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              Request a Quote <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className={`${styles.scrollIndicator} scroll-indicator-anim`}>
          <span>Scroll</span>
          <div className="scroll-indicator-icon">
            <ChevronDown size={24} />
          </div>
        </div>
      </section>

      {/* Hero Triage Blocks */}
      <div className={styles.triageGrid}>
        <Link href="#products" className={styles.triageCard}>
          <h3>Products & Services</h3>
          <p>Explore our premium electromagnetic solutions, brakes, and actuators.</p>
        </Link>
        <Link href="#industries" className={styles.triageCard}>
          <h3>Industries</h3>
          <p>Discover tailored components engineered for automation and medical sectors.</p>
        </Link>
        <Link href="/about" className={styles.triageCard}>
          <h3>Career & R&D</h3>
          <p>Join a robust team or learn about our patented rapid-response technologies.</p>
        </Link>
      </div>

      {/* About Highlights */}
      <section id="about" className={`section bg-soft-gradient`}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="text-center fade-up-section" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <h2 className="section-title">Engineered for Excellence</h2>
            <p className="section-subtitle center">
              Magnastride specializes in advanced electromagnetic product development, custom high-precision engineering, and import substitute manufacturing. All our systems are firmly CE & RoHS compliant and ARAI certified to meet rigorous global industrial standards.
            </p>
          </div>

          <div className={`${styles.aboutCards} fade-up-section`}>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Target size={28} /></div>
              <h3 className={styles.cardTitle}>Research Excellence</h3>
              <p className={styles.cardText}>Decades of precision research and hands-on expertise in advanced and applied electromagnetics.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Award size={28} /></div>
              <h3 className={styles.cardTitle}>Patented Technologies</h3>
              <p className={styles.cardText}>Proprietary innovations that deliver superior magnetic efficiency and unmatched load holding capabilities.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Factory size={28} /></div>
              <h3 className={styles.cardTitle}>Industrial Automation</h3>
              <p className={styles.cardText}>Robust engineering components designed to seamlessly integrate into high-cycle complex manufacturing flows.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.cardIcon}><Activity size={28} /></div>
              <h3 className={styles.cardTitle}>Pharma & Healthcare</h3>
              <p className={styles.cardText}>High-reliability actuator systems strictly tailored for the precision demands of medical equipment.</p>
            </div>
          </div>

          {/* Stats Grid */}
          <div ref={statsRef} className={`${styles.statsGrid} fade-up-section`}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                {statsInView ? <CountUp end={15} duration={2.5} /> : "0"}<span>+</span>
              </div>
              <div className={styles.statLabel}>Years Experience</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                {statsInView ? <CountUp end={4} duration={2.5} /> : "0"}
              </div>
              <div className={styles.statLabel}>Certifications</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                {statsInView ? <CountUp end={12} duration={2.5} /> : "0"}<span>+</span>
              </div>
              <div className={styles.statLabel}>Industries Served</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>
                {statsInView ? <CountUp end={7} duration={2.5} /> : "0"}
              </div>
              <div className={styles.statLabel}>Patents & R&D</div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className={`${styles.productsSection} bg-soft-gradient`}>
        <div className="container">
          <div className="fade-up-section">
            <h2 className="section-title center">Engineered Products</h2>
            <p className="section-subtitle center">High-performance custom magnetic components engineered to perfection for dynamic and diverse industrial applications.</p>
          </div>

          <div className={styles.solutionsContainer}>
            <div
              className={styles.solutionsGrid}
              id="solutions-scroll"
              onScroll={(e) => {
                const element = e.currentTarget;
                const index = Math.round(element.scrollLeft / (element.offsetWidth * 0.85));
                const dots = document.querySelectorAll(`.${styles.scrollDot}`);
                dots.forEach((dot, i) => {
                  if (i === index) dot.classList.add(styles.activeDot);
                  else dot.classList.remove(styles.activeDot);
                });
              }}
            >
              {/* Product 1 */}
              <div className={`${styles.productCard} product-card-anim`}>
                <div className={styles.productHeader}>
                  <Zap size={36} className={styles.productIcon} />
                  <h3>Solenoids (Linear)</h3>
                </div>
                <ul className={styles.productFeatures}>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Voltage:</strong> 12V / 24V / 48V DC</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Duty Cycle:</strong> 10% - 100% ED</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Apps:</strong> Sorting, Automation</li>
                </ul>
                <div className={styles.productActions}>
                  <Link href="/products/solenoids" className="btn btn-primary">View Details</Link>
                  <button className="btn btn-outline-primary"><Download size={18} style={{ marginRight: '8px' }} /> Datasheet</button>
                </div>
              </div>

              {/* Product 2 */}
              <div className={`${styles.productCard} product-card-anim`}>
                <div className={styles.productHeader}>
                  <ShieldCheck size={36} className={styles.productIcon} />
                  <h3>Holding Magnets</h3>
                </div>
                <ul className={styles.productFeatures}>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Voltage:</strong> 12V / 24V DC</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Duty Cycle:</strong> 100% ED</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Apps:</strong> Security, Fire doors</li>
                </ul>
                <div className={styles.productActions}>
                  <Link href="/products/holding-magnets" className="btn btn-primary">View Details</Link>
                  <button className="btn btn-outline-primary"><Download size={18} style={{ marginRight: '8px' }} /> Datasheet</button>
                </div>
              </div>

              {/* Product 3 */}
              <div className={`${styles.productCard} product-card-anim`}>
                <div className={styles.productHeader}>
                  <Settings size={36} className={styles.productIcon} />
                  <h3>Rotary Actuators</h3>
                </div>
                <ul className={styles.productFeatures}>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Voltage:</strong> Custom Build</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Duty Cycle:</strong> Intermittent</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Apps:</strong> Sorting gates, Textile</li>
                </ul>
                <div className={styles.productActions}>
                  <Link href="/products/rotary-actuators" className="btn btn-primary">View Details</Link>
                  <button className="btn btn-outline-primary"><Download size={18} style={{ marginRight: '8px' }} /> Datasheet</button>
                </div>
              </div>

              {/* Product 4 */}
              <div className={`${styles.productCard} product-card-anim`}>
                <div className={styles.productHeader}>
                  <Activity size={36} className={styles.productIcon} />
                  <h3>Voice Coil Systems</h3>
                </div>
                <ul className={styles.productFeatures}>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Precision:</strong> Micron-level control</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Speed:</strong> High frequency</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Apps:</strong> Medical, Optics</li>
                </ul>
                <div className={styles.productActions}>
                  <Link href="/products/voice-coil-systems" className="btn btn-primary">View Details</Link>
                  <button className="btn btn-outline-primary"><Download size={18} style={{ marginRight: '8px' }} /> Datasheet</button>
                </div>
              </div>

              {/* Product 5 */}
              <div className={`${styles.productCard} product-card-anim`}>
                <div className={styles.productHeader}>
                  <Power size={36} className={styles.productIcon} />
                  <h3>BLDC Motors</h3>
                </div>
                <ul className={styles.productFeatures}>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Voltage:</strong> 24V - 72V DC</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Efficiency:</strong> &gt; 90% Peak</li>
                  <li><CircleDot size={18} className="text-secondary" /> <strong>Apps:</strong> EV, Powertrains</li>
                </ul>
                <div className={styles.productActions}>
                  <Link href="/products/bldc-motors" className="btn btn-primary">View Details</Link>
                  <button className="btn btn-outline-primary"><Download size={18} style={{ marginRight: '8px' }} /> Datasheet</button>
                </div>
              </div>
            </div>

            <div className={styles.scrollDots}>
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className={`${styles.scrollDot} ${i === 0 ? styles.activeDot : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trade Fair / Event Teaser Section */}
      <section className={`${styles.eventSection} bg-soft-gradient`}>
        <div className="container">
          <div className={`${styles.eventContainer} fade-up-section`}>
            <div>
              <h2 className={styles.eventBrand}>Auto<span>Expo</span></h2>
              <span className={styles.eventDate}>February 18-21, 2027</span>
            </div>
            <div className={styles.eventDetails}>
              <h3>Visit us on our global fairs!</h3>
              <ul className={styles.eventList}>
                <li>High-performance electromagnetic brakes for autonomous robotics</li>
                <li>Swing drives for continuous industrial material flow</li>
                <li>Custom BLDC systems for heavy duty EV applications</li>
              </ul>
              <Link href="/contact" className="btn btn-primary">Schedule a Meeting</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries section */}
      <section id="industries" className={styles.industriesSection}>
        <div className={styles.industrialLabBg + " parallax-bg"}></div>
        <div className="container relative z-10">
          <div className="fade-up-section">
            <h2 className="section-title center">Industries We Serve</h2>
            <p className="section-subtitle center">
              Providing highly reliable magnetic control solutions adapted to unique sectoral challenges.
            </p>
          </div>

          <div
            className={`${styles.industriesGrid} fade-up-section`}
            style={{ marginTop: "4rem" }}
          >
            <div className={styles.industryCard}>
              <Factory size={56} className={styles.industryIcon} />
              <h3>Industrial Automation</h3>
              <p>Clamping & Sorting lines</p>
            </div>
            <div className={styles.industryCard}>
              <Settings2 size={56} className={styles.industryIcon} />
              <h3>Parking Systems</h3>
              <p>Multi-level holding mechanisms</p>
            </div>
            <div className={styles.industryCard}>
              <BookOpen size={56} className={styles.industryIcon} />
              <h3>Pharma Equipment</h3>
              <p>Strict hygiene grade actuators</p>
            </div>
            <div className={styles.industryCard}>
              <Cpu size={56} className={styles.industryIcon} />
              <h3>Electric Vehicles</h3>
              <p>Advanced Powertrain systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us & Contact Section */}
      <section id="contact" className="section-alt">
        <div className="container">
          <div className={styles.contactGrid}>
            <div className="fade-up-section">
              <h2 className="section-title">Why Choose Magnastride</h2>
              <p className="section-subtitle">Delivering precision, steadfast reliability, and uncompromised innovation to global OEMs.</p>

              <div className={styles.valueBlocks}>
                <div className={styles.valueBlock}>
                  <Zap size={28} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                  <div>
                    <h4>High Efficiency Designs</h4>
                    <p>Optimized magnetic circuits providing maximum force output with minimal residual power consumption.</p>
                  </div>
                </div>
                <div className={styles.valueBlock}>
                  <Cpu size={28} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                  <div>
                    <h4>Custom Engineering Support</h4>
                    <p>Comprehensive end-to-end co-development from initial prototyping strictly to mass manufacturing precision.</p>
                  </div>
                </div>
                <div className={styles.valueBlock}>
                  <ShieldCheck size={28} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                  <div>
                    <h4>Robust Voltage Protection</h4>
                    <p>Integrated transient voltage suppression for incredibly robust and continuous industrial environment runs.</p>
                  </div>
                </div>
                <div className={styles.valueBlock}>
                  <Activity size={28} style={{ color: "var(--accent-color)", flexShrink: 0 }} />
                  <div>
                    <h4>Long Life Cycle Validation</h4>
                    <p>Rigorously tested for millions of continuous cycles under intensive, variable industrial operating conditions.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="fade-up-section">
              <div className={styles.contactForm}>
                <h2 className="text-primary" style={{ marginBottom: "2rem" }}>Request Engineering Quote</h2>
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
                    <div className={styles.formGroup} style={{ flex: 1 }}>
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
                      <option value="bldc">BLDC Motors</option>
                      <option value="battery">Li-Ion Battery Packs</option>
                      <option value="other">Custom Rapid Prototyping</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Technical Application Details</label>
                    <textarea className={styles.formControl} placeholder="Please briefly describe your application, necessary cycle load, and environmental requirements..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: "100%", marginTop: "1rem" }}>
                    <Mail size={18} style={{ marginRight: '10px' }} /> Submit Engineering Inquiry
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ backgroundColor: "#eaeaea" }}>
        <div className={styles.mapContainer}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121059.04360431307!2d73.73845014389146!3d18.6297805908323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b82ccce44f47%3A0x53612d1c1fd33100!2sMIDC%2C%20Chinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1715000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, display: "block", filter: "grayscale(80%) contrast(1.2)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </section>

    </div>
  );
}
