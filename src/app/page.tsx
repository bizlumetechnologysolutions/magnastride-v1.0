"use client";

import Link from "next/link";
import styles from "./page.module.css";
import {
  ArrowRight, Download, Mail, Zap, Target, Award, Cpu,
  Factory, ShieldCheck, Battery, Power, CircleDot, Activity, Settings, Settings2,
  ChevronDown, BookOpen, CheckCircle2, Phone
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

      // Subtle electromagnetic pulse
      gsap.to(".hero-pulse-anim", {
        backgroundColor: "rgba(12, 24, 42, 0.6)",
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
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

      // Line expansion on scroll for dividers
      gsap.utils.toArray(".section-divider").forEach((divider: any) => {
        gsap.fromTo(divider,
          { scaleX: 0 },
          {
            scrollTrigger: {
              trigger: divider,
              start: "top 95%",
            },
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            transformOrigin: "left center"
          }
        );
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
      <section className={styles.hero} style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="bg-radial-precision"></div>
        <div className={`${styles.heroOverlay} hero-pulse-anim`}></div>

        <div className={styles.heroContent} style={{ position: 'relative', zIndex: 10 }}>
          <span className={`${styles.heroTag} hero-content-anim`}>Industrial OEM Excellence</span>
          <h1 className={`${styles.heroTitle} hero-content-anim`}>Engineered for Extreme Reliability</h1>
          <p className={`${styles.heroSubtitle} hero-content-anim`}>
            High-Performance Electromagnetic Brakes, Precision Solenoids, and Actuators Built for Mission-Critical Industrial Systems.
          </p>
          <div className={`${styles.heroButtons} hero-content-anim`}>
            <Link href="#products" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.05rem', fontWeight: 'bold' }}>
              Explore Products
            </Link>
            <Link href="#contact" className={`btn ${styles.btnOutlineLight}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '1rem 2rem', fontSize: '1.05rem', fontWeight: 'bold' }}>
              Talk to Engineering Team <ArrowRight size={18} />
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
      <div className="section-divider"></div>

      {/* About Highlights */}
      <section id="about" className={`section bg-off-white`}>
        <div className="faint-bg-text" style={{ top: "10%", right: "-5%" }}>ENGINEERING</div>
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
      <div className="section-divider"></div>

      {/* 3.5 Featured Product Spotlight */}
      <section className="section bg-soft-gradient">
        <div className="container">
          <div className={`fade-up-section ${styles.spotlightContainer}`}>
            <div className={styles.spotlightImage}>
              <img src="https://images.unsplash.com/photo-1580983546522-68e178120b08?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="High-Speed Linear Actuator" />
              <div className={styles.spotlightBadge}>Featured Innovation</div>
            </div>
            <div className={styles.spotlightContent}>
              <h2 className="section-title" style={{ fontSize: "2.5rem" }}>High-Speed Linear Actuator Pro</h2>
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                Engineered for extreme cycle times with 30% less heat generation. Designed to seamlessly integrate into rapid sorting applications with precision force output.
              </p>
              <ul className={styles.spotlightSpecs}>
                <li><strong>Force Output:</strong> 120N to 800N</li>
                <li><strong>Duty Cycle:</strong> 100% Continuous</li>
                <li><strong>Life:</strong> 10+ Million Cycles</li>
              </ul>
              <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                <Link href="/contact" className="btn btn-primary">
                  <Download size={20} style={{ marginRight: "10px" }} /> Download Technical Datasheet
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-divider"></div>


      < section id="products" className={`${styles.productsSection} bg-dark-refined`} >
        <div className="faint-bg-text" style={{ bottom: "10%", left: "-5%" }}>PRECISION</div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className="fade-up-section" style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center' }}>
            <h2 className="section-title">Engineered Products</h2>
            <p className="section-subtitle">
              High-performance precision magnetic components crafted for maximum durability and unyielding reliability in dynamic industrial applications.
            </p>
          </div>

          <div className={`${styles.categoryGrid}`}>
            {/* 1. Linear Solenoids */}
            <Link href="/products/solenoids" className={`${styles.categoryCard} product-card-anim`}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Linear Solenoids" loading="lazy" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Linear Solenoids</h3>
                <p>High-performance linear actuation engineered for rapid sorting, automation, and dispensing.</p>
                <div className={styles.learnMore}>Learn More <ArrowRight size={18} /></div>
              </div>
            </Link>

            {/* 2. Holding Magnets */}
            <Link href="/products/holding-magnets" className={`${styles.categoryCard} product-card-anim`}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1504917595217-d4f50060cb05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Holding Magnets" loading="lazy" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Holding Magnets</h3>
                <p>Industrial-grade locking mechanisms designed for maximum holding force and absolute security.</p>
                <div className={styles.learnMore}>Learn More <ArrowRight size={18} /></div>
              </div>
            </Link>

            {/* 3. Rotary Actuators */}
            <Link href="/products/rotary-actuators" className={`${styles.categoryCard} product-card-anim`}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1611078440570-381c81881765?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Rotary Actuators" loading="lazy" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Rotary Actuators</h3>
                <p>Precision bi-directional rotary control built exclusively to endure continuous heavy-duty industrial execution.</p>
                <div className={styles.learnMore}>Learn More <ArrowRight size={18} /></div>
              </div>
            </Link>

            {/* 4. Voice Coil Systems */}
            <Link href="/products/voice-coil-systems" className={`${styles.categoryCard} product-card-anim`}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Voice Coil Systems" loading="lazy" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Voice Coil Systems</h3>
                <p>Micron-level manipulation paired with frictionless acceleration for advanced medical and optical deployments.</p>
                <div className={styles.learnMore}>Learn More <ArrowRight size={18} /></div>
              </div>
            </Link>

            {/* 5. BLDC Motors */}
            <Link href="/products/bldc-motors" className={`${styles.categoryCard} product-card-anim`}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1635308693740-9a25b16e456c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="BLDC Motors" loading="lazy" />
              </div>
              <div className={styles.categoryContent}>
                <h3>BLDC Motors</h3>
                <p>Hyper-efficient, heavy-duty brushless powertrains enabling the future of robotics and electric mobility.</p>
                <div className={styles.learnMore}>Learn More <ArrowRight size={18} /></div>
              </div>
            </Link>

            {/* 6. Custom Prototyping */}
            <Link href="/products/li-ion-battery-packs" className={`${styles.categoryCard} product-card-anim`}>
              <div className={styles.categoryImage}>
                <img src="https://images.unsplash.com/photo-1504312151625-1e4e6113b246?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Li-Ion Battery Packs" loading="lazy" />
              </div>
              <div className={styles.categoryContent}>
                <h3>Li-Ion Battery Packs</h3>
                <p>Custom engineered battery management systems perfectly tailored for demanding OEM energy storage.</p>
                <div className={styles.learnMore}>Learn More <ArrowRight size={18} /></div>
              </div>
            </Link>
          </div>
        </div>
      </section >

      {/* Trade Fair / Event Teaser Section */}
      < section className={`${styles.eventSection} bg-off-white`
      }>
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
      </section >

      {/* 4. Industry Applications section */}
      < section id="applications" className={`${styles.applicationsSection} bg-soft-grey`} >
        <div className="faint-bg-text" style={{ top: "20%", right: "-10%" }}>SOLUTIONS</div>
        <div className="container relative z-10">
          <div className="fade-up-section text-center" style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
            <h2 className="section-title">Industrial Applications</h2>
            <p className="section-subtitle center">
              Providing highly reliable magnetic control solutions adapted to unique sectoral challenges. Build your mission-critical systems with confidence.
            </p>
          </div>

          <div className={`${styles.applicationsGrid} fade-up-section`}>
            {/* Pharma & Healthcare */}
            <div className={styles.applicationCard}>
              <div className={styles.applicationImage}>
                <img src="https://images.unsplash.com/photo-1583324113626-70df0f4deaab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pharma & Healthcare" />
                <div className={styles.applicationIconWrapper}>
                  <Activity size={28} />
                </div>
              </div>
              <div className={styles.applicationContent}>
                <h3>Pharma &<br />Healthcare</h3>
                <p>Strict hygiene-grade actuators and precision dosing controls for medical equipment and robotics.</p>
              </div>
            </div>

            {/* Automation & Sorting */}
            <div className={styles.applicationCard}>
              <div className={styles.applicationImage}>
                <img src="https://images.unsplash.com/photo-1565439390145-236b2d29497e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Industrial Automation" />
                <div className={styles.applicationIconWrapper}>
                  <Factory size={28} />
                </div>
              </div>
              <div className={styles.applicationContent}>
                <h3>Industrial<br />Automation</h3>
                <p>High-speed clamping, dispensing, and sorting mechanisms built for continuous manufacturing flow.</p>
              </div>
            </div>

            {/* EV & Powertrain */}
            <div className={styles.applicationCard}>
              <div className={styles.applicationImage}>
                <img src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Electric Vehicles" />
                <div className={styles.applicationIconWrapper}>
                  <Battery size={28} />
                </div>
              </div>
              <div className={styles.applicationContent}>
                <h3>Electric<br />Vehicles</h3>
                <p>Advanced powertrains, thermal management actuation, and energy retention systems for mobility.</p>
              </div>
            </div>

            {/* Multi-Level Parking */}
            <div className={styles.applicationCard}>
              <div className={styles.applicationImage}>
                <img src="https://images.unsplash.com/photo-1574343831871-384358a91c13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Multi-Level Parking" />
                <div className={styles.applicationIconWrapper}>
                  <ShieldCheck size={28} />
                </div>
              </div>
              <div className={styles.applicationContent}>
                <h3>Multi-Level<br />Parking</h3>
                <p>Fail-safe locking mechanisms and multi-level holding structures designed for extreme load bearing.</p>
              </div>
            </div>

          </div>
        </div>
      </section >
      <div className="section-divider"></div>

      {/* 5. Innovation & Certifications Section */}
      < section className="section bg-dark-refined" >
        {/* Industrial Lab Background Overlay */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, backgroundImage: 'url("https://images.unsplash.com/photo-1581092335397-9583eb92d232?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")', backgroundSize: "cover", backgroundPosition: "center", opacity: 0.08, zIndex: 0, mixBlendMode: "luminosity" }}></div>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(90deg, var(--primary-color) 0%, transparent 100%)", zIndex: 1 }}></div>

        <div className="faint-bg-text" style={{ bottom: "5%", left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>TECHNOLOGY</div>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className="grid grid-2" style={{ alignItems: "center", gap: "4rem" }}>
            <div className="fade-up-section">
              <h2 className="section-title">Innovation & Certification</h2>
              <p className="section-subtitle" style={{ marginBottom: "2rem" }}>
                Pushing the boundaries of applied electromagnetics through rigorous R&D and strict compliance standards.
              </p>
              <ul className={styles.innovationList}>
                <li>
                  <div className={styles.innovationIcon}><Cpu size={24} className="text-accent" /></div>
                  <div>
                    <h4>Custom Electromagnetics</h4>
                    <p>Designed-to-spec coil winding, force profiling, and integration support for specialized applications.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.innovationIcon}><Settings2 size={24} className="text-accent" /></div>
                  <div>
                    <h4>Simulation-Based Design</h4>
                    <p>Advanced FEA simulations to virtually prototype and optimize magnetic flux before manufacturing.</p>
                  </div>
                </li>
                <li>
                  <div className={styles.innovationIcon}><Award size={24} className="text-accent" /></div>
                  <div>
                    <h4>Patented Technologies</h4>
                    <p>Proprietary structural innovations that radically reduce residual magnetism and improve holding forces.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className={`fade-up-section ${styles.certificationBox}`}>
              <h3>Global Compliance Standards</h3>
              <p>All parts undergo intensive cycle testing and environmental validation, ensuring absolute dependability across borders.</p>
              <div className={styles.certGrid}>
                <div className={styles.certBadge}>CE Marking</div>
                <div className={styles.certBadge}>RoHS Compliant</div>
                <div className={styles.certBadge}>ARAI Certified</div>
                <div className={styles.certBadge}>ISO 9001:2015</div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* 6. Leadership / Founders Section */}
      < section className="section bg-off-white" id="leadership" >
        <div className="container">
          <div className="fade-up-section text-center" style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
            <h2 className="section-title">Research-Backed Leadership</h2>
            <p className="section-subtitle center">
              Our engineering direction is guided by decades of hands-on R&D, patent development, and industrial manufacturing expertise.
            </p>
          </div>

          <div className={`grid grid-2 fade-up-section ${styles.foundersGrid}`}>
            {/* Founder 1 */}
            <div className={styles.founderCard}>
              <div className={styles.founderHeader}>
                <div className={styles.founderImagePlaceholder} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div>
                  <h3>Dr. Dhanashri Dhuri</h3>
                  <span className={styles.founderRole}>Chief Operating Officer (COO)</span>
                </div>
              </div>
              <ul className={styles.founderBullets}>
                <li><CheckCircle2 size={18} className="text-accent" /> 15+ years experience in process industries & materials research</li>
                <li><CheckCircle2 size={18} className="text-accent" /> Expertise in catalysis, nanomaterials, and electromagnetics</li>
                <li><CheckCircle2 size={18} className="text-accent" /> Authored 40+ journal publications and multiple patents</li>
              </ul>
            </div>

            {/* Founder 2 */}
            <div className={styles.founderCard}>
              <div className={styles.founderHeader}>
                <div className={styles.founderImagePlaceholder} style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80')" }}></div>
                <div>
                  <h3>Dr. Krishnarao Dhuri</h3>
                  <span className={styles.founderRole}>Chief Strategy & Marketing Officer</span>
                </div>
              </div>
              <ul className={styles.founderBullets}>
                <li><CheckCircle2 size={18} className="text-accent" /> 20+ years expertise in research & system-level engineering</li>
                <li><CheckCircle2 size={18} className="text-accent" /> Expert in system-level dynamics, optimization, and data science</li>
                <li><CheckCircle2 size={18} className="text-accent" /> Technology entrepreneur with multiple US patents</li>
              </ul>
            </div>
          </div>
        </div>
      </section >
      {/* 7. News / Updates Slider */}
      < section className="section bg-soft-grey" >
        <div className="container">
          <div className="fade-up-section text-center" style={{ maxWidth: "800px", margin: "0 auto 4rem auto" }}>
            <h2 className="section-title">Latest Updates</h2>
          </div>
          <div className={`${styles.newsSlider} fade-up-section`}>
            <div className={styles.newsCard}>
              <span className={styles.newsCategory}>Product Update</span>
              <h3>New Multi-Pole Holding Magnets</h3>
              <p>We've expanded our robust holding magnet line to include multi-pole configurations for complex robotic grippers.</p>
            </div>
            <div className={styles.newsCard}>
              <span className={styles.newsCategory}>Certification</span>
              <h3>ISO 9001:2015 Recertification</h3>
              <p>Magnastride has successfully completed our annual audit, proving our unyielding commitment to manufacturing excellence.</p>
            </div>
            <div className={styles.newsCard}>
              <span className={styles.newsCategory}>Industry News</span>
              <h3>Exhibiting at AutoExpo 2027</h3>
              <p>Join us this February to witness our latest generation of EV powertrain actuators live in action.</p>
            </div>
          </div>
        </div>
      </section >
      <div className="section-divider"></div>

      {/* Why Choose Us & Contact Section */}
      < section id="contact" className="section-alt" >
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

            <div className="fade-up-section" style={{ position: "sticky", top: "120px" }}>
              <div className={styles.ctaGrid}>
                <h2 className="section-title" style={{ marginBottom: "2rem", fontSize: "2rem" }}>Engage With Engineering</h2>
                <div className={styles.ctaCards}>
                  <Link href="/brochure" className={styles.actionCard}>
                    <Download size={24} className="text-accent" />
                    <h4>Download Brochure</h4>
                    <p>Get full company overview & capabilities.</p>
                  </Link>
                  <Link href="/datasheet" className={styles.actionCard}>
                    <BookOpen size={24} className="text-accent" />
                    <h4>Request Datasheet</h4>
                    <p>Detailed tech specs on specific product lines.</p>
                  </Link>
                  <Link href="/contact" className={styles.actionCard}>
                    <Phone size={24} className="text-accent" />
                    <h4>Speak to Engineering</h4>
                    <p>Direct technical consultation scheduling.</p>
                  </Link>
                  <Link href="/custom-solution" className={styles.actionCard}>
                    <Settings size={24} className="text-accent" />
                    <h4>Get Custom Solution</h4>
                    <p>Initiate prototyping or co-development.</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
