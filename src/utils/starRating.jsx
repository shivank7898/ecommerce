import styles from "../components/productCard/productCard.module.css";

export const createStarRating = (rating) => {
  const maxRating = 5;
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    // Check if the current index is within the rating
    const isFilled = i <= rating?.rate;
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
