import React from "react";
import { Link } from "react-router-dom";
import { ImageIcon } from "lucide-react";

const BlogCard = ({
  id,
  title,
  category,
  image,
  author_name,
  author_image,
  date,
}) => {
  const ImagePlaceholder = () => (
    <div className="w-full h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
      <ImageIcon className="text-white" size={64} />
    </div>
  );

  const AvatarPlaceholder = () => (
    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
      <span className="text-white text-xs font-bold">
        {author_name?.charAt(0)?.toUpperCase() || "U"}
      </span>
    </div>
  );

  return (
    <div className="group border border-gray-300 shadow-md rounded-lg overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <Link to={`/blog/${id}`} className="overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover cursor-pointer transform transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}
        <div style={{ display: image ? "none" : "flex" }}>
          <ImagePlaceholder />
        </div>
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
            {author_image ? (
              <img
                className="w-8 h-8 rounded-full object-cover flex-shrink-0"
                src={author_image}
                alt={author_name}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
            ) : null}
            <div style={{ display: author_image ? "none" : "flex" }}>
              <AvatarPlaceholder />
            </div>

            <p className="text-sm font-semibold text-gray-700">{author_name}</p>
            <span className="hidden sm:inline text-gray-400">•</span>
            <p className="text-xs sm:text-sm text-gray-500">
              {new Date(date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;