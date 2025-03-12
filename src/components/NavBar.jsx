import React, { useState } from "react";
import logo from "../assets/Logo/logo.webp";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex items-center justify-between py-5 font-medium sticky bg-white
      w-full top-0 left-0 z-[1000] px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      
      {/* Logo */}
      <Link to="/">
        <img src={logo} className="w-20 sm:w-24 md:w-28 lg:w-32" alt="" />
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className="flex flex-col items-center gap-1">HOME</NavLink>
        <NavLink to="/about" className="flex flex-col items-center gap-1">ABOUT</NavLink>
        <NavLink to="/products" className="flex flex-col items-center gap-1">PRODUCTS</NavLink>
        <NavLink to="/industriesServed" className="flex flex-col items-center gap-1">INDUSTRIES SERVED</NavLink>
        <NavLink to="/contact" className="flex flex-col items-center gap-1">CONTACT US</NavLink>
      </ul>

      {/* Menu Button for Mobile */}
      <button onClick={() => setVisible(true)} className="w-6 sm:hidden">
        <img className="h-6" src="https://res.cloudinary.com/dmmz8ldz9/image/upload/v1741605638/ecommerce-assets/umlcjjuijwafcwlq1r02.png" alt="Menu" />
      </button>

      {/* Sidebar Menu */}
      <div className={`fixed top-0 right-0 bottom-0 bg-white transition-all duration-300 ease-in-out 
        z-[100] ${visible ? "w-64 p-5" : "w-0 overflow-hidden"}`}>
        
        {/* Close Button */}
        <div onClick={() => setVisible(false)} className="flex items-center gap-4 cursor-pointer">
          <img className="h-4 rotate-180" src="https://res.cloudinary.com/dmmz8ldz9/image/upload/v1741605634/ecommerce-assets/ilzzwtttfp9q4fp6kib1.png" alt="Close" />
          <p>Back</p>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col mt-4 text-gray-600">
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">HOME</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">ABOUT</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/products">PRODUCTS</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/industriesServed">INDUSTRIES SERVED</NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">CONTACT US</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
