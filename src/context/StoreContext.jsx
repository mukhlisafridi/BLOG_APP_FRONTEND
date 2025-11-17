import { createContext, useEffect, useState } from "react";
import React from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await axios.get("http://localhost:3000/blog/all-blogs");
        if (res.data.success) {
          setBlogData(res.data.blogs);
        }
      } catch (error) {
        console.log(`error in fetching blogs ${error}`);
      }
    };
    allBlogs();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);
  const loginUser = (user, token) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };
  const logoutUser = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  const contextValue = { blogData, loginUser, logoutUser, user };
  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};
export default StoreContextProvider;
