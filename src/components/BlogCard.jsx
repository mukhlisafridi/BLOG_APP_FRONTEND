
import React from "react";
import { Link } from "react-router-dom";
import { ImageIcon, Calendar, User } from "lucide-react";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  const ImagePlaceholder = ({ size = "large" }) => (
    <div
      className={`${
        size === "large" ? "w-full h-48" : "w-8 h-8"
      } bg-gradient-to-br from-orange-400 to-orange-600 rounded-t-lg flex items-center justify-center`}
    >
      <ImageIcon
        className="text-white"
        size={size === "large" ? 48 : 16}
      />
    </div>
  );

  return (
    <article className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <Link to={`/blog/${id}`} className="overflow-hidden relative block">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover cursor-pointer transform transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div style={{ display: image ? "none" : "flex" }}>
          <ImagePlaceholder size="large" />
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        
        <span className="inline-block text-xs font-semibold text-orange-700 bg-orange-100 px-3 py-1 rounded-full w-fit mb-3">
          {category}
        </span>
        <Link to={`/blog/${id}`}>
          <h2 className="text-lg font-bold text-gray-900 line-clamp-2 hover:text-orange-600 transition-colors cursor-pointer mb-4 leading-snug">
            {title}
          </h2>
        </Link>
        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between gap-3 flex-wrap">
           
            <div className="flex items-center gap-2">
              {author_image ? (
                <img
                  className="w-8 h-8 rounded-full object-cover flex-shrink-0 ring-2 ring-gray-200"
                  src={author_image}
                  alt={author_name}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div
                style={{
                  display: author_image ? "none" : "flex",
                }}
              >
                <ImagePlaceholder size="small" />
              </div>
<div className="flex flex-col">
                <p className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                  <User size={12} className="text-gray-500" />
                  {author_name}
                </p>
              </div>
            </div>
            <p className="text-xs text-gray-600 flex items-center gap-1">
              <Calendar size={12} className="text-gray-500" />
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;