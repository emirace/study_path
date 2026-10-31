import IMAGES from "../../../assets/images/images";
import { Link } from "react-router";

export default function WhyUs() {
  return (
    <section className="home-why">
      <div className="home-split">
        <div className="home-collage">
          <img src={IMAGES.whyus3} alt="International education and new opportunities" loading="lazy" />
          <img src={IMAGES.whyus2} alt="Preparing for university life" loading="lazy" />
          <img src={IMAGES.whyus1} alt="Students pursuing their academic goals" loading="lazy" />
          <div className="home-experience"><strong>✦</strong><span>Your Goals.<br />Our Guidance.</span></div>
        </div>
        <div className="home-split-copy">
          <p className="home-eyebrow">WHY GLOBAL SCHOLARS CONSULTING</p>
          <h2>Personal Guidance.<br />Global Possibilities.</h2>
          <p>Your study journey is unique. Our approach combines an understanding of international student life with support that fits your ambitions.</p>
          <ul className="home-benefits"><li><strong>A personal approach</strong><span>Guidance aligned with your background, interests, and goals.</span></li><li><strong>Support at every stage</strong><span>From exploring programs to preparing for arrival.</span></li><li><strong>Confidence in your next step</strong><span>Practical resources to help you plan and move forward.</span></li></ul>
          <Link to="/register" className="home-primary">Let’s Plan Your Journey →</Link>
        </div>
      </div>
      <div className="home-audience"><div><p className="home-eyebrow">WHO WE HELP</p><h3>Wherever you are, start here.</h3></div><div className="home-audience-tags"><span>Undergraduate Students</span><span>Master’s Students</span><span>Doctoral Candidates</span></div></div>
    </section>
  );
}
