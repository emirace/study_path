import React from "react";
import IMAGES from "../../../assets/images/images";
import { Link } from "react-router";

const About: React.FC = () => {
  return (
    <section className="flex items-center flex-col md:flex-row gap-8 md:gap-4 bg-white px-2 pt-20 md:py-0 md:px-20 lg:px-32">
      <div className="w-full md:w-1/2 flex flex-col md:items-center -mt-20 md:mt-0 justify-end h-[25rem] md:h-[32rem] flex-wrap md:px-6 gap-4">
        <img
          src={IMAGES.about1}
          alt="Professional 1"
          className="rounded-lg w-[calc(50%-1rem)] md:max-w-60"
        />
        <img
          src={IMAGES.about3}
          alt="Professional 2"
          className="rounded-lg w-[calc(50%-1rem)] md:max-w-60"
        />
        <img
          src={IMAGES.about2}
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
          About Study-Path
        </p>
        <div className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 leading-snug">
          Driven by Passion <br />
          Defined by Purpose
        </div>
        <p className="text-gray-600 mt-4">
          StudyPath USA is dedicated to helping international students achieve
          their dreams of studying in the United States. We offer expert
          guidance and practical resources for every step of the journey – from
          choosing the right college or university to securing your visa and
          preparing for life in a new country.
        </p>
        <p className="text-gray-600 mt-2">
          Our mission is to make the path to U.S. education accessible,
          informed, and stress-free, enabling students to thrive in their chosen
          fields and build a successful future.
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
  );
};

export default About;
