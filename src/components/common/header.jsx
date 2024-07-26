import Link from "next/link";
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
  return (
    <>
      <header class="text-gray-600 body-font border-b-2 fixed top-0 bg-white w-full z-20">
        <div class=" mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  z-9999">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/PftP-Logo.svg"
              width="60px"
            />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-s pt-10 ">
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/"
            >
              <FaHome className="mr-1" />
              Home
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/platform"
            >
              <FaChartBar className="mr-1" />
              Platform
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/about-us"
            >
              <FaInfoCircle className="mr-1" />
              About us
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/statics-and-records"
            >
              <FaChartBar className="mr-1" /> Statics and Records
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/projects"
            >
              <FaProjectDiagram className="mr-1" />
              Projects
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/live-and-podcasts"
            >
              <FaPodcast className="mr-1" /> Live and podcasts
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/academy"
            >
              <FaBook className="mr-1" />
              Academy
              {/* <div className="absolute top-20 bg-white flex flex-col text-gray-500 z-40 font-normal p-2 text-[12px] border rounded">
                <a href="/partner-with-us">Youth and Children's</a>
                <a href="/blogs">
                  Research and Expermints
                </a>
                <a href="/session-talk">Session Talk </a>
              </div> */}
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/support-us"
            >
              <FaHandsHelping className="mr-1" /> Requests
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/support-us"
            >
              <FaHandsHelping className="mr-1" /> Support Us
              {/* <div className="absolute top-20 bg-white flex flex-col text-gray-500 z-40 font-normal p-2 text-[12px] border rounded">
                <a href="/partner-with-us">Partener with us</a>
                <a href="/donate-for-research-park">
                  Donate for the Research Park
                </a>
                <a href="/endowent">Endowent</a>
                <a href="/donation">Donate</a>
                <a href="/donation">Donate Tree</a>
                <a href="/donation">Donate Land</a>
              </div> */}
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/tracking"
            >
              <FaTree className="mr-1" />
              Tracking
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold flex items-center text-[14px]"
              href="/blogs"
            >
              <FaBlog className="mr-1" /> Blogs
            </a>
          </nav>
          <div className="absolute right-0 py-1 px-2 top-0  rounded-md flex">
            <a
              class="ml-5 hover:text-gray-900 font-semibold flex items-center text-[14px] border px-3 rounded-[20px]"
              href="/contact-us"
            >
              <FaEnvelope className="mr-1" />
              Contact Us
            </a>
            <a
              class="ml-5 hover:text-gray-900 font-semibold flex items-center text-[14px] border px-3 rounded-[20px]"
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
