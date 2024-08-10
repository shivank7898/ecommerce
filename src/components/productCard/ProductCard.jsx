import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import styles from "./productCard.module.css";
import { Link } from "react-router-dom";

const trimTitle = (title) => {
  const trimmedTitle = title?.slice(0, 20);

  return trimmedTitle?.length < title?.length
    ? `${trimmedTitle}...`
    : trimmedTitle;
};

const ProductCard = ({ isWish = false, img, title, rating, price, id }) => {
  const [fill, setFill] = useState(true);
  const maxRating = 5;

  const trimmedTitle = trimTitle(title);

  const createStarRating = () => {
    const stars = [];

    for (let i = 1; i <= maxRating; i++) {
      // Check if the current index is within the rating
      const isFilled = i <= rating;

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

  return (
    <div className={styles.PrCard_main}>
      <div className={styles.PrCard_img}>
        <img src={img} alt="productImg" />
        <div className={styles.PrCard_Cartbtn}>Add To Cart</div>
        <div className={styles.PrCard_icons}>
          {!isWish ? (
            <>
              <div className={styles.PrCard_icon}>
                {fill ? (
                  <IoIosHeartEmpty
                    color="#000"
                    style={{ width: "24px", height: "24px" }}
                    onClick={() => {
                      setFill(!fill);
                    }}
                  />
                ) : (
                  <IoIosHeart
                    color="#db4444"
                    style={{ width: "24px", height: "24px" }}
                    onClick={() => {
                      setFill(!fill);
                    }}
                  />
                )}
              </div>
              <div className={styles.PrCard_icon}>
                <IoEyeOutline
                  color="#000"
                  style={{ width: "24px", height: "24px" }}
                />
              </div>
            </>
          ) : (
            <div className={styles.PrCard_icon}>
              <RiDeleteBin6Line
                color="#000"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          )}
        </div>
      </div>
      <Link to={`/product/${id}`}>
        <div className={styles.PrCard_content}>
          <p className={styles.PrCard_title}>{trimmedTitle}</p>
          <div className={styles.PrCard_price}>
            <p className={styles.PrCard_discount}>
              ${price} <span className={styles.PrCard_Mrp}>${price + 100}</span>
            </p>
          </div>
          {!isWish && (
            <div className={styles.PrCard_rating}>
              <div className={styles.PrCard_ratingStar}>
                {createStarRating()}
              </div>
              <p className={styles.PrCard_ratingCount}>{rating?.count}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
