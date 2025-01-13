import React from "react";
import IMAGES from "../../../assets/images/images";
import { Link } from "react-router";

const WhyUs: React.FC = () => {
  return (
    <div>
      <section className="flex items-center flex-col md:flex-row gap-8 md:gap-4 bg-white px-2 pt-20 md:py-0 md:px-20 lg:px-32">
        <div className="w-full md:w-1/2 flex flex-col md:items-center -mt-20 md:mt-0 justify-end h-[25rem] md:h-[30rem] flex-wrap md:px-6 gap-4">
          <img
            src={IMAGES.whyus3}
            alt="Professional 1"
            className="rounded-lg w-[calc(50%-1rem)] md:max-w-60"
          />
          <img
            src={IMAGES.whyus2}
            alt="Professional 2"
            className="rounded-lg w-[calc(50%-1rem)] md:max-w-60"
          />
          <img
            src={IMAGES.whyus1}
            alt="Professional 2"
            className="rounded-lg w-[calc(50%-1rem)] md:max-w-60"
          />

          <div className="flex md:items-center flex-col md:flex-row gap-4 text-center font-bold">
            <p className="bg-teal-100 text-teal-500 rounded-full p-3 md:p-6 text-3xl md:text-5xl">
              8+
            </p>
            <div className=" flex md:block gap-2 text-xl font-medium text-left">
              <p>Years</p> <p>Experience</p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 md:mt-0">
          <p className="text-teal-500 uppercase font-semibold tracking-wide text-sm">
            Why Study-Path
          </p>
          <div className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-snug">
            Why Choose
            <br />
            StudyPath USA?
          </div>
          <p className="text-gray-600 mt-4">
            StudyPath USA offers expert advisors who understand the unique needs
            of international students, having been through the process
            themselves. Our comprehensive resources cover every step of the
            journey, from applications to career planning. We emphasize cultural
            understanding, providing tailored support to help students
            transition smoothly and build a sense of community. Plus, our
            personalized approach ensures guidance that aligns with each
            student's unique goals.
          </p>
          <div className="flex items-center mt-6">
            <Link
              to="#"
              className="ml-6 bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg text-sm font-semibold shadow-md transition-all"
            >
              Read More
            </Link>
          </div>
        </div>
      </section>
      <div className="max-w-5xl w-full mx-auto mt-10">
        <div className="text-xl lg:text-2xl font-bold text-gray-900 mt-2 leading-snug">
          Who We Help
        </div>
        <p>
          Our resources are designed to support international students at all
          academic levels, including:
        </p>
        <ul className="list-disc pl-4">
          <li>Undergraduate Students seeking a bachelor’s degree.</li>
          <li>
            Graduate Students aiming for a master’s or professional degree.
          </li>
          <li>
            Doctoral Candidates (Ph.D.) pursuing advanced research and academia.
          </li>
        </ul>
        <p>
          Whether you’re just starting to consider your options or actively
          preparing for a move to the U.S., we’re here to assist every step of
          the way.
        </p>
      </div>
    </div>
  );
};

export default WhyUs;
