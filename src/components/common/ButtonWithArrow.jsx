// components/ButtonWithIcon.js
import React from "react";

const ButtonWithArrow = ({ buttonText, btnLink, btnWhite, greenBtn=false }) => {
  return (
    <a
      className={`flex items-center  py-2  text-${
        btnWhite ? "[#ffffff]" : "[#14A83F]"
      } font-semibold rounded-[25px] w-fit focus:outline-none  hover:opacity-60 ${
        greenBtn && "px-10 bg-[#E3F5EA] text-green-600 font-bold mt-5"
      }`}
      href={btnLink}
      target="_blank"
    >
      <span className="mr-2 text-2xl">{buttonText}</span>
      <svg
        className="w-5 h-5 "
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
      {!greenBtn && (
        <svg
          className="w-5 h-5 ml-[-10px] text-[#68B03060]"
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
      )}
    </a>
  );
};

export default ButtonWithArrow;