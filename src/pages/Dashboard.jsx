import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { PlusCircle, List, Trash2 } from "lucide-react";

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

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const fileHandler = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

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
      toast.error(error.message);
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
        console.log(error);
      }
    }
    getUserBlogs();
  }, []);

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
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="flex flex-col md:flex-row gap-3 mb-6">
        <button
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition 
          ${
            activeTab === "post"
              ? "bg-orange-600 text-white"
              : "bg-white text-gray-700 shadow-md"
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
              : "bg-white text-gray-700 shadow-md"
          }`}
          onClick={() => setActiveTab("list")}
        >
          <List size={20} /> List Blogs
        </button>
      </div>

      {activeTab === "post" ? (
        <div>
          <h2 className="text-2xl font-bold text-orange-600">
            Post a New Blog
          </h2>

          <form
            onSubmit={submitHandler}
            className="mt-6 grid grid-cols-1 gap-4 max-w-xl bg-white p-6 shadow-md rounded-lg"
          >
            <input
              name="title"
              value={formData.title}
              onChange={onChangeHandler}
              type="text"
              placeholder="Blog Title"
              className="border border-gray-300 rounded-md p-3 w-full"
            />

            <input
              name="category"
              value={formData.category}
              onChange={onChangeHandler}
              type="text"
              placeholder="Category"
              className="border border-gray-300 rounded-md p-3 w-full"
            />

            <textarea
              name="description"
              value={formData.description}
              onChange={onChangeHandler}
              placeholder="Description"
              className="border border-gray-300 rounded-md p-3 w-full h-32"
            />

            <input
              onChange={fileHandler}
              type="file"
              accept="image/*"
              className="border border-gray-300 rounded-md p-3 w-full"
            />

            <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md font-semibold">
              Post Blog
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-orange-600 mb-4">
            List of Blogs
          </h2>

          <div className="overflow-x-auto shadow-md rounded-xl bg-white">
            <table className="min-w-full rounded-lg">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">
                    Image
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-gray-600 font-semibold">
                    Category
                  </th>
                  <th className="px-4 py-3 text-center text-gray-600 font-semibold">
                    Action
                  </th>
                </tr>
              </thead>

              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <img
                        src={`http://localhost:3000/images/${blog.image}`}
                        alt={blog.title}
                        className="w-12 h-12 object-cover rounded-md border"
                      />
                    </td>

                    <td className="px-4 py-3 font-medium">{blog.title}</td>
                    <td className="px-4 py-3">{blog.category}</td>

                    <td className="px-4 py-3 text-center">
                      <button
                        onClick={() => removeBlog(blog._id)}
                        className="text-red-600 hover:text-red-800 transition"
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
  );
};

export default Dashboard;
