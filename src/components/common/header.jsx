import Link from "next/link";

export default function Header() {
  return (
    <>
      <header class="text-gray-600 body-font border-b-2 fixed top-0 bg-white w-full z-9999">
        <div class="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center  z-9999">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              src="https://www.plant-for-the-planet.org/wp-content/uploads/2020/11/PftP-Logo.svg"
              width="60px"
            />
          </a>
          <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
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
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/academy">
              Academy
            </a>
            <a
              class="mr-5 hover:text-gray-900 font-semibold"
              href="/support-us"
            >
              Requests
            </a>
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/tracking">
              Tracking
            </a>
            <a class="mr-5 hover:text-gray-900 font-semibold" href="/blogs">
              Blogs
            </a>
          </nav>
          <button class="font-semibold inline-flex items-center  border-0 py-1 px-6 focus:outline-none rounded-[25px] text-base mt-4 md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]">
            Donate
          </button>
        </div>
      </header>
      <div className="py-10" />
    </>
  );
}
