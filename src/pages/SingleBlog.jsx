import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useParams, Link } from "react-router-dom";

const SingleBlog = () => {
  const { id } = useParams();
  const { blogData } = useContext(StoreContext);
  const blog = blogData.find((b) => b._id === id);

  if (!blog) {
    return <p className="text-center text-xl py-10">Loading...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-16 px-4 sm:px-6 flex flex-col gap-6 bg-white rounded-xl shadow-lg">
      <div className="w-full h-72 sm:h-96 overflow-hidden rounded-lg shadow-md">
        <img
          src={`http://localhost:3000/images/${blog.image}`}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-sm sm:text-base font-semibold px-3 py-1 bg-orange-100 text-orange-700 rounded-full w-fit">
          {blog.category}
        </span>

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          {blog.title}
        </h1>

        <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
          {blog.description}
        </p>

        {/* Author / Date */}
        <div className="flex items-center justify-between flex-wrap gap-4 mt-4 border-t pt-4">
          <div className="flex items-center gap-3">
            <img
              src={`http://localhost:3000/images/${blog.author.image}`}
              alt={blog.author.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-orange-500"
            />
            <p className="text-gray-900 font-semibold">
              {blog.author.name}
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            {new Date(blog.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "2-digit",
              year: "numeric",
            })}
          </p>
        </div>
        <Link
          to="/blogs"
          className="mt-6 px-4 py-2 rounded-full bg-black text-white hover:bg-orange-600 transition-colors duration-300 w-fit text-sm sm:text-base"
        >
          Back to Blogs
        </Link>
      </div>
    </div>
  );
};

export default SingleBlog;
