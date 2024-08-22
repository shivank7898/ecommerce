import styles from "../components/productCard/productCard.module.css";

export const createStarRating = (rating) => {
  const maxRating = 5;
  const stars = [];

  const rate = rating?.rate || 0;

  for (let i = 1; i <= maxRating; i++) {
    // Check if the current index is within the rating
    const isFilled = i <= rate;
    stars.push(
      <p
        key={i}
        className={`${styles.star} ${
          isFilled ? styles.filledStar : styles.emptyStar
        }`}
      >
        {isFilled ? "★" : "☆"}
      </p>
    );
  }

  return stars;
};
