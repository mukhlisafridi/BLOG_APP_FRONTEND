import React, { useState } from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [user, setUser] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Link to="/">
            <img src={assets.logo} alt="logo" className="h-10 w-auto" />
          </Link>
          <p className="hidden sm:block text-2xl">
            Meta <span className="font-bold text-2xl">Blog</span>
          </p>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 text-lg font-medium text-gray-700">
          <Link to="/" className="hover:text-orange-500 duration-300">
            Home
          </Link>
          <Link to="/blogs" className="hover:text-orange-500 duration-300">
            Blogs
          </Link>
          <Link to="/about" className="hover:text-orange-500 duration-300">
            About
          </Link>
          <Link to="/contact" className="hover:text-orange-500 duration-300">
            Contact
          </Link>
        </ul>

        {/* User Buttons (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="bg-black px-5 py-2 rounded-full text-white hover:bg-gray-800 duration-300"
              >
                Dashboard
              </Link>
              <button className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 duration-300">
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 duration-300"
            >
              Signin
            </Link>
          )}
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden text-gray-800"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ✅ Right-Side Slide-in Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Background Overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 flex flex-col gap-6 p-6"
            >
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800"
                >
                  <X size={26} />
                </button>
              </div>

              {/* Menu Links */}
              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 text-lg"
              >
                Home
              </Link>
              <Link
                to="/blogs"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 text-lg"
              >
                Blogs
              </Link>
              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 text-lg"
              >
                About
              </Link>
              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 hover:text-orange-500 text-lg"
              >
                Contact
              </Link>

              {/* User Buttons (Mobile) */}
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="bg-black text-white px-5 py-2 rounded-full hover:bg-gray-800 duration-300"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => setMenuOpen(false)}
                    className="bg-orange-500 text-white px-5 py-2 rounded-full hover:bg-orange-600 duration-300"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 duration-300"
                >
                  Signin
                </Link>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
