import { Outlet } from "react-router";
import About from "./_component/about";
import BookNow from "./_component/bookNow";
import Footer from "./_component/footer";
import Hero from "./_component/hero";
import Navbar from "./_component/navbar";
import NewsSection from "./_component/news";
import OurClient from "./_component/ourClient";
import Services from "./_component/services";
import WhyUs from "./_component/whyUs";

function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <OurClient />
      <NewsSection />
      <BookNow />
      <Footer />
      <Outlet />
    </div>
  );
}

export default Home;
