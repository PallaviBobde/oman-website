'use client'
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaProjectDiagram,
  FaPodcast,
  FaBook,
  FaHandsHelping,
  FaChartBar,
  FaTree,
  FaBlog,
  FaSignInAlt,
  FaDonate,
  FaEnvelope,
} from "react-icons/fa";


export default function Header() {
  const [supportUsMenu,setSupportUsMenu]=useState(false);
  const [academyMenu, setAcademyMenu] = useState(false);

  const handleMouseEnter = (item) => {
    if(item==='support'){
      setSupportUsMenu(true);
    }
    if (item === "academy") {
      setAcademyMenu(true);
    }
  };

   const handleMouseLeave = () => {
     // Delay hiding the submenu to prevent it from disappearing too quickly
     setTimeout(() => {
       if (item === "support") {
         setSupportUsMenu(false);
       }
       if (item === "academy") {
         setAcademyMenu(false);
       }
     }, 500);
   };
   
  return (
    <>
      <header class="text-gray-600 body-font border-b-2 fixed top-0 bg-white w-full z-20">
        <div class=" mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  z-9999">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src="/main-logo.png"
              width={100}
              height={20}
              alt="Plant for the Planet Logo"
              className="mb-[-30px]"
            />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-s pt-10 ">
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px hover:text-[#60AB32]"
              href="/"
            >
              <FaHome className="mr-1" />
              Home
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              href="/platform"
            >
              <FaChartBar className="mr-1" />
              Platform
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              href="/about-us"
            >
              <FaInfoCircle className="mr-1" />
              About us
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              href="/statics-and-records"
            >
              <FaChartBar className="mr-1" /> Statics and Records
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              href="/projects"
            >
              <FaProjectDiagram className="mr-1" />
              Projects
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              href="/live-and-podcasts"
            >
              <FaPodcast className="mr-1" /> Live and podcasts
            </a>
            <p
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              // href="/academy"
              onMouseEnter={() => handleMouseEnter("academy")}
              onMouseLeave={() => handleMouseLeave("academy")}
            >
              <FaBook className="mr-1" />
              Academy
              {academyMenu && (
                <div className="absolute top-20 bg-white flex flex-col text-gray-500 z-40 font-normal p-2 text-[12px] border rounded">
                  <a href="/partner-with-us">Youth and Children&apos;s</a>
                  <a href="/blogs">Research and Expermints</a>
                  <a href="/session-talk">Session Talk </a>
                </div>
              )}
            </p>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              href="/support-us"
            >
              <FaHandsHelping className="mr-1" /> Requests
            </a>
            <p
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
              // href="/support-us"
              onMouseEnter={() => handleMouseEnter("support")}
              onMouseLeave={() => handleMouseLeave("support")}
            >
              <FaHandsHelping className="mr-1" /> Support Us
              {supportUsMenu && (
                <div className="absolute top-20 bg-white flex flex-col text-gray-500 z-40 font-normal p-2 text-[12px] border rounded">
                  <a href="/partner-with-us">Partner with us</a>
                  <a href="/donate-for-research-park">
                    Donate for the Research Park
                  </a>
                  <a href="/endowent">Endowent</a>
                  <a href="/donation">Donate</a>
                  <a href="/donation">Donate Tree</a>
                  <a href="/donation">Donate Land</a>
                </div>
              )}
            </p>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px  hover:text-[#60AB32]"
              href="/tracking"
            >
              <FaTree className="mr-1" />
              Tracking
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px]  hover:text-[#60AB32]"
              href="/blogs"
            >
              <FaBlog className="mr-1" /> Blogs
            </a>
          </nav>
          <div className="absolute right-0 py-1 px-2 top-0  rounded-md flex">
            <a
              class="ml-5 hover:text-gray-900 font-semibold flex items-center text-[14px] border px-3 rounded-[20px] hover:text-[#60AB32]"
              href="/contact-us"
            >
              <FaEnvelope className="mr-1" />
              Contact Us
            </a>
            <a
              class="ml-5 hover:text-gray-900 font-semibold flex items-center text-[14px] border px-3 rounded-[20px] hover:text-[#60AB32]"
              href="/login"
            >
              <FaSignInAlt className="mr-1" /> Login
            </a>
            <a
              class="ml-3 font-semibold inline-flex items-center  border-0 py-1 px-6 focus:outline-none rounded-[25px] text-base md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]  text-[14px]"
              href="/donation"
            >
              <FaDonate className="mr-1" />
              Donate
            </a>
          </div>
        </div>
      </header>
      <div className="py-10" />
    </>
  );
}
