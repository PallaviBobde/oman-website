// components/ImageSlider.js
'use client';
import { useState } from "react";
import styles from "../common/ImageSlider.module.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";


const images = [
  {
    imgURl:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/12/Kids-Academy-coordinated-by-Plant-for-the-Planet-FOeJ-2.jpg",
    text: "Participation in educational work: organisation and moderation of Plant-for-the-Planet Academies (workshops for children aged 9 and over), supervision and implementation of other (online) educational offerings.",
  },
  {
    imgURl:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/12/Plant-for-the-Planet-FOeJ-with-the-Good-Chocolate.jpg",
    text: "Participation in events: Support and organisation of information stands, lectures and annual network meetings",
  },
  {
    imgURl:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2023/01/Buero_Tutzing1.jpeg",
    text: "Collaboration on the Plant-for-the-Planet platform (our web app for planting trees).",
  },
  {
    imgURl:
      "https://www.plant-for-the-planet.org/wp-content/uploads/2022/12/Plant-for-the-Planet-FOeJ-workstation.jpg",
    text: "Office and administrative tasks: database maintenance, processing of enquiries, research work, telephone service",
  },
];
const ImageSliderVolunteer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <h2 className="text-4xl font-bold text-center text-gray-800 pt-5">
        Your tasks at a glance:
      </h2>
      <div className="m-20 ">
        <div className="p-20 bg-[#60AB3230] rounded-[20px]">
          <div
            className="w-[50vw] rounded-[20px] m-auto h-[400px] relative"
            style={{ backgroundImage: `url(${images[currentIndex].imgURl})` }}
          >
            <button
              className="absolute top-[45%] left-[-100px] bg-white rounded-full p-5"
              onClick={prevSlide}
            >
              <FaArrowLeft className="text-green-500" />
            </button>
            <button
              className="absolute top-[45%] right-[-100px]  bg-white rounded-full p-5"
              onClick={nextSlide}
            >
              <FaArrowRight className="text-green-500" />
            </button>
          </div>
          <h1 className="text-xl  text-center text-gray-700 mt-5">
            {images[currentIndex].text}
          </h1>
        </div>
        <div className={styles.dots}>
          {images.map((_, index) => (
            <span
              key={index}
              className={`${styles.dot} ${
                currentIndex === index ? styles.active : ""
              }`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageSliderVolunteer;
