import React from "react";

const Contact = () => {
  return (
    <div className="px-4 sm:px-10 md:px-20 pb-20 pt-20">
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10">
        {/* Left Side - Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl uppercase font-bold my-4 text-orange-600">
            Contact
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to{" "}
            <span className="text-orange-600 font-semibold">Meta Blog</span>, 
            your go-to platform for insightful articles on technology, lifestyle, 
            and beyond. Our mission is to share knowledge and inspiration through 
            engaging, creative, and meaningful content!
          </p>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <form className="w-full max-w-md p-6 rounded-2xl shadow-lg">
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
