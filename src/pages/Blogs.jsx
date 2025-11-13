import React, { useContext } from "react";
import HeroSection from "../components/HeroSection";
import BlogCard from "../components/BlogCard";
import { StoreContext } from "../context/StoreContext";

const Blogs = () => {
  const{blogData} = useContext(StoreContext)
  return (
    <>
      <div className="w-full">
        <HeroSection />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
          <h1 className="text-3xl sm:text-4xl text-center font-bold text-gray-800 mb-6">
            All Blogs
          </h1>
          <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 text-gray-600 max-w-3xl mx-auto text-center mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem nisi nam distinctio ab laborum, esse obcaecati
            sapiente dolor inventore quidem laboriosam! Beatae accusantium autem.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogData.map((blog, index) => (
              <BlogCard
                key={index}
                id={blog.id}
                title={blog.title}
                image={blog.image}
                category={blog.category}
                author_name={blog.author.name}
                author_image={blog.author.image}
                date={blog.date}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
