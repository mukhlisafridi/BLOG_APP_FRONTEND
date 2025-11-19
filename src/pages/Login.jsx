import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { StoreContext } from "../context/StoreContext";
import API from "../utils/axios.js"
const Login = () => {
  const { loginUser } = useContext(StoreContext);
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await API.post(
        "/user/login",
        formData
      );
      if (res.data.success) {
        const { user, token } = res.data;
        loginUser(user, token);
        toast.success(res.data.message);
      }
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10">
      <form
        onSubmit={onSubmitHandler}
        className="w-full max-w-sm sm:max-w-md md:max-w-lg p-6 sm:p-8 rounded-2xl shadow-lg bg-white"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-orange-600 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
            Email
          </label>
          <input
            name="email"
            value={formData.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
            Password
          </label>
          <input
            name="password"
            value={formData.password}
            onChange={onChangeHandler}
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-orange-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 text-white font-semibold py-2 sm:py-3 rounded-lg hover:bg-orange-600 transition duration-300 text-sm sm:text-base"
        >
          {isLoading ? "Logging...!" : "Login"}
        </button>

        <p className="text-center text-gray-600 text-xs sm:text-sm mt-4">
          Don’t have an account?{" "}
          <a href="/register" className="text-orange-500 font-semibold">
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
