import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import About from './pages/About'
import SingleBlog from './pages/SingleBlog'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import StoreContextProvider from './context/StoreContext'
import {Toaster} from "react-hot-toast"
import Dashboard from './pages/Dashboard'
const App = () => {
  return (
    <>
    <StoreContextProvider>
     <BrowserRouter>
     <Toaster/>
       <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blogs" element={<Blogs/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/blog/:id" element={<SingleBlog/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<SignUp/>} />
      <Route path="/dashoard" element={<Dashboard/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
     </StoreContextProvider>
    </>
  )
}

export default App
