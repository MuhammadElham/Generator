import React from "react";
import logo from "../assets/Logo/logo.webp";
import { Link, NavLink } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* 1 Col */}
        <div>
          <Link to="/">
            <img className="mb-5 w-32" src={logo} alt="" />
          </Link>
          <p className="w-full md:w-2/3 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam harum nostrum repellendus vitae neque quis necessitatibus animi autem voluptatibus sunt? Nisi minus, totam porro provident amet aliquam modi maxime fugiat?</p>
        </div>

        {/* 2 Col */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600 ">
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/about">
              <li>ABOUT</li>
            </Link>
            <Link to="/products">
              <li>PRODUCTS</li>
            </Link>
            <Link to="/industriesServed">
              <li>INDUSTRIES SERVED</li>
            </Link>
            <Link to="/contact">
              <li>CONTACT US</li>
            </Link>
          </ul>
        </div>

        {/* 3 Col */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>
              <a href="tel:+923333003310">Tel: (+92) 333-3003310</a>
            </li>
            <li>
              <a href="mailto:elhamwaheed777@gmail.com">elhamwaheed777@gmail.com</a>
            </li>
            <li className="flex items-center gap-3 sm:gap-5 mt-3 ">
              <a href="https://www.facebook.com/profile.php?id=100087979201448" target="_blank"><FaFacebookF className="w-10 h-10 cursor-pointer p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700" /></a>
              <a href="https://x.com/i/flow/login?lang=en"><FaTwitter className="w-10 h-10 cursor-pointer p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700" /></a>
              <a href="https://www.instagram.com/"><FaInstagram className="w-10 h-10 cursor-pointer p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700" /></a>
              <a href="https://www.linkedin.com/in/elham-waheed-572119253/"><FaLinkedinIn className="w-10 h-10 cursor-pointer p-3 rounded-full bg-gray-600 text-white hover:bg-gray-700" /></a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ gcnent.com - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
