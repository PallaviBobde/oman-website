// components/ImageSlider.js
import { useState } from "react";
import styles from "./ImageSlider.module.css";
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ImageSlider = ({ images }) => {
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
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        <div
          className={styles.sliderInner}
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        >
          <button className={styles.leftArrow} onClick={prevSlide}>
            <FaChevronLeft />
          </button>
          <button className={styles.rightArrow} onClick={nextSlide}>
            <FaChevronRight />
          </button>
          <h1 className="text-4xl text-white font-bold w-1/2   pl-20  py-40 text-center">
            The world had 3 trillion trees. But do you know where they are?
          </h1>
        </div>
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
  );
};

export default ImageSlider;
