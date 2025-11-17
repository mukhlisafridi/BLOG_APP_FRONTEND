import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import React from "react";
const Footer = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap py-12 px-4 md:px-8 lg:px-16 justify-between gap-8 bg-gray-50 text-gray-700">
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start gap-3 text-center md:text-left">
          <h1 className="text-2xl font-bold cursor-pointer hover:text-orange-600 ">Meta Blog</h1>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum enim
            mollitia voluptates natus vitae, dignissimos saepe sequi voluptatum.
            Suscipit totam hic magni atque, corporis tempore?
          </p>
          <h4 className="text-sm sm:text-base font-normal">
            Email: <span className="font-medium">mukhlis@example.com</span>
          </h4>
          <h4 className="text-sm sm:text-base font-normal">
            Phone: <span className="font-medium">1234567890</span>
          </h4>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-4  cursor-pointer hover:text-orange-600">Quick Links</h1>
          <ul className="flex flex-col gap-2 text-sm sm:text-base">
            <Link
              className="hover:text-orange-600 text-black transition-all duration-200"
              to="/"
            >
              Home
            </Link>
            <Link
              className="hover:text-orange-600 text-black transition-all duration-200"
              to="/blogs"
            >
              Blogs
            </Link>
            <Link
              className="hover:text-orange-600 text-black transition-all duration-200"
              to="/about"
            >
              About
            </Link>
            <Link
              className="hover:text-orange-600 text-black transition-all duration-200"
              to="/contact"
            >
              Contact
            </Link>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/4 flex flex-col items-center md:items-start">
          <h1 className="text-2xl font-bold mb-4  cursor-pointer hover:text-orange-600">Categories</h1>
          <ul className="flex flex-col gap-2 text-sm sm:text-base">
            <Link className="hover:text-orange-600 transition-all duration-200">
              Weather
            </Link>
            <Link className="hover:text-orange-600 transition-all duration-200">
              Lifestyle
            </Link>
            <Link className="hover:text-orange-600 transition-all duration-200">
              Technology
            </Link>
            <Link className="hover:text-orange-600 transition-all duration-200">
              News
            </Link>
          </ul>
        </div>
      </div>

      <hr className="h-px bg-gray-300 border-0" />

      <div className="flex flex-col sm:flex-row justify-between cursor-pointer items-center gap-4 py-6 px-4 md:px-8 lg:px-16 text-gray-700 text-sm">
        <div className="flex items-center gap-2">
          <img src={assets.logo} alt="Logo" className="w-8 h-8" />
          <p className="text-base font-medium">
            Meta <span className="font-bold cursor-pointer text-orange-600 ">Blog</span>
          </p>
        </div>
        <ul className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-center">
          <li className="hover:text-orange-600  transition-all duration-200 cursor-pointer">
            Privacy Policy
          </li>
          <li className="hover:text-orange-600 transition-all duration-200 cursor-pointer">
            Terms & Conditions
          </li>
          <li className="text-gray-500 text-xs sm:text-sm">
            © {new Date().getFullYear()} mukhlis afridi
          </li>
        </ul>
      </div>
    </>
  );
};

export default Footer;
