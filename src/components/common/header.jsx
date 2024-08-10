"use client";
import Image from "next/image";

import { useEffect, useRef, useState } from "react";
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
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaHandshakeSimple, FaRegCircleUser } from "react-icons/fa6";


export default function Header() {
  const [supportUsMenu, setSupportUsMenu] = useState(false);
  const [academyMenu, setAcademyMenu] = useState(false);
  const [requestsMenu, setRequestsMenu] = useState(false);
  const supportMenuRef = useRef(null);
  const academyMenuRef = useRef(null);
  const requestsRef = useRef(null);

  const handleMouseEnter = (item) => {
    if (item === "support") {
      setSupportUsMenu(true);
    }
    if (item === "academy") {
      setAcademyMenu(true);
    }
    if (item === "requests") {
      setRequestsMenu(true);
    }
  };

  const handleMouseLeave = (item) => {
     if (item === "support") {
       setSupportUsMenu(false);
     }
     if (item === "academy") {
       setAcademyMenu(false);
     }
     if (item === "requests") {
       setRequestsMenu(false);
     }
  };

  const handleClickOutside = (event) => {
    if (
      supportMenuRef.current &&
      !supportMenuRef.current.contains(event.target) &&
      academyMenuRef.current &&
      !academyMenuRef.current.contains(event.target) &&
      requestsRef.current &&
      !requestsRef.current.contains(event.target)
    ) {
      setSupportUsMenu(false);
      setAcademyMenu(false);
      setRequestsMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <>
      <header className="text-gray-600 body-font border-b-2 fixed top-0 bg-white w-full z-20">
        <div className=" mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  z-9999">
          <nav className="md:ml-auto md:mr-auto flex text-base justify-evenly items-center  py-5 my-[-30px] w-full">
            <Image
              src="/main-logo.png"
              width={120}
              height={30}
              alt="Plant for the Planet Logo"
              className="mx-5"
              style={{ objectFit: "contain" }}
            />
            <a
              className="flex flex-col gap-1 items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/"
            >
              <img
                src="/Home.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Home
            </a>
            <a
              className="flex flex-col gap-1 items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/platform"
            >
              <img
                src="/Platform.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Platform
            </a>
            <a
              className="flex flex-col gap-1 items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/about-us"
            >
              <img
                src="/About-us.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              About us
            </a>
            <a
              className="flex flex-col gap-1 items-center align-middle text-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/statics-and-records"
            >
              <img
                src="/Statics&Records.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Records
            </a>
            <a
              className="flex flex-col gap-1 items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/projects"
            >
              <img
                src="/Projects.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Projects
            </a>
            <a
              className="flex flex-col gap-1 items-center align-middle text-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/live-and-podcasts"
            >
              <img
                src="/Liveandpodcasts.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Media
            </a>
            <div
              className={`relative flex flex-col gap-1 items-center text-[14px] font-bold cursor-pointer ${
                academyMenu ? "text-[#14A83F]" : "hover:text-[#14A83F]"
              }`}
              onMouseEnter={() => handleMouseEnter("academy")}
              ref={academyMenuRef}
            >
              <img
                src="/Academy.png"
                className={`m-[-30px] w-[150px] filter ${
                  academyMenu
                    ? "grayscale-0 brightness-100"
                    : "grayscale brightness-0"
                }`}
              />
              Academy
              {academyMenu && (
                <div
                  className="absolute w-[250px] top-[85px] left-0 bg-white z-20 flex flex-col text-gray-800 text-[14px] font-semibold shadow rounded-lg"
                  onMouseLeave={() => handleMouseLeave("academy")}
                >
                  <a
                    href="/youth-and-children"
                    className="hover:bg-[#14A83F40] p-5 flex items-center group"
                  >
                    <img
                      src="/YouthandChildren.png"
                      className="m-[-40px] w-[100px] mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Youth and Children&apos;s</span>
                  </a>
                  <a
                    href="/donate-for-research-park"
                    className="hover:bg-[#14A83F40] p-5 flex items-center group"
                  >
                    <img
                      src="/Research&Experiments.png"
                      className="m-[-40px] w-[100px] mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Research and Experiments</span>
                  </a>
                  <a
                    href="/session-talk"
                    className="hover:bg-[#14A83F40] p-5 flex items-center group"
                  >
                    <img
                      src="/SessionTalk.png"
                      className="m-[-40px] w-[100px] mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Session Talk</span>
                  </a>
                </div>
              )}
            </div>
            <p
              className={`relative flex flex-col gap-1 items-center text-[14px] font-bold cursor-pointer ${
                requestsMenu ? "text-[#14A83F]" : "hover:text-[#14A83F]"
              }`}
              onMouseEnter={() => handleMouseEnter("requests")}
              ref={requestsRef}
            >
              <img
                src="/Requests.png"
                className={`m-[-30px] w-[150px] filter ${
                  requestsMenu
                    ? "grayscale-0 brightness-100"
                    : "grayscale brightness-0"
                }`}
              />
              Requests
              {requestsMenu && (
                <div
                  className="absolute w-[280px] top-[85px] left-0 bg-white z-20 flex flex-col text-gray-800 text-[14px] font-semibold shadow rounded-lg"
                  onMouseLeave={() => handleMouseLeave("requests")}
                >
                  <a
                    href="/sustainable-events"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/Partnerwithus.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Sustainable Events</span>
                  </a>
                  <a
                    href="/donate-for-research-park"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/DonatefortheResearchPark.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Research Fellowships</span>
                  </a>
                  <a
                    href="/donor-circle"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/Endowent.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Membership</span>
                  </a>
                  <a
                    href="/volunteers"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/DonateTree.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>To Be Volunteers</span>
                  </a>
                </div>
              )}
            </p>
            <p
              className={`relative flex flex-col gap-1 items-center text-[14px] font-bold cursor-pointer ${
                supportUsMenu ? "text-[#14A83F]" : "hover:text-[#14A83F]"
              }`}
              onMouseEnter={() => handleMouseEnter("support")}
              ref={supportMenuRef}
            >
              <img
                src="/SupportUs.png"
                className={`m-[-30px] w-[150px] filter ${
                  supportUsMenu
                    ? "grayscale-0 brightness-100"
                    : "grayscale brightness-0"
                }`}
              />
              Support Us
              {supportUsMenu && (
                <div
                  className="absolute w-[280px] top-[85px] left-0 bg-white z-20 flex flex-col text-gray-800 text-[14px] font-semibold shadow rounded-lg"
                  onMouseLeave={() => handleMouseLeave("support")}
                >
                  <a
                    href="/partner-with-us"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/Partnerwithus.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Partner with us</span>
                  </a>
                  <a
                    href="/donation"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/DonatefortheResearchPark.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Donate for the Research Park</span>
                  </a>
                  <a
                    href="/endowent"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/Endowent.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Endowent</span>
                  </a>
                  <a
                    href="/donation"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/DonateIcon.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Donate</span>
                  </a>
                  <a
                    href="/donation"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/DonateTree.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Donate Tree</span>
                  </a>
                  <a
                    href="/donation"
                    className="hover:bg-[#14A83F40] p-3 flex items-center group"
                  >
                    <img
                      src="/DonateLand.png"
                      className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-0 group-hover:grayscale-0 group-hover:brightness-100"
                    />
                    <span>Donate Land</span>
                  </a>
                </div>
              )}
            </p>

            <a
              className="flex flex-col gap-1 items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/tracking"
            >
              <img
                src="/Tracking.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Tracking
            </a>
            <a
              className="flex flex-col gap-1 items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/blogs"
            >
              <img
                src="/Blogs.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />{" "}
              Blogs
            </a>
            <a
              className="flex flex-col gap-1 items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/login"
            >
              <FaRegCircleUser
                style={{ fontSize: "28px" }}
                className="filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Sign In
            </a>
            {/* <div className="flex flex-col gap-2 items-center">
              <a
                className="rounded-[25px] bg-gradient-to-b from-[#14A83F] to-[#0C7D48] text-[#fff]  text-sm w-[100px] text-center leading-3 py-3 font-semibold"
                href="/login"
              >
                Login
              </a> */}
            {/* <a
                href="/sponsor-form"
                className="rounded-[25px] bg-gradient-to-b from-[#14A83F] to-[#0C7D48] p-2 flex items-center group text-[#fff] font-semibold text-[14px]"
              >
                <img
                  src="/Partnerwithus.png"
                  className="m-[-40px] w-[100px] font-bold mr-[-30px] filter grayscale brightness-[1000%]"
                />
                <span>Register as Sponsor</span>
              </a> */}
            {/* <a
                className="flex items-center gap-1  bg-gradient-to-b from-[#14A83F] to-[#0C7D48] text-[#fff]  text-[14px] w-[180px] text-center leading-3 p-2 font-semibold"
                href="/sponsor-form"
              >
                <img
                  src="/Partnerwithus.png"
                  className="w-[30px] h-[40px]font-bold filter grayscale brightness-[1000%]"
                />
                Register as Sponsor
              </a> */}
            {/* </div> */}
          </nav>
          {/* <div className="absolute right-0 py-1 px-2 top-0  rounded-md flex">
            <a
              className=" font-semibold inline-flex items-center  border-0  px-6 focus:outline-none rounded-[25px] text-base md:mt-0 bg-gradient-to-b from-[#14A83F] to-[#0C7D48] text-[#fff]  text-[14px]"
              href="/sponsor-form"
            >
              Register as Sponsor
            </a>
            <a
              className="ml-5  font-semibold flex items-center text-[14px] border px-3 rounded-[20px] hover:text-[#14A83F]"
              href="/login"
            >
              <FaSignInAlt className="mr-1" /> Login
            </a>
          </div> */}
        </div>
        <div className="absolute justify-center gap-4 p-2 top-40 right-0 z-64 w-fit h-[60px] bg-[#14A83F] flex flex-col rounded-l-[20px] items-center">
          <a href="/contact-us" className="relative flex items-center group">
            <FaEnvelope className="text-white text-[24px] cursor-pointer" />
            <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:relative group-hover:left-0">
              <p className="font-normal text-[16px] text-white cursor-pointer font-medium">
                Contact
              </p>
            </span>
          </a>
        </div>
        <div className="absolute justify-center gap-4 p-2 top-60 right-0 z-64 w-fit h-[60px] bg-[#14A83F] flex flex-col rounded-l-[20px] items-center">
          <a href="/donation" className="relative flex items-center group">
            <BiSolidDonateHeart className="text-white text-[24px]" />
            <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:relative group-hover:left-0">
              <p className="font-normal text-[16px] text-white cursor-pointer font-medium">
                Donate
              </p>
            </span>
          </a>
        </div>
        <div className="absolute justify-center gap-4 p-2 top-80 right-0 z-64 w-fit h-[60px] bg-[#14A83F] flex flex-col rounded-l-[20px] items-center">
          <a href="/sponsor-form" className="relative flex items-center group">
            <FaHandshakeSimple className="text-white text-[24px]" />
            <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:relative group-hover:left-0">
              <p className="font-normal text-[16px] text-white cursor-pointer font-medium">
                Register as Sponser
              </p>
            </span>
          </a>
        </div>

        <div className="relative flex items-center group">
          <span className="absolute left-full ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 group-hover:relative group-hover:left-0"></span>
        </div>
      </header>
      <div className="py-8" />
    </>
  );
}
