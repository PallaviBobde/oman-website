import Link from "next/link";

export default function Header() {
  return (
    <>
      <header class="text-gray-600 body-font border-b-2 fixed top-0 bg-white w-full z-2000">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  z-9999">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/PftP-Logo.svg"
              width="60px"
            />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center text-s pt-10">
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/">
              Home
            </a>
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/platform">
              Platform
            </a>
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/about-us">
              About us
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold"
              href="/statics-and-records"
            >
              Statics and Records
            </a>
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/projects">
              Projects
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold"
              href="/live-and-podcasts"
            >
              Live and podcasts
            </a>
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/academy">
              Academy
              {/* <div className="absolute top-20 bg-white flex flex-col text-gray-500 z-40 font-normal p-2 text-[12px] border rounded">
                <a href="/partner-with-us">Youth and Children's</a>
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
              class="mr-5 hover:text-gray-900 font-semibold"
              href="/support-us"
            >
              Requests
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold"
              href="/support-us"
            >
              Support Us
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
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/tracking">
              Tracking
            </a>
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/blogs">
              Blogs
            </a>
          </nav>
          <div className="absolute right-0 p-2 top-0  rounded-md">
            <a
              class="font-semibold inline-flex items-center  border-0 py-1 px-6 focus:outline-none rounded-[25px] text-base mt-4 md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]"
              href="/donation"
            >
              Donate
            </a>
            <a class="ml-5 hover:text-gray-900 font-semibold" href="/login">
              Login
            </a>
            <a class="ml-5 hover:text-gray-900 font-semibold" href="/signup">
              Sign Up
            </a>
          </div>
        </div>
      </header>
      <div className="py-10" />
    </>
  );
}
