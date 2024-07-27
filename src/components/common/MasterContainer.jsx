// components/MasterContainer.js
import React from "react";

const MasterContainer = ({  heading,children }) => {
  return (
    <div className="my-20 mx-10">
      {heading && (
        <div className="text-4xl font-bold mb-4 text-gray-700 text-center">
          {heading}
        </div>
      )}
      <div className="flex flex-wrap justify-around">{children}</div>
    </div>
  );
};

export default MasterContainer;
