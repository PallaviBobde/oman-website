// components/ProjectCard.js

import Image from "next/image";
import ProgressBar from "./ProgressBar";

const ProjectCard = ({
  topImage,
  heading,
  subText,
  numberOfTrees,
  omrPerTree,
}) => {
    
  return (
    <div className="w-[28%] border-2 border-white rounded-lg shadow-lg  overflow-hidden m-5 text-gray-800">
      <div className="relative h-48 w-full">
        <Image
          src={topImage}
          alt={heading}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0  text-white p-4">
          <h2 className="text-xl font-bold">{heading}</h2>
          <p>{subText}</p>
        </div>
      </div>
      <ProgressBar progress={30} />
      <div className="p-4 flex justify-between items-center">
        <div>
          <p className="font-bold"> {numberOfTrees}</p>
          <p>
            <span className="font-bold">OMR {omrPerTree}</span> per Tree
          </p>
        </div>

        <a class="font-semibold inline-flex items-center  border-0 py-1 px-6 focus:outline-none rounded-[25px] text-base mt-4 md:mt-0 bg-gradient-to-b from-[#60AB32] to-[#0C7D48] text-[#fff]" href="/donation">
          Donate
        </a>
      </div>
      <div className="bg-[#E1EFD8] text-center p-2 text-[14px]">
        <p>By Community Forest International</p>
      </div>
    </div>
  );
};

export default ProjectCard;
