import { useState } from "react";
import styles from "./SponsorSlider.module.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ITEMS_PER_SLIDE = 3; // Number of items to display per slide

const SponsorSlider = ({ sponsors }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Chunk sponsors into slides
  const chunkedSponsors = [];
  for (let i = 0; i < sponsors.length; i += ITEMS_PER_SLIDE) {
    chunkedSponsors.push(sponsors.slice(i, i + ITEMS_PER_SLIDE));
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % chunkedSponsors.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + chunkedSponsors.length) % chunkedSponsors.length
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
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {chunkedSponsors.map((chunk, index) => (
            <div key={index} className={styles.slide}>
              {chunk.map((sponsor, idx) => (
                <div key={idx} className={styles.slideItem}>
                  <img src={sponsor.logo} style={{objectFit:"contain"}} alt={`Sponsor ${idx}`} />
                </div>
              ))}
            </div>
          ))}
        </div>
        <button className={styles.leftArrow} onClick={prevSlide}>
          <FaChevronLeft />
        </button>
        <button className={styles.rightArrow} onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>
      <div className={styles.dots}>
        {chunkedSponsors.map((_, index) => (
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

export default SponsorSlider;
