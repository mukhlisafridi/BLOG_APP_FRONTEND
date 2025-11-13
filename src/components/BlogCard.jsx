import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  return (
    <div className="group border border-gray-300 shadow-md rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
      
      <Link to={`/blog/${id}`} className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover cursor-pointer transform transition-transform duration-300 group-hover:scale-110"
        />
      </Link>

     
      <div className="p-4 flex flex-col flex-grow">
       
        <span className="inline-block text-xs sm:text-sm font-semibold text-[#4B6BFB] bg-blue-50 px-3 py-1 rounded-full w-fit mb-2">
          {category}
        </span>

        <Link to={`/blog/${id}`}>
          <h2 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-2 hover:text-[#4B6BFB] transition-colors cursor-pointer mb-3">
            {title}
          </h2>
        </Link>

        <div className="mt-auto pt-3 border-t border-gray-100">
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
            <img
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
              src={author_image}
              alt={author_name}
            />
            <p className="text-sm font-semibold text-gray-700">
              {author_name}
            </p>
            <span className="hidden sm:inline text-gray-400">•</span>
            <p className="text-xs sm:text-sm text-gray-500">
              {date}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;