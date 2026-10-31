import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="home-footer">
      <div className="home-footer-inner">
        <div><Link to="/" className="home-brand">Global Scholars<span>Consulting</span></Link><p>Personal guidance for your journey to studying in the USA, from application to arrival.</p></div>
        <div><h3>Explore</h3><a href="#about">About Us</a><a href="#services">Our Services</a><a href="#blog">News & Insights</a></div>
        <div><h3>Get Started</h3><Link to="/register">Make an Enquiry</Link><Link to="/book">Book a Session</Link><Link to="/login">Client Login</Link></div>
        <div><h3>Let’s Connect</h3><p>Have questions about studying in the USA? Start a conversation with our team.</p><Link to="/register" className="home-footer-contact">Contact our team →</Link></div>
      </div>
      <div className="home-copyright">© {new Date().getFullYear()} Global Scholars Consulting. All rights reserved.</div>
    </footer>
  );
}
