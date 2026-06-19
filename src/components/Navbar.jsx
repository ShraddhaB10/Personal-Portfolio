import { useState, useEffect } from "react";
import { useScrollSpy } from "../hooks";
import styles from "./Navbar.module.css";

const NAV_LINKS = [
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects",   label: "Projects" },
  { id: "contact",    label: "Contact" },
];

export default function Navbar({ name }) {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [first, ...rest] = name.split(" ");

  return (
    <header className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`} role="banner">
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#hero" className={styles.logo} aria-label="Back to top">
          {first} <span>{rest.join(" ")}</span>
        </a>

        {/* Desktop links */}
        <nav className={styles.links} aria-label="Main navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.link} ${activeId === id ? styles.active : ""}`}
              onClick={() => handleNavClick(id)}
              aria-current={activeId === id ? "true" : undefined}
            >
              {label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.open : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className={styles.mobileMenu} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ id, label }) => (
            <button
              key={id}
              className={`${styles.mobileLink} ${activeId === id ? styles.active : ""}`}
              onClick={() => handleNavClick(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
