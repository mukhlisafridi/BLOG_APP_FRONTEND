import React from 'react';
import { blogData } from "../assets/assets";
import BlogCard from './BlogCard';

const LatestBlogs = () => {
  return (
    <div className="my-8 container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center sm:text-left mb-6">
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.slice(-6).reverse().map((blog, index) => (
          <BlogCard
            key={index}
            id={blog._id}
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
  );
};

export default LatestBlogs;
