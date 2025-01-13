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
      "Get personalized advice on selecting U.S. colleges and universities based on your academic goals, field ofstudy, and budget. Our resources cover everything from understanding different degree programs to exploring top-ranked institutions and unique opportunities in various regions of the United States.",
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
      "Arriving in the U.S. is just the beginning. StudyPath USA offers practical advice on adjusting to American life, from finding on-campus resources and connecting with student communities to setting up essential services like bank accounts and mobile plans. We aim to make your transition smooth so you can focus on excelling in your studies.",
    icon: <FiSearch />,
  },
];

function Services() {
  return (
    <section id="services" className="relative w-full p-2 pt-20 md:p-0 md:pt-0">
      <div className="hidden md:block p-2 ">
        <img src={IMAGES.services} className="h-auto w-full" />
      </div>
      <div className="md:absolute flex items-center justify-center left-0 top-0 w-full h-full bg-teal-600 md:bg-transparent rounded-md p-2 md:p-0 py-4 md:py-0 text-white">
        <div className=" w-full max-w-5xl mx-auto ">
          <div className="flex flex-col md:flex-row items-center mb-10 z-10">
            <h2 className="text-3xl lg:text-4xl font-bold capitalize">
              Everything you need for a Successful Journey
            </h2>
            <p className="mt-4 md:w-1/2 text-gray-200 border-l-2 pl-4 border-white">
              Explore our range of expert services design to make your study
              abroad journey seamless. From personalized application support to
              visa guardance and pre-departure preparation, we're here to ensure
              your success every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
            {services.map((service, index) => (
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-4">{service.icon}</div>
                <div
                  key={index}
                  className="  flex flex-col items-start text-left "
                >
                  <h3 className="text-xl font-semibold mb-2">
                    {service.title}
                  </h3>
                  <ReadMore text={service.description} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
