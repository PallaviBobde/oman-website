// components/CardWithButton.js
import React from "react";
import ButtonWithArrow from "./ButtonWithArrow";

const HeadDetailButtonComponent = ({ heading, description, buttonText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white p-6">
      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">{heading}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <ButtonWithArrow/>
    </div>
  );
};

export default HeadDetailButtonComponent;
