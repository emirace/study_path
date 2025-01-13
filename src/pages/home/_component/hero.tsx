import React from "react";
import IMAGES from "../../../assets/images/images";
import { TfiMouse } from "react-icons/tfi";

const Hero: React.FC = () => {
  return (
    <section className="text-white bg-teal-600 pt-24 px-4 md:pt-0 md:px-0 m-2 md:m-0 rounded-lg md:bg-white flex flex-col md:flex-row items-center justify-between relative">
      {/* Left Side Content */}
      <div className="hidden md:block p-2">
        <img src={IMAGES.hero} className="h-auto w-full" />
      </div>
      <div className="md:absolute left-0 w-full">
        <div className="max-w-5xl w-full mx-auto ">
          <div className="max-w-lg text-left space-y-6">
            <h1 className=" text-3xl md:text-5xl font-bold tracking-wide">
              Your Guide to Studying in the USA
              <br />
              <span className="text-2xl">– from Application to</span>{" "}
              <span className="text-orange-500 text-2xl">Arrival</span>
            </h1>
            <p className="">
              Discover everything you need to know about studying in the United
              States. From navigating the application process and securing your
              visa to settling into campus life, we provide the tools, tips, and
              resources to help you succeed every step of the way.{" "}
            </p>
            <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-md font-semibold">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
      <div className="md:absolute bottom-[13%] left-0 w-full mt-4 md:mt-0">
        <div className="max-w-5xl w-full mx-auto flex justify-center md:justify-end ">
          <img
            src={IMAGES.hero3}
            alt="Professional Woman"
            className="w-72 md:w-1/2"
          />
        </div>
      </div>
      <div className="absolute -right-0 translate-x-[40%] top-[80%] text-teal-500 text-9xl font-bold opacity-20 transform rotate-90 uppercase ">
        Study-path
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-2 md:bottom-8 left-4 md:left-8 z-10 flex items-center  gap-4">
        <TfiMouse />
        <span className=" text-sm">Scroll down to know more</span>
      </div>
    </section>
  );
};

export default Hero;
