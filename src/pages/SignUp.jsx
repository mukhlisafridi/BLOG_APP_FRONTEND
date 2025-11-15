import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: null,
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
       setLoading(true);
    try {
      const data = new FormData();
      data.append("name", formData.name);
      data.append("email", formData.email);
      data.append("password", formData.password);
      if (formData.image) {
      data.append("image", formData.image)};
   
      const res = await axios.post("http://localhost:3000/user/register", data);
      if (res.data.success) {
        toast.success(res.data.message);
      }
      navigate("/login");
    } catch (error) {
      console.log("Error:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-12 min-h-screen flex items-center justify-center  px-4 sm:px-6">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-md sm:max-w-lg md:max-w-md p-6 sm:p-8 rounded-2xl shadow-lg bg-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-6">
          Register
        </h2>

        <div className="flex justify-center mb-6">
          <label
            htmlFor="profileImage"
            className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full border-4 border-orange-500 flex items-center justify-center cursor-pointer overflow-hidden hover:opacity-80 transition"
          >
            {formData.image ? (
              <img
                src={URL.createObjectURL(formData.image)}
                alt="Profile Preview"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <span className="text-gray-400 text-xs sm:text-sm">Upload</span>
            )}
            <input
              id="profileImage"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onChangeHandler}
            placeholder="Enter your full name"
            className="w-full px-3 sm:px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            placeholder="Enter your email"
            className="w-full px-3 sm:px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            placeholder="Enter your password"
            className="w-full px-3 sm:px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-lg hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
        >
          {isLoading ? "Registering...!" : "Register"}
        </button>

        <p className="text-center text-gray-600 text-sm sm:text-base mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-orange-500 font-semibold">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};
export default Register;
