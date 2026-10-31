import {
  FiTrendingUp,
  FiPieChart,
  FiShield,
  FiLayers,
  FiSearch,
} from "react-icons/fi";
import IMAGES from "../../../../assets/images/images";
import ReadMore from "./_component/readMore";

const services = [
  {
    title: "University and Program Guidance",
    description:
      "Get personalized advice on selecting U.S. colleges and universities based on your academic goals, field of study, and budget. Our resources cover everything from understanding different degree programs to exploring top-ranked institutions and unique opportunities in various regions of the United States.",
    icon: <FiTrendingUp />,
  },
  {
    title: "Application Support",
    description:
      "Navigating the application process can be challenging, especially with diverse requirements across institutions. We simplify it by offering checklists, essay-writing tips, test preparation resources (SAT, GRE, TOEFL), and application timelines. With our help, you’ll know exactly what steps to take for a successful application.",
    icon: <FiPieChart />,
  },
  {
    title: "Visa Preparation and Assistance",
    description:
      "Obtaining a student visa is a critical step, and we’re here to guide you through the complexities. Learn about the F-1, J-1, and M-1 visa types, application procedures, interview preparation tips, and important deadlines. Our experts provide clear and up-to-date information to help you avoid common pitfalls and successfully secure your visa.",
    icon: <FiShield />,
  },
  {
    title: "Pre-Departure Orientation ",
    description:
      "Moving to a new country involves more than just academics. We help you prepare for life in the U.S. by covering topics like healthcare, housing, finances, culture, and campus life. Our pre-departure resources and webinars ensure you feel confident and ready to start this exciting journey.",
    icon: <FiLayers />,
  },
  {
    title: "On-Arrival and Transition Support",
    description:
      "Arriving in the U.S. is just the beginning. Global Scholars Consulting offers practical advice on adjusting to American life, from finding on-campus resources and connecting with student communities to setting up essential services like bank accounts and mobile plans. We aim to make your transition smooth so you can focus on excelling in your studies.",
    icon: <FiSearch />,
  },
];

function Services() {
  return (
    <section id="services" className="home-services" style={{ backgroundImage: `url(${IMAGES.services})` }}>
      <div className="home-services-inner">
        <div className="home-services-heading"><div><p className="home-eyebrow">OUR SERVICES</p><h2>Everything you need for a successful journey.</h2></div><p>From application support to visa guidance and pre-departure preparation, find practical help for every stage of studying abroad.</p></div>
        <div className="home-services-grid">{services.map(service => <article key={service.title} className="home-service"><span className="home-service-icon">{service.icon}</span><div><h3>{service.title}</h3><ReadMore text={service.description} /></div></article>)}</div>
      </div>
    </section>
  );
}
export default Services;