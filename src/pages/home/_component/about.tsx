import IMAGES from "../../../assets/images/images";
import { Link } from "react-router";

export default function About() {
  return (
    <section id="about" className="home-split">
      <div className="home-collage">
        <img src={IMAGES.about1} alt="Graduates celebrating their achievements" loading="lazy" />
        <img src={IMAGES.about3} alt="Students sharing their university experience" loading="lazy" />
        <img src={IMAGES.about2} alt="Learning and connecting on campus" loading="lazy" />
        <div className="home-experience"><strong>8+</strong><span>Years of<br />Experience</span></div>
      </div>
      <div className="home-split-copy">
        <p className="home-eyebrow">ABOUT GLOBAL SCHOLARS CONSULTING</p>
        <h2>Driven by Passion.<br />Defined by Purpose.</h2>
        <p>We help international students take the next step toward studying in the United States, with personal guidance and practical resources throughout the journey.</p>
        <p>From choosing a university to preparing for life in a new country, our mission is to make the process clearer and more manageable.</p>
        <ul className="home-benefits"><li>University choices shaped around your goals</li><li>Practical application and visa preparation</li><li>Support for your transition to student life</li></ul>
        <Link to="/register" className="home-primary">Talk to Our Team →</Link>
      </div>
    </section>
  );
}
