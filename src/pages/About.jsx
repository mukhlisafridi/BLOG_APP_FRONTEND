import { assets } from "../assets/assets";
import React from "react";

const About = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-7xl mx-auto">
      <h1 className="text-center text-2xl sm:text-3xl lg:text-4xl uppercase font-bold my-6 sm:my-8 text-gray-800">
        About Us
      </h1>
      <div className="my-8 sm:my-12 px-4 sm:px-6 lg:px-0">
        <img 
          src={assets.about} 
          alt="About us" 
          className="w-full max-w-4xl mx-auto rounded-lg shadow-xl object-cover"
        />
      </div>
      <div className="max-w-4xl mx-auto space-y-8 px-4 sm:px-0">
        <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed text-center">
          Welcome to <span className="text-orange-600 font-semibold">Meta Blog</span>, 
          your go-to platform for insightful articles on technology, lifestyle, 
          and beyond. We're passionate about sharing knowledge and inspiring creativity 
          through engaging and well-researched content.
        </p>
        <div className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">
             Our Mission
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
            At MyBlog, we believe in the power of words to educate, inspire, and connect. 
            Our mission is to create a platform where ideas flourish and knowledge is shared 
            freely. We strive to deliver high-quality content that resonates with our readers 
            and makes a positive impact on their lives.
          </p>
        </div>
        <div className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold  text-orange-600 mb-4">
             What We Offer
          </h2>
          <ul className="space-y-3 text-gray-700 text-base sm:text-lg">
            <li className="flex items-start">
              <span className=" text-black mr-2 text-xl">•</span>
              <span><strong>Tech Insights:</strong> Stay updated with the latest trends in technology, AI, and innovation</span>
            </li>
            <li className="flex items-start">
              <span className=" text-black mr-2 text-xl">•</span>
              <span><strong>Lifestyle Tips:</strong> Discover ways to improve your daily life, health, and productivity</span>
            </li>
            <li className="flex items-start">
              <span className=" text-black mr-2 text-xl">•</span>
              <span><strong>Creative Writing:</strong> Explore thought-provoking stories and perspectives</span>
            </li>
            <li className="flex items-start">
              <span className="text-black mr-2 text-xl">•</span>
              <span><strong>Community:</strong> Connect with like-minded readers and writers</span>
            </li>
          </ul>
        </div>
        <div className="bg-blue-50 p-6 sm:p-8 rounded-lg shadow-md">
          <h2 className="text-xl sm:text-2xl font-bold text-orange-600 mb-4">
             Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
            <div className="flex items-start">
              <span className="text-2xl mr-3"></span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Quality</h3>
                <p className="text-sm sm:text-base">Well-researched and accurate content</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3"></span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Community</h3>
                <p className="text-sm sm:text-base">Building meaningful connections</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3"></span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Innovation</h3>
                <p className="text-sm sm:text-base">Fresh perspectives and ideas</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3"></span>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">Inspiration</h3>
                <p className="text-sm sm:text-base">Empowering our readers</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-blue-50 from-orange-100 to-orange-50 p-6 sm:p-8 rounded-lg shadow-md text-center">
          <h2 className="text-xl sm:text-2xl font-bold  text-orange-600 mb-4">
            Join Our Journey
          </h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
            Whether you're a tech enthusiast, a passionate writer, or someone looking 
            for inspiration, we've got something for you! Subscribe to our newsletter 
            and never miss an update.
          </p>
          <p className="text-gray-600 text-sm sm:text-base italic">
            "Knowledge shared is knowledge multiplied"
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;