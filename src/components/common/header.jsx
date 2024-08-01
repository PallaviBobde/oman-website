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
    }, 500);
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
            <div className="flex text-gray-500">
              <a
                className="mr-5   flex flex-col items-center text-[12px] hover:text-[#14A83F]"
                href="/"
              >
                <img src="/Home.png" className="m-[-20px] w-[100px]" />
                Home
              </a>
              <a
                className="mr-5  flex flex-col items-center text-[12px] hover:text-[#14A83F]"
                href="/platform"
              >
                <img src="/Platform.png" className="m-[-20px] w-[100px]" />
                Platform
              </a>
              <a
                className="mr-5   flex flex-col items-center text-[12px] hover:text-[#14A83F]"
                href="/about-us"
              >
                <img src="/About-us.png" className="m-[-20px] w-[100px]" />
                About us
              </a>
              <a
                className="mr-5   flex flex-col items-center text-[12px] hover:text-[#14A83F]"
                href="/statics-and-records"
              >
                <img
                  src="/Statics&Records.png"
                  className="m-[-40px] w-[100px]"
                />
                Statics and Records
              </a>
              <a
                className="mr-5 flex flex-col items-center text-[12px] hover:text-[#14A83F]"
                href="/projects"
              >
                <img src="/Projects.png" className="m-[-20px] w-[100px]" />
                Projects
              </a>
              <a
                className="mr-5  flex flex-col items-center text-[12px] hover:text-[#14A83F]"
                href="/live-and-podcasts"
              >
                <img
                  src="/Liveandpodcasts.png"
                  className="m-[-40px] w-[100px]"
                />{" "}
                Live and podcasts
              </a>
              <div
                className="mr-5  flex flex-col items-center text-[12px] hover:text-[#14A83F] cursor-pointer"
                // href="/academy"
                onMouseEnter={() => handleMouseEnter("academy")}
                onMouseLeave={() => handleMouseLeave("academy")}
                ref={academyMenuRef}
              >
                <img src="/Academy.png" className="m-[-20px] w-[100px]" />
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
                  <div className="absolute top-24 bg-white z-20 flex flex-col  text-gray-800 text-[14px] font-semibold shadow rounded-lg">
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
                      href="/blogs"
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
                className="mr-5  flex flex-col items-center text-[12px] hover:text-[#14A83F]"
                href="/support-us"
              >
                <img src="/Requests.png" className="m-[-20px] w-[100px]" />
                Requests
              </a>
              <p
                className="mr-5 flex flex-col items-center text-[12px] hover:text-[#14A83F] cursor-pointer"
                // href="/support-us"
                onMouseEnter={() => handleMouseEnter("support")}
                onMouseLeave={() => handleMouseLeave("support")}
                ref={supportMenuRef}
              >
                <img src="/SupportUs.png" className="m-[-20px] w-[100px]" />
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
                  <div className="absolute top-24 bg-white z-20 flex flex-col  text-gray-800 text-[14px] font-semibold shadow rounded-lg">
                    <a
                      href="/partner-with-us"
                      className="hover:bg-[#14A83F40] p-5 flex"
                    >
                      <img
                        src="/PartnerWithUs.png"
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
                    <a
                      href="/donation"
                      className="hover:bg-[#14A83F40] p-5 flex"
                    >
                      <img
                        src="/DonateIcon.png"
                        className="m-[-40px] w-[100px] mr-[-30px]"
                      />
                      Donate
                    </a>
                    <a
                      href="/donation"
                      className="hover:bg-[#14A83F40] p-5 flex"
                    >
                      <img
                        src="/DonateTree.png"
                        className="m-[-40px] w-[100px] mr-[-30px]"
                      />
                      Donate Tree
                    </a>
                    <a
                      href="/donation"
                      className="hover:bg-[#14A83F40] p-5 flex"
                    >
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
                className="mr-5 flex flex-col items-center text-[12px]  hover:text-[#14A83F]"
                href="/tracking"
              >
                <img src="/Tracking.png" className="m-[-20px] w-[100px]" />
                Tracking
              </a>
              <a
                className="mr-5 flex flex-col items-center text-[12px]  hover:text-[#14A83F]"
                href="/blogs"
              >
                <img src="/Blogs.png" className="m-[-20px] w-[100px]" /> Blogs
              </a>
            </div>

            <a
              className="ml-3 font-semibold inline-flex items-center  border-0 py-1 px-6 focus:outline-none rounded-[25px] text-base md:mt-0 bg-gradient-to-b from-[#14A83F] to-[#0C7D48] text-[#fff]  text-[14px]"
              href="/donation"
            >
              <img
                src="/Donate.png"
                className="m-[-40px] mr-[-30px] w-[100px]"
              />
              Donate
            </a>
          </nav>
          <div className="absolute right-0 py-1 px-2 top-0  rounded-md flex">
            <a
              className=" font-semibold inline-flex items-center  border-0  px-6 focus:outline-none rounded-[25px] text-base md:mt-0 bg-gradient-to-b from-[#14A83F] to-[#0C7D48] text-[#fff]  text-[14px]"
              href="/sponsor-form"
            >
              Register as Sponsor
            </a>
            <a
              className="ml-5  font-semibold flex items-center text-[14px] border px-3 rounded-[20px] hover:text-[#14A83F]"
              href="/contact-us"
            >
              <FaEnvelope className="mr-1" />
              Contact Us
            </a>
            <a
              className="ml-5  font-semibold flex items-center text-[14px] border px-3 rounded-[20px] hover:text-[#14A83F]"
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
