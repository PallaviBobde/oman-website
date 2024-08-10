import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from 'react-icons/fa';

export default function Page() {
  return (
    <div className="mt-20 text-gray-800">
      <h2 className="text-4xl font-semibold text-gray-800 mb-3 text-center">
        Forest Frontrunners
      </h2>
      <div className="bg-white  m-5 text-gray-800 flex font-bold justify-center items-center w-full ">
        <div className="flex justify-center items-center cursor-pointer px-5 pt-3">
          <p className="border-b-1 border-gray-800  p-3 hover:border-b-2 hover:border-[#60AB32] hover:text-[#60AB32]">
            Most Recent
          </p>
          <p className="border-b-1  p-3 hover:border-b-2 hover:border-[#60AB32] hover:text-[#60AB32]">
            Most Trees
          </p>
        </div>

        <FaSearch />
      </div>
      <div>
        <img
          src="https://web.plant-for-the-planet.org/tenants/planet/images/leaderboard/Trees.svg"
          className="absolute bottom-[-50px]"
        />
        <img
          src="https://web.plant-for-the-planet.org/tenants/planet/images/leaderboard/Person.svg"
          className="absolute bottom-[-50px] right-0"
        />
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">PJM Investment Akademie GmbH</p>
          <p>1 Tree</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">PJM Investment Akademie GmbH</p>
          <p>1 Tree</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">PJM Investment Akademie GmbH</p>
          <p>1 Tree</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">PollUnit UG (haftungsbeschränkt)</p>
          <p>104 Tree</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">Gabe P.</p>
          <p>10 Trees</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">Kadir A.</p>
          <p>185.8 Trees</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">maurizio porcuH</p>
          <p>4 Trees</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">PJM Investment Akademie GmbH</p>
          <p>1 Tree</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">PJM Investment Akademie GmbH</p>
          <p>3 Trees</p>
        </div>
        <div className="w-[600px] m-auto justify-between flex text-[20px] text-gray-700 border-b border-gray-300 py-5">
          <p className="font-semibold">PJM Investment Akademie GmbH</p>
          <p>1 Tree</p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#007A48] to-[#65AF31] p-20 flex flex-wrap justify-around">
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-[#65AF31] text-5xl">85.31m</p>
          <p>Trees donated since launch of the platform (2019)</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-[#65AF31] text-5xl">14b</p>
          <p>Trees reported to us since 2006</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-red text-5xl">10b</p>
          <p>Net tree loss per year</p>
        </div>

        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-[#65AF31] text-5xl">85</p>
          <p>Number of Ambassadors</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-[#65AF31] text-5xl">14</p>
          <p>Number of Projects</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-red text-5xl">10</p>
          <p>Number of Planted Trees</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-[#65AF31] text-5xl">85</p>
          <p>Restoration Lands ( hectare)</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-[#65AF31] text-5xl">14</p>
          <p>CO2 offset (ton/ year)</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-red text-5xl">10</p>
          <p>Aire Quality ( tron / year)</p>
        </div>
        <div className="m-10 p-10 bg-white w-[250px] h-[250px] flex flex-col  justify-center items-center text-center rounded-[20px] font-bold ">
          <p className="text-red text-5xl">10</p>
          <p>Tool tree lost per year</p>
        </div>
      </div>

      <div className="flex justify-center m-20">
        <div className="text-white relative">
            <img
              src="https://web.plant-for-the-planet.org/tenants/planet/images/leaderboard/restoreTrees.svg"
              alt="Content Image"
              className="w-[40vw] mx-5"
            />
            <div className="absolute bottom-20 left-10 z-20">
              <h2 className="text-5xl font-bold">
                How do we restore  <br /> a trillion trees?
              </h2>
               <p className="text-[24px] flex items-center mt-5">
                Read more
                <FaArrowRight className="text-lg ml-5" />
              </p>
            </div>
          </div>
          <div className="text-white relative">
            <img
              src="https://web.plant-for-the-planet.org/tenants/planet/images/leaderboard/selectProjects.svg"
              alt="Content Image"
              className="w-[40vw] mx-5"
            />
            <div className="absolute bottom-20 left-10 z-20">
              <h2 className="text-5xl font-bold">
                How we select <br /> Projects
              </h2>
              <p className="text-[24px] flex items-center mt-5">
                Read more
                <FaArrowRight className="text-lg ml-5" />
              </p>
            </div>
          </div>
      </div>

      <div className="text-center p-20">
        <h2 className="text-5xl font-semibold text-gray-800 mb-3 text-center">
        EU Deforestation Regulation
      </h2>
      <p className="text-3xl  text-gray-800 mb-3 text-center">EUDR · Regulation (EU) 2023/1115</p>
      <p className="text-2xl  text-gray-800 mb-3 text-center">Any company importing or exporting one of seven commodities, frequently linked to deforestation, must prove that there was no deforestation in the supply chain after 31 Dec 2020.</p>
      </div>

      <div className="flex justify-center text-2xl cursor-pointer">
        <div className=" m-3 hover:bg-[#A25D1E] hover:text-white p-2 rounded-lg">🍫Cocoa</div>
        <div className=" m-3 hover:bg-[#A25D1E] hover:text-white p-2 rounded-lg">🍫Coffee</div>
        <div className=" m-3 hover:bg-[#A25D1E] hover:text-white p-2 rounded-lg">🍫Cattle</div>
        <div className=" m-3 hover:bg-[#A25D1E] hover:text-white p-2 rounded-lg">🍫Palm oil</div>
        <div className=" m-3 hover:bg-[#A25D1E] hover:text-white p-2 rounded-lg">🍫Rubber</div>
        <div className="m-3 hover:bg-[#A25D1E] hover:text-white p-2 rounded-lg">🍫Soy</div>
        <div className="m-3 hover:bg-[#A25D1E] hover:text-white p-2 rounded-lg">🍫Timber</div>
      </div>
      <img src="https://tracer.eco/wp-content/uploads/2024/02/coffee-2@4x.png" className="w-[80%] border-2 shadow-lg mt-20 rounded-[20px] m-auto"/>

    </div>
  );
}
