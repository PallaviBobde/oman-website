// components/FlipCard.js
import styles from "./FlipCard.module.css";

const FlipCard = ({
  frontText,
  frontSubheading,
  backTitle,
  backText,
  imageUrl,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardInner}>
        <div
          className={styles.cardFront}
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className={styles.cardText}>
            <h1 className="font-bold text-center">{frontText}</h1>
            <h2 className="text-xl text-center">{frontSubheading}</h2>
          </div>
        </div>
        <div className={styles.cardBack}>
          <div className={styles.cardText}>
            <h1 className="font-bold">{backTitle}</h1>
            <p className="text-xl"> {backText}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
