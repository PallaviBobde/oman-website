import React from "react";
import ButtonWithArrow from "./ButtonWithArrow";

const ImageWithContent = ({
  imageUrl,
  heading,
  subheading,
  buttonText,
  imageOnLeft,
  children,
  rounded = false,
  border = false,
  background = false,
  bgColor= null,
  btnLink=""
}) => {
  // Determine flex direction based on imageOnLeft prop
  const flexDirection = imageOnLeft ? "flex-col md:flex-row " : "flex-col md:flex-row-reverse";

  return (
    <div
      className={`flex  ${flexDirection} items-center justify-center py-20 px-4 md:px-12 ${
        background && "bg-[#F7FBF5] "
      } ${bgColor && `bg-[${bgColor}]`}`}
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="w-full md:w-1/2 relative mb-5 ">
          <img
            src={imageUrl}
            alt="Content Image"
            className={`${rounded && "rounded-[20px]"} z-10 relative`}
          />
          {border && (
            <div className="w-full h-full bg-[#CAE4CD] rounded-[20px] absolute bottom-5 left-5 z-0" />
          )}
        </div>
      )}

      {/* Text Content Section */}
      <div className={`w-full md:w-${imageUrl ? "1/2" : "full"} px-4 md:px-8`}>
        {heading && (
          <h2 className="text-4xl font-bold mb-10 text-gray-800">{heading}</h2>
        )}
        {subheading && (
          <p className="text-lg mb-4 text-gray-700">{subheading}</p>
        )}
        {children && children}
        {buttonText && (
          <ButtonWithArrow buttonText={buttonText} btnLink={btnLink} />
        )}
      </div>
    </div>
  );
};

export default ImageWithContent;
