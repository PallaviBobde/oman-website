'use client'
import { useState } from "react";

export const TrackingComponent = () => {
  const [treecode, setTreecode] = useState("");
  const [showStatus, setShowStatus] = useState("");

  const handleViewStatus = () => {
    // Simulating a check against a database or API for the status
    // if (treecode === "validtreecode") {
    //   setShowStatus("This is the result.");
    // } else {
    //   setShowStatus(
    //     "Sorry, this code is not valid. ."
    //   );
    // }
    setShowStatus(true);
  };

  return (
    <>
      <div
        className="relative min-h-screen bg-cover bg-center flex items-center justify-center flex-col"
        style={{
          backgroundImage:
            "url(https://cdn.pixabay.com/photo/2023/05/15/19/53/plant-7995882_1280.jpg)",
        }}
      >
        {/* Background image */}
        <div className="absolute inset-0 bg-opacity-75 "></div>

        {/* Main content */}
        <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg ">
          {/* Input and button */}
          <div className="mb-4 flex flex-col justify-center items-center">
            <label
              htmlFor="treecode"
              className="block text-sm font-medium text-gray-700 mb-1 w-4/5"
            >
              Looking for more information on other ecosystems? Enter a treecode
              from a certificate or chocolate package
            </label>
            <div className="flex justify-center mt-5">
              <input
                id="treecode"
                type="text"
                className=" px-3 py-2 border border-gray-300 rounded-[20px] shadow-sm focus:outline-none focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 text-gray-500 mr-5"
                placeholder="Enter treecode"
                value={treecode}
                onChange={(e) => setTreecode(e.target.value)}
              />
              <button
                class="font-semibold inline-flex items-center  border-0 py-1 px-6 focus:outline-none rounded-[25px] text-base mt-4 md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff] uppercase"
                onClick={handleViewStatus}
              >
                View Status
              </button>
            </div>
          </div>
        </div>
        {showStatus && (
          <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg mt-5 text-sm text-gray-600">
            <p >
              Sorry, this code is not valid
            </p>
            <p>Please contact support @plantforplant for help.</p>
          </div>
        )}
      </div>
    </>
  );
};


