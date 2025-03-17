import React from "react";
import FormImage from "../assets/Contact-Page/Contact-img.png";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";

const ContactForm = () => {
  return (
    // main container
    <div className="w-full flex flex-col  lg:flex-row lg:items-start lg:justify-between py-6 lg:py-14">
      {/* part1 */}
      <div className="lg:w-1/2">
        <p className="font-semibold text-3xl text-[#BA68C8] mb-3">Get in touch</p>
        <p className="font-normal text-lg text-black">We are here for you! How can we help?</p>
        <form action="" className="mt-7 flex flex-col gap-3">
          <label className="text-base" htmlFor="name">
            Name
          </label>
          <input className="border border-[#DCB3E3] rounded-lg p-2 focus:outline-none focus:border-[#BA68C8] transition" id="name" type="text" />

          <label className="text-base" htmlFor="email">
            Email
          </label>
          <input className="border border-[#DCB3E3] rounded-lg p-2 focus:outline-none focus:border-[#BA68C8] transition" id="email" type="text" />

          <label className="text-base" htmlFor="message">
            Message
          </label>
          <textarea className="border border-[#DCB3E3] rounded-lg p-2 h-[150px] focus:outline-none focus:border-[#BA68C8] transition" id="message" placeholder="Write something..."></textarea>

          <input className="text-center py-2 lg:py-4 bg-[#BA68C8] text-white text-base lg:text-lg font-bold rounded-lg cursor-pointer hover:bg-[#9C4FAD] transition duration-300 mt-6 lg:mt-[94px]" type="submit" />
        </form>
      </div>

      {/* part2 */}
      <div className="lg:w-1/2 flex-col items-start mt-14 lg:mt-0">
        <img className="w-full h-96 lg:h-[530px]" src={FormImage} alt="" />
        <ul className="flex flex-col justify-center  gap-5 pl-0 lg:pl-16 mt-8 lg:mt-0">
          <li className="flex items-center gap-4">
            <IoLocationOutline className="w-6 h-6 text-[#BA68C8]" />
            <a href="" className="text-sm font-medium">
              545 Mavis Island, IL 99191
            </a>
          </li>
          <li className="flex items-center gap-4">
            <MdOutlinePhone className="w-6 h-6 text-[#BA68C8]" />
            <a href="tel:923333003310" className="text-sm font-medium">
              +2034 4040 3030
            </a>
          </li>
          <li className="flex items-center gap-4">
            <IoLocationOutline className="w-6 h-6 text-[#BA68C8] font-bold" />
            <a href="mailto:elhamwaheed777@gmail.com" className="text-sm font-medium">
              hello@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
