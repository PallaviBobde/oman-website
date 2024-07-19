import React from "react";

const BgImageText = () => {
  return (
    <div
      className="relative h-screen/2 w-[95%] bg-cover bg-center m-10 rounded"
      style={{
        backgroundImage:
          "url('https://cdn.pixabay.com/photo/2017/07/18/18/01/little-girl-2516578_1280.jpg",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
        <span className="bg-blue-500 text-white px-2 py-1 rounded-md mb-2 border-white border">
          Tag Text
        </span>
        <h2 className="text-2xl font-bold mb-2">Heading</h2>
        <p className="text-lg">Subheading</p>
      </div>
    </div>
  );
};

export default BgImageText;
