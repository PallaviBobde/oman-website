'use client'
import React, { useEffect, useRef, useState } from "react";
import ButtonWithArrow from "./ButtonWithArrow";
import { FaRegFilePdf } from "react-icons/fa";

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
  btnLink = "",
  textWhite = false,
  textbelowImage = null,
  partnerUsImg = false,
  tag,
  greenBtn = false,
  darkgreenBtn=false,
  greenText,
}) => {
  // Determine flex direction based on imageOnLeft prop
  const flexDirection = imageOnLeft
    ? "flex-col md:flex-row "
    : "flex-col md:flex-row-reverse";

  const imageRef = useRef(null);
  const [imageDimensions, setImageDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (imageRef.current) {
      setImageDimensions({
        width: imageRef.current.clientWidth,
        height: imageRef.current.clientHeight,
      });
    }
  }, [imageUrl]);

  return (
    <div
      className={`flex  ${flexDirection} items-center justify-center py-20 px-4 md:px-12 bg-${
        background ? "[#F7FBF5]" : "transparent"
      }
      `}
    >
      {/* Image Section */}
      {imageUrl && (
        <div className="w-full md:w-1/2 relative mb-5 ">
          <img
            src={imageUrl}
            alt="Content Image"
            className={`${rounded && "rounded-[20px]"} z-10 relative ${
              partnerUsImg && "w-[500px]"
            }`}
            ref={imageRef}
          />
          {border && (
            <div
              className="bg-[#CAE4CD] rounded-[20px] absolute z-0 top-[-15px] right-[-15px]"
              style={{
                width: `${imageDimensions.width}px`,
                height: `${imageDimensions.height}px`,
              }}
            />
          )}
          <p className="text-gray-800 text-center mt-5">{textbelowImage}</p>
        </div>
      )}

      {/* Text Content Section */}
      <div
        className={`w-full md:w-${imageUrl ? "1/2" : "full"} px-4 md:px-8 ${
          textWhite ? "text-white" : "text-gray-800"
        } ${imageOnLeft && "ml-5"}`}
      >
        {tag && (
          <p className="text-[20px] mb-6 text-green-500 font-semibold border w-fit py-2 px-5 rounded-[20px] shadow-lg">
            {tag}
          </p>
        )}
        {greenText && (
          <>
           <p className="text-[24px] mb-6 text-green-500 font-semibold border w-fit p-5 rounded-lg shadow-lg">
            <FaRegFilePdf />
            </p>
            <p className="text-xl uppercase text-green-500 font-semibold">
              {greenText}
            </p>
          </>
        )}
        {heading && (
          <h2 className="text-4xl font-bold mb-5  ">{heading}</h2>
        )}
        {subheading && <p className="text-[20px] mb-4 ">{subheading}</p>}
        {children && children}
        {buttonText && (
          <ButtonWithArrow
            buttonText={buttonText}
            btnLink={btnLink}
            btnWhite={textWhite}
            greenBtn={greenBtn}
            darkgreenBtn={darkgreenBtn}
          />
        )}
      </div>
    </div>
  );
};

export default ImageWithContent;
