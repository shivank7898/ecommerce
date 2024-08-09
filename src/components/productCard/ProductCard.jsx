import styles from "./productCard.module.css";
import img from "../../assets/card.png";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = ({ isWish = false }) => {
  const arr = [1, 2, 3, 4, 5];
  const [fill, setFill] = useState(true);

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
      <div className={styles.PrCard_content}>
        <p className={styles.PrCard_title}>HAVIT HV-G92 Gamepad</p>
        <div className={styles.PrCard_price}>
          <p className={styles.PrCard_discount}>
            $120 <span className={styles.PrCard_Mrp}>$160</span>
          </p>
        </div>
        { !isWish &&
        <div className={styles.PrCard_rating}>
          <div className={styles.PrCard_ratingStar}>
            {arr.map((item) => (
              <p>★</p>
            ))}
          </div>
          <p className={styles.PrCard_ratingCount}>(88)</p>
        </div>
          }
      </div>
    </div>
  );
};

export default ProductCard;
