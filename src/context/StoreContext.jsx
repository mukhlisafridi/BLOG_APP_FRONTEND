import { createContext, useEffect, useState } from "react";
import API from "../utils/axios.js";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const allBlogs = async () => {
      try {
        const res = await API.get("/blog/all-blogs");
        
        if (res.data.success) {
          setBlogData(res.data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };
    allBlogs();
  }, []);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const userData = JSON.parse(storedUser);
      setUser(userData);
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
    return true;
  };

  const contextValue = { blogData, loginUser, logoutUser, user };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;