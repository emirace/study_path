import { Link } from "react-router";
import { FiArrowRight } from "react-icons/fi";
import IMAGES from "../../../assets/images/images";

export default function BookNow() {
  return (
    <section id="contact" className="home-contact" style={{ backgroundImage: `url(${IMAGES.background2})` }}>
      <div className="home-contact-inner">
        <div><p className="home-eyebrow">LET’S PLAN YOUR NEXT CHAPTER</p><h2>Ready to start your journey?</h2><p>Tell us your goals. We’ll help you find your next step.</p></div>
        <Link to="/register" className="home-primary">Let’s Talk <FiArrowRight /></Link>
      </div>
    </section>
  );
}
