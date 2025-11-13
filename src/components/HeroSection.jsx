import { assets } from "../assets/assets";
import React from "react";

const HeroSection = () => {
  return (
    <div className="my-6 flex justify-center items-center">
      <img
        src={assets.hero}
        alt="Hero"
        className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%]"
      />
    </div>
  );
};

export default HeroSection;
