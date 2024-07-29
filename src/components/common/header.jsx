"use client";
import Image from "next/image";

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
  const [supportUsMenu, setSupportUsMenu] = useState(false);
  const [academyMenu, setAcademyMenu] = useState(false);

  const handleMouseEnter = (item) => {
    if (item === "support") {
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
      <header className="text-gray-600 body-font border-b-2 fixed top-0 bg-white w-full z-20">
        <div className=" mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  z-9999">
          <nav className="md:ml-auto md:mr-auto flex  flex-wrap text-base justify-between items-center text-s pt-10 my-[-30px] w-full">
            <a
              className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
              href="/"
            >
              <Image
                src="/main-logo.png"
                width={100}
                height={20}
                alt="Plant for the Planet Logo"
                // className="mb-[-30px]"
                className="mr-5"
              />
            </a>
            <div className="flex">
              <a
                className="mr-5  font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
                href="/"
              >
                <FaHome className="mr-1 text-[#60AB32] text-[24px]" />
                Home
              </a>
              <a
                className="mr-5  font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
                href="/platform"
              >
                <FaChartBar className="mr-1 text-[#60AB32] text-[24px]" />
                Platform
              </a>
              <a
                className="mr-5  font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
                href="/about-us"
              >
                <FaInfoCircle className="mr-1 text-[#60AB32] text-[24px]" />
                About us
              </a>
              <a
                className="mr-5  font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
                href="/statics-and-records"
              >
                <FaChartBar className="mr-1 text-[#60AB32] text-[24px]" />
                Statics and Records
              </a>
              <a
                className="mr-5 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
                href="/projects"
              >
                <FaProjectDiagram className="mr-1 text-[#60AB32] text-[24px]" />
                Projects
              </a>
              <a
                className="mr-5  font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
                href="/live-and-podcasts"
              >
                <FaPodcast className="mr-1 text-[#60AB32] text-[24px]" /> Live
                and podcasts
              </a>
              <div
                className="mr-5 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32] relative"
                // href="/academy"
                onMouseEnter={() => handleMouseEnter("academy")}
                onMouseLeave={() => handleMouseLeave("academy")}
              >
                <FaBook className="mr-1 text-[#60AB32] text-[24px]" />
                Academy
                {academyMenu && (
                  <div className="absolute top-10 bg-white flex flex-col text-gray-500 z-40 font-normal text-[12px] border rounded w-[150px] ">
                    <a
                      href="/partner-with-us"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Youth and Children&apos;s
                    </a>
                    <a
                      href="/blogs"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Research and Expermints
                    </a>
                    <a
                      href="/session-talk"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Session Talk{" "}
                    </a>
                  </div>
                )}
              </div>
              <a
                className="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32]"
                href="/support-us"
              >
                <FaHandsHelping className="mr-1 text-[#60AB32] text-[24px]" />
                Requests
              </a>
              <p
                className="mr-5 hover:text-gray-900 font-semibold flex flex-col items-center text-[14px] hover:text-[#60AB32] relative"
                // href="/support-us"
                onMouseEnter={() => handleMouseEnter("support")}
                onMouseLeave={() => handleMouseLeave("support")}
              >
                <FaHandsHelping className="mr-1 text-[#60AB32] text-[24px]" />
                Support Us
                {supportUsMenu && (
                  <div className="absolute top-10 bg-white flex flex-col text-gray-500 z-40 font-normal text-[12px] border rounded w-[150px]">
                    <a
                      href="/partner-with-us"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Partner with us
                    </a>
                    <a
                      href="/donate-for-research-park"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Donate for the Research Park
                    </a>
                    <a
                      href="/endowent"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      {" "}
                      Endowent
                    </a>
                    <a
                      href="/donation"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Donate
                    </a>
                    <a
                      href="/donation"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Donate Tree
                    </a>
                    <a
                      href="/donation"
                      className="hover:bg-[#60AB3240] border-b px-2"
                    >
                      Donate Land
                    </a>
                  </div>
                )}
              </p>
              <a
                className="mr-5  font-semibold flex flex-col items-center text-[14px  hover:text-[#60AB32]"
                href="/tracking"
              >
                <FaTree className="mr-1 text-[#60AB32] text-[24px]" />
                Tracking
              </a>
              <a
                className="mr-5  font-semibold flex flex-col items-center text-[14px]  hover:text-[#60AB32]"
                href="/blogs"
              >
                <FaBlog className="mr-1 text-[#60AB32] text-[24px]" /> Blogs
              </a>
            </div>

            <a
              className="ml-3 font-semibold inline-flex items-center  border-0 py-1 px-6 focus:outline-none rounded-[25px] text-base md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]  text-[14px]"
              href="/donation"
            >
              <FaDonate className="mr-1" />
              Donate
            </a>
          </nav>
          <div className="absolute right-0 py-1 px-2 top-0  rounded-md flex">
            <a
              className="ml-5  font-semibold flex items-center text-[14px] border px-3 rounded-[20px] hover:text-[#60AB32]"
              href="/contact-us"
            >
              <FaEnvelope className="mr-1" />
              Contact Us
            </a>
            <a
              className="ml-5  font-semibold flex items-center text-[14px] border px-3 rounded-[20px] hover:text-[#60AB32]"
              href="/login"
            >
              <FaSignInAlt className="mr-1" /> Login
            </a>
          </div>
        </div>
      </header>
      <div className="py-10" />
    </>
  );
}
