import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0  w-full   z-30 transition-all duration-300 ${
        isScrolled ? "bg-teal-600 shadow-lg text-white" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center md:mx-auto max-w-5xl w-full p-4 py-6 md:px-0">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <span className="text-white">STUDY-PATH</span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-medium">
          <li>
            <a href="#home" className="hover:text-green-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-green-400 transition">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-green-400 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#blog" className="hover:text-green-400 transition">
              Blog
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-green-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Let’s Talk Button */}
        <div>
          <Link
            to="/register"
            className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-md font-semibold shadow-md transition"
          >
            Let’s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
