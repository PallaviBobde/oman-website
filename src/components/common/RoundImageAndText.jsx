// components/PatronCard.js
import Image from 'next/image';

export const  PatronCard = ({ imageUrl, heading, subtext,margin }) => {
  return (
    <div className={`max-w-sm rounded overflow-hidden  p-4 ${margin && 'mx-10'}`}>
      <div className="flex justify-center">
        <Image
          className="rounded-full"
          src={imageUrl}
          alt={heading}
          width={150}
          height={150}
        />
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-gray-800 text-[24px] mb-3">{heading}</h2>
        <p className="text-gray-600 text-[20px]">{subtext}</p>
      </div>
    </div>
  );
};


