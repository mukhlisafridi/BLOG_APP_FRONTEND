import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useParams, Link } from "react-router-dom";
import { ImageIcon, ArrowLeft, Calendar, User } from "lucide-react";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);
  const blog = blogData.find((b) => b._id === id);

  const ImagePlaceholder = ({ size = "hero" }) => (
    <div
      className={`${
        size === "hero" ? "w-full h-64 sm:h-80 lg:h-96" : "w-12 h-12"
      } bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center rounded-xl`}
    >
      <ImageIcon className="text-white" size={size === "hero" ? 64 : 24} />
    </div>
  );
  const AvatarPlaceholder = ({ size = "w-12 h-12" }) => (
    <div
      className={`${size} bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center`}
    >
      <User className="text-white" size={16} />
    </div>
  );
  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500 mx-auto mb-4"></div>
          <p className="text-xl text-gray-700">Loading article...</p>
        </div>
      </div>
    );
  }
 return (
    <div className="min-h-screen bg-white">
      <div className="my-6 flex justify-center items-center">
        <div className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[70%] h-64 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl">
          {blog.image ? (
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
          ) : null}
          <div style={{ display: blog.image ? "none" : "flex" }}>
            <ImagePlaceholder size="hero" />
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blogs"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors mb-6 text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back to all articles
        </Link>
    <article className="pb-12">
          <div className="mb-4">
            <span className="inline-block text-xs sm:text-sm font-semibold px-4 py-1.5 bg-orange-100 text-orange-700 rounded-full">
              {blog.category}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {blog.title}
          </h1>
          <div className="flex items-center gap-4 pb-6 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              {blog.author.image ? (
                <img
                  src={blog.author.image}
                  alt={blog.author.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-orange-500 ring-offset-2"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
              ) : null}
              <div style={{ display: blog.author.image ? "none" : "flex" }}>
                <AvatarPlaceholder size="w-12 h-12 sm:w-14 sm:h-14" />
              </div>
              <div>
                <p className="text-sm sm:text-base font-semibold text-gray-900 flex items-center gap-1.5">
                  <User size={14} className="text-gray-500" />
                  {blog.author.name}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1.5 mt-0.5">
                  <Calendar size={14} className="text-gray-500" />
                  {new Date(blog.createdAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="prose prose-base sm:prose-lg max-w-none">
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {blog.description}
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs sm:text-sm text-gray-500">
                  Written by
                </span>
                <div className="flex items-center gap-2">
                  {blog.author.image ? (
                    <img
                      src={blog.author.image}
                      alt={blog.author.name}
                      className="w-8 h-8 rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <div style={{ display: blog.author.image ? "none" : "flex" }}>
                    <AvatarPlaceholder size="w-8 h-8" />
                  </div>
                  <span className="text-sm font-semibold text-gray-900">
                    {blog.author.name}
                  </span>
                </div>
              </div>
              <Link
                to="/blogs"
                className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg bg-orange-600 text-white hover:bg-orange-700 transition-colors text-xs sm:text-sm font-semibold shadow-sm"
              >
                Read more articles
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
export default SingleBlog;
