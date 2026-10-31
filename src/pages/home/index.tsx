import { Outlet } from "react-router";
import About from "./_component/about";
import BookNow from "./_component/bookNow";
import Footer from "./_component/footer";
import Hero from "./_component/hero";
import Navbar from "./_component/navbar";
import NewsSection from "./_component/news";
import "./home-polish.css";
import Services from "./_component/services";
import WhyUs from "./_component/whyUs";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />

      <NewsSection />
      <BookNow />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Home;
