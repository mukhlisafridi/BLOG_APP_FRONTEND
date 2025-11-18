import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { PlusCircle, List, Trash2, ImageIcon } from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("list");
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    image: null,
  });

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData();
    data.append("title", formData.title);
    data.append("category", formData.category);
    data.append("description", formData.description);

    if (formData.image) {
      data.append("image", formData.image);
    }

    try {
      const res = await axios.post("http://localhost:3000/blog/create", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      toast.success(res.data.message);
      setBlogs([res.data.blog, ...blogs]);
      setFormData({ title: "", category: "", description: "", image: null });

     
      setActiveTab("list");
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const getUserBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog/user-blogs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setBlogs(res.data.blogs);
      } catch (error) {
        toast.error("Failed to fetch blogs");
      }
    };
    getUserBlogs();
  }, [token]);

  const removeBlog = async (blogId) => {
    try {
      const res = await axios.delete(
        `http://localhost:3000/blog/delete-blog/${blogId}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      toast.success(res.data.message);
      setBlogs(blogs.filter((b) => b._id !== blogId));
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete blog");
    }
  };

  const ImagePlaceholder = () => (
    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
      <ImageIcon className="text-white" size={24} />
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <button
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition 
            ${
              activeTab === "post"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-700 shadow-md hover:shadow-lg"
            }`}
            onClick={() => setActiveTab("post")}
          >
            <PlusCircle size={20} /> Post Blog
          </button>

          <button
            className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition 
            ${
              activeTab === "list"
                ? "bg-orange-600 text-white"
                : "bg-white text-gray-700 shadow-md hover:shadow-lg"
            }`}
            onClick={() => setActiveTab("list")}
          >
            <List size={20} /> My Blogs
          </button>
        </div>

        {activeTab === "post" ? (
          <div className="bg-white p-6 md:p-8 shadow-lg rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
              Post a New Blog
            </h2>

            <form
              onSubmit={submitHandler}
              className="grid grid-cols-1 gap-5 max-w-2xl"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Blog Title
                </label>
                <input
                  name="title"
                  value={formData.title}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="Enter blog title"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <input
                  name="category"
                  value={formData.category}
                  onChange={onChangeHandler}
                  type="text"
                  placeholder="e.g., Technology, Lifestyle"
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={onChangeHandler}
                  placeholder="Write your blog content..."
                  required
                  className="border border-gray-300 rounded-lg p-3 w-full h-40 resize-none focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Upload Image
                </label>
                <input
                  onChange={fileHandler}
                  type="file"
                  accept="image/*"
                  className="border border-gray-300 rounded-lg p-3 w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-50 file:text-orange-700 hover:file:bg-orange-100"
                />
                {formData.image && (
                  <p className="text-sm text-gray-600 mt-2">
                    {formData.image.name}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold transition disabled:bg-orange-400 disabled:cursor-not-allowed"
              >
                {loading ? "Posting..." : "Post Blog"}
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 md:p-8 shadow-lg rounded-xl">
            <h2 className="text-2xl md:text-3xl font-bold text-orange-600 mb-6">
              My Blogs ({blogs.length})
            </h2>

            {blogs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No blogs yet</p>
                <p className="text-gray-400 text-sm mt-2">
                  Create your first blog!
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto -mx-4 sm:mx-0">
                <div className="inline-block min-w-full align-middle">
                  <table className="min-w-full rounded-lg overflow-hidden">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm text-gray-600 font-semibold">
                          Image
                        </th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm text-gray-600 font-semibold">
                          Title
                        </th>
                        <th className="px-3 sm:px-4 py-3 text-left text-xs sm:text-sm text-gray-600 font-semibold">
                          Category
                        </th>
                        <th className="px-3 sm:px-4 py-3 text-center text-xs sm:text-sm text-gray-600 font-semibold">
                          Action
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {blogs.map((blog) => (
                        <tr key={blog._id} className="hover:bg-gray-50 transition">
                          <td className="px-3 sm:px-4 py-3">
                            {blog.image ? (
                              <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-12 h-12 sm:w-14 sm:h-14 object-cover rounded-lg border cursor-pointer hover:scale-105 transition-transform"
                                onError={(e) => {
                                  e.target.style.display = "none";
                                  e.target.nextSibling.style.display = "flex";
                                }}
                              />
                            ) : null}
                            <div
                              style={{ display: blog.image ? "none" : "flex" }}
                            >
                              <ImagePlaceholder />
                            </div>
                          </td>

                          <td className="px-3 sm:px-4 py-3 font-medium text-xs sm:text-sm text-gray-900 max-w-xs truncate">
                            {blog.title}
                          </td>

                          <td className="px-3 sm:px-4 py-3 text-xs sm:text-sm text-gray-600">
                            {blog.category}
                          </td>

                          <td className="px-3 sm:px-4 py-3 text-center">
                            <button
                              onClick={() => removeBlog(blog._id)}
                              className="text-red-600 hover:text-red-800 transition inline-flex items-center justify-center p-2 hover:bg-red-50 rounded-full cursor-pointer"
                              title="Delete Blog"
                            >
                              <Trash2 size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;