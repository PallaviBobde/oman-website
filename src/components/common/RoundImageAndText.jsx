// components/PatronCard.js
import Image from 'next/image';
import { FaExternalLinkAlt } from "react-icons/fa";

export const  PatronCard = ({ imageUrl, heading, subtext,margin,btnLink,btnText }) => {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden  p-4 ${margin && "mx-10"}`}
    >
      <div className="flex justify-center">
        <Image
          className="rounded-full border-8 border-[#60AB32]"
          src={imageUrl}
          alt={heading}
          width={240}
          height={240}
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-3xl font-semibold text-gray-700 mb-3">{heading}</h2>
        <p className="text-gray-700 text-[20px]">{subtext}</p>
        {!!btnText && (
          <a href={btnLink} className="text-[#60AB32] flex justify-center items-center font-semibold text-[20px]">
            {btnText}
            <FaExternalLinkAlt className='ml-2' />
          </a>
        )}
      </div>
    </div>
  );
};


