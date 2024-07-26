import Image from "next/image";
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsForm = () => {
  return (
    <div className="py-2 mx-auto mt-8 px-6 bg-white rounded-lg shadow-lg text-gray-800 max-w-[400px]">
      <div className="">
        <Image
        src="/main-logo.png"
        width={70}
        height={20}
        alt="Plant for the Planet Logo"
        />
        <h1 className="text-xl mb-4 mt-[-20px]">Contact Us</h1>
      </div>

      <p className="text-gray-600 mb-2 text-[14px] ">
        We would love to hear from you! Please fill out this form and we will
        get in touch with you shortly.
      </p>
      <form className="space-y-2">
        <label htmlFor="name" className="block">
          <input
            type="text"
            id="name"
            placeholder="Name*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
          />
        </label>
        <label htmlFor="email" className="block">
          <input
            type="email"
            id="email"
            placeholder="Email Address*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
          />
        </label>
        <label htmlFor="message" className="block">
          <textarea
            id="message"
            placeholder="Your Message*"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-[14px] px-5"
            rows="4"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full py-3 bg-[#688815] text-white rounded-[25px]"
        >
          Send Message
        </button>
      </form>
      <div className="flex flex-col gap-2 mt-2 text-[14px]">
        <div className="flex items-center w-full pl-3 py-3 border rounded-[25px] text-gray-700 ">
          <FaEnvelope size={20} className="mr-2" /> info@example.com
        </div>
        <div className="flex items-center w-full pl-3 py-3 border rounded-[25px] text-gray-700">
          <FaPhone size={20} className="mr-2" /> +1 234 567 890
        </div>
        <div className="flex items-center w-full pl-3 py-3 border rounded-[25px] text-gray-700">
          <FaMapMarkerAlt size={20} className="mr-2" /> 1234 Street Name, City,
          Country
        </div>
      </div>
    </div>
  );
};

export default ContactUsForm;
