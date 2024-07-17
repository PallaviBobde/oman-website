// components/ImageWithSubheading.js
import React from "react";

const ImageWithSubheading = ({ imageUrl, subheading }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden  bg-white m-5">
      <img className="w-full" src={imageUrl} alt="Image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800 text-left">{subheading}</div>
      </div>
    </div>
  );
};

export default ImageWithSubheading;
