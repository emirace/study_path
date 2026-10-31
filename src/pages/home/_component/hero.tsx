import IMAGES from "../../../assets/images/images";
import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import { TfiMouse } from "react-icons/tfi";

export default function Hero() {
  return (
    <section id="home" className="home-hero">
      <img className="home-hero-background" src={IMAGES.hero} alt="" />
      <div className="home-hero-inner">
        <div className="home-hero-copy">
          <p className="home-eyebrow">YOUR AMBITION. OUR GUIDANCE.</p>
          <h1>Your Guide to<br />Studying in the USA</h1>
          <p className="home-hero-subtitle">From Application to <span>Arrival.</span></p>
          <p className="home-hero-description">Take your next step with confidence. Get personal guidance on university applications, visa preparation, and settling into student life in the United States.</p>
          <Link to="/register" className="home-primary">Start Your Journey <FiArrowRight /></Link>
          <a href="#services" className="home-hero-secondary">Explore our services</a>
        </div>
        <img className="home-hero-person" src={IMAGES.hero3} alt="Student preparing for a journey to study abroad" fetchPriority="high" />
      </div>
      <span className="home-hero-decoration" aria-hidden="true">Global Scholars</span>
      <a href="#about" className="home-scroll"><TfiMouse /> Discover what’s possible</a>
    </section>
  );
}
