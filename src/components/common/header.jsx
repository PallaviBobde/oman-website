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

export default function Header() {
  const [supportUsMenu, setSupportUsMenu] = useState(false);
  const [academyMenu, setAcademyMenu] = useState(false);
  const supportMenuRef = useRef(null);
  const academyMenuRef = useRef(null);

  const handleMouseEnter = (item) => {
    if (item === "support") {
      setSupportUsMenu(true);
    }
    if (item === "academy") {
      setAcademyMenu(true);
    }
  };

  const handleMouseLeave = (item) => {
    setTimeout(() => {
      if (item === "support") {
        setSupportUsMenu(false);
      }
      if (item === "academy") {
        setAcademyMenu(false);
      }
    }, 1000);
  };

  const handleClickOutside = (event) => {
    if (
      supportMenuRef.current &&
      !supportMenuRef.current.contains(event.target) &&
      academyMenuRef.current &&
      !academyMenuRef.current.contains(event.target)
    ) {
      setSupportUsMenu(false);
      setAcademyMenu(false);
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
          <nav className="md:ml-auto md:mr-auto flex  flex-wrap text-base justify-between items-center text-s py-5 my-[-30px] w-full">
            <Image
              src="/main-logo.png"
              width={100}
              height={30}
              alt="Plant for the Planet Logo"
              // className="mr-5"
            />
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/"
            >
              <img
                src="/Home.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Home
            </a>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/platform"
            >
              <img
                src="/Platform.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Platform
            </a>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/about-us"
            >
              <img
                src="/About-us.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              About us
            </a>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/statics-and-records"
            >
              <img
                src="/Statics&Records.png"
                className="m-[-30px] w-[92px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Statics and Records
            </a>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/projects"
            >
              <img
                src="/Projects.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Projects
            </a>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/live-and-podcasts"
            >
              <img
                src="/Liveandpodcasts.png"
                className="m-[-30px] w-[92px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Live and podcasts
            </a>
            <div
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group cursor-pointer"
              // href="/academy"
              onMouseEnter={() => handleMouseEnter("academy")}
              onMouseLeave={() => handleMouseLeave("academy")}
              ref={academyMenuRef}
            >
              <img
                src="/Academy.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Academy
              {academyMenu && (
                // <div className="w-screen absolute top-24 left-0 bg-[#E1EFD8] flex text-gray-500 z-40 font-normal text-[12px] border rounded p-10 justify-center">
                //   <img
                //     src="https://cdn.pixabay.com/photo/2016/08/01/06/51/people-1560569_1280.jpg"
                //     alt="academy"
                //     className="w-[300px] h-[200px] rounded-lg mr-10"
                //   />
                //   <div className=" flex flex-col  text-gray-800 text-[14px] font-semibold">
                //     <p className=" text-gray-400 mb-3">ACADEMY</p>
                //     <a
                //       href="/youth-and-children"
                //       className="hover:bg-[#14A83F40] py-1"
                //     >
                //       👧 Youth and Children&apos;s
                //     </a>
                //     <a href="/blogs" className="hover:bg-[#14A83F40] py-1">
                //       🔬 Research and Experiments
                //     </a>
                //     <a
                //       href="/session-talk"
                //       className="hover:bg-[#14A83F40] py-1"
                //     >
                //       🎤 Session Talk
                //     </a>
                //   </div>
                // </div>
                <div className="absolute top-20 bg-white z-20 flex flex-col  text-gray-800 text-[14px] font-semibold shadow rounded-lg">
                  <a
                    href="/youth-and-children"
                    className="hover:bg-[#14A83F40] p-5 flex"
                  >
                    <img
                      src="/YouthandChildren.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />
                    Youth and Children&apos;s
                  </a>
                  <a
                    href="/donate-for-research-park"
                    className="hover:bg-[#14A83F40] p-5 flex items-center"
                  >
                    <img
                      src="/Research&Experiments.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />
                    Research and Experiments
                  </a>
                  <a
                    href="/session-talk"
                    className="hover:bg-[#14A83F40]  p-5 flex"
                  >
                    <img
                      src="/SessionTalk.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />
                    Session Talk
                  </a>
                </div>
              )}
            </div>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/support-us"
            >
              <img
                src="/Requests.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Requests
            </a>
            <p
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group cursor-pointer"
              // href="/support-us"
              onMouseEnter={() => handleMouseEnter("support")}
              onMouseLeave={() => handleMouseLeave("support")}
              ref={supportMenuRef}
            >
              <img
                src="/SupportUs.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Support Us
              {supportUsMenu && (
                // <div className="w-screen absolute top-24 left-0 bg-[#E1EFD8] flex text-gray-500 z-40 font-normal text-[12px] border rounded p-10 justify-center">
                //   <img
                //     src="https://www.plant-for-the-planet.org/wp-content/uploads/2022/10/20191015_ac_curitiba_rethoricalpractice_3.jpg"
                //     alt="academy"
                //     className="w-[300px] h-[200px] rounded-lg mr-10"
                //   />
                //   <div className=" flex flex-col  text-gray-800 text-[14px] font-semibold">
                //     <p className=" text-gray-400 mb-3">SUPPORT US</p>
                //     <a
                //       href="/partner-with-us"
                //       className="hover:bg-[#14A83F40] px-2"
                //     >
                //       🤝 Partner with us
                //     </a>
                //     <a href="/donation" className="hover:bg-[#14A83F40] px-2">
                //       💼 Donate for the Research Park
                //     </a>
                //     <a
                //       href="/endowent"
                //       className="hover:bg-[#14A83F40]  px-2"
                //     >
                //       💖 Endowent
                //     </a>
                //     <a href="/donation" className="hover:bg-[#14A83F40] px-2">
                //       🎁 Donate
                //     </a>
                //     <a href="/donation" className="hover:bg-[#14A83F40] px-2">
                //       🌳 Donate Tree
                //     </a>
                //     <a href="/donation" className="hover:bg-[#14A83F40] px-2">
                //       🌾 Donate Land
                //     </a>
                //   </div>
                // </div>)}
                <div className="absolute top-20 bg-white z-20 flex flex-col  text-gray-800 text-[14px] font-semibold shadow rounded-lg">
                  <a
                    href="/partner-with-us"
                    className="hover:bg-[#14A83F40] p-5 flex"
                  >
                    <img
                      src="/Partnerwithus.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />
                    Partner with us
                  </a>
                  <a
                    href="/donation"
                    className="hover:bg-[#14A83F40] p-5 flex items-center"
                  >
                    <img
                      src="/DonatefortheResearchPark.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />{" "}
                    Donate for the Research Park
                  </a>
                  <a
                    href="/endowent"
                    className="hover:bg-[#14A83F40]  p-5 flex"
                  >
                    <img
                      src="/Endowent.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />{" "}
                    Endowent
                  </a>
                  <a href="/donation" className="hover:bg-[#14A83F40] p-5 flex">
                    <img
                      src="/DonateIcon.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />
                    Donate
                  </a>
                  <a href="/donation" className="hover:bg-[#14A83F40] p-5 flex">
                    <img
                      src="/DonateTree.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />
                    Donate Tree
                  </a>
                  <a href="/donation" className="hover:bg-[#14A83F40] p-5 flex">
                    <img
                      src="/DonateLand.png"
                      className="m-[-40px] w-[100px] mr-[-30px]"
                    />
                    Donate Land
                  </a>
                </div>
              )}
            </p>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/tracking"
            >
              <img
                src="/Tracking.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />
              Tracking
            </a>
            <a
              className="flex flex-col items-center text-[14px] hover:text-[#14A83F] font-bold group"
              href="/blogs"
            >
              <img
                src="/Blogs.png"
                className="m-[-30px] w-[150px] filter grayscale brightness-0 group-hover:brightness-100 group-hover:filter-none"
              />{" "}
              Blogs
            </a>
            <div className="flex flex-col gap-2 items-center">
              <a
                className="rounded-[25px] bg-gradient-to-b from-[#14A83F] to-[#0C7D48] text-[#fff]  text-sm w-[100px] text-center leading-3 py-3 font-semibold"
                href="/login"
              >
                Login
              </a>
              <a
                className="rounded-[25px] bg-gradient-to-b from-[#14A83F] to-[#0C7D48] text-[#fff]  text-sm w-[150px] text-center leading-3 py-3 font-semibold"
                href="/sponsor-form"
              >
                <span>Register </span>
                <span class="mt-2">as Sponsor</span>
              </a>
            </div>
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
        <div className="absolute justify-center gap-4 p-2 top-40 right-0 z-64 w-fit h-[150px] bg-[#14A83F] flex flex-col rounded-l-[20px] items-center ">
          <a
            className="font-semibold flex items-center flex-col justify-center group"
            href="/contact-us"
          >
            <FaEnvelope className="text-white text-[24px]" />
            <p className="font-normal text-[12px] text-white opacity-0 group-hover:opacity-100">
              Contact
            </p>
          </a>
          <a href="/donation" className="flex flex-col items-center group">
            <BiSolidDonateHeart className="text-white text-[24px]" />
            <p className="font-normal text-[12px] text-white opacity-0 group-hover:opacity-100">
              Donate
            </p>
          </a>
        </div>
      </header>
      <div className="py-8" />
    </>
  );
}
