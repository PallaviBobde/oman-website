import React from "react";

const BgImageText = () => {
  return (
    <div
      className="relative h-[80vh] w-[95%] m-10 rounded-[20px] overflow-hidden "
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/07/18/18/01/little-girl-2516578_1280.jpg",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <span className="bg-[#ffffff40] text-white mb-2 border-white border w-fit rounded-[30px] p-3 font-semibold text-[20px]">
          Help tackle the climate crisis
        </span>
        <h2 className="font-bold mb-2 text-6xl py-5">Partner with us</h2>
        <p className="w-[50vw] text-xl mb-10">
          Join a generation-spanning movement for a climate-just future with
          your company, your employees, and your customers.
        </p>
      </div>
    </div>
  );
};

export default BgImageText;
