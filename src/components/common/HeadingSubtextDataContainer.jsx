// components/MasterContainer.js
import React from "react";
import MasterContainer from "./MasterContainer";
import ButtonWithArrow from "./ButtonWithArrow";

const HeadingSubtextDataContainer = ({ heading, subtext, children, background }) => {
  return (
    <div className={` mx-auto py-20 p-6 rounded-lg my-10 ${background && "bg-[#F7FBF5]"}`}>
      <div className="w-full  px-4 md:px-8">
        {heading && (
          <h2 className="text-4xl font-bold mb-5 text-gray-800 text-center">{heading}</h2>
        )}
        {subtext && <p className=" mb-4 text-gray-700 text-center text-2xl">{subtext}</p>}
      </div>
      <MasterContainer>{children}</MasterContainer>
    </div>
  );
};

export default HeadingSubtextDataContainer;
