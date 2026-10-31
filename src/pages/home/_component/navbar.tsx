import { useEffect, useState } from "react";
import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);
  return (
    <header className={`home-header ${isScrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="home-nav">
        <Link to="/" className="home-brand" onClick={() => setMenuOpen(false)} aria-label="Global Scholars Consulting home">Global Scholars<span>Consulting</span></Link>
        <nav id="home-navigation" aria-label="Main navigation" className={`home-navigation ${menuOpen ? "is-open" : ""}`}>
          {[["home", "Home"], ["about", "About Us"], ["services", "Services"], ["blog", "Blog"], ["contact", "Contact"]].map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <Link to="/register" className="home-primary home-nav-cta" onClick={() => setMenuOpen(false)}>Let’s Talk</Link>
        <button type="button" className="home-menu" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-controls="home-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <FiX /> : <FiMenu />}</button>
      </div>
    </header>
  );
}
