import React from "react";

const BlogCard = ({ imageUrl, date, heading, description }) => {
  return (
    <div className="w-[30%] bg-white rounded-[20px] shadow-lg overflow-hidden m-2  transition-transform duration-300 hover:-translate-y-2 pb-5">
      <img
        src={imageUrl}
        alt={heading}
        className="w-full h-[250px] object-cover object-center"
      />
      <div className="p-4">
        <p className="text-gray-400 ">{date}</p>
        <h2 className="text-xl font-bold mt-2 text-gray-900">{heading}</h2>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
