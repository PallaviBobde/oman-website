// components/ButtonWithIcon.js
import React from "react";

const ButtonWithArrow = ({ buttonText }) => {
  return (
    <button className="flex items-center  py-2  text-[#68B030] font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
      <span className="mr-2 text-2xl">{buttonText}</span>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  );
};

export default ButtonWithArrow;
