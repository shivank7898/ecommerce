import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

import styles from "./productCard.module.css";

import useAddToCartAndWish from "../../hooks/useAddToCartAndWish";
// import {create}
import { useDispatch, useSelector } from "react-redux";
import { createStarRating } from "../../utils/starRating";

const trimTitle = (title) => {
  const trimmedTitle = title?.slice(0, 20);

  return trimmedTitle?.length < title?.length
    ? `${trimmedTitle}...`
    : trimmedTitle;
};

const ProductCard = ({ isWish = false, item }) => {
  // console.log(item)
  const { handleAddToCart, handleAddToWishlist, handleRemoveWishlist } =
    useAddToCartAndWish();
  const wish = useSelector((state) => state.wish);
  // console.log(wish)
  const [fill, setFill] = useState(false);
  const trimmedTitle = trimTitle(item?.title);

  useEffect(() => {
    const existingProduct = wish.find(
      (wishItem) => wishItem.product.id === item.id
    );
    console.log(existingProduct, "wishitem");
    setFill(!!existingProduct);
  }, [wish, item]);

  return (
    <div className={styles.PrCard_main}>
      <div className={styles.PrCard_img}>
        <img src={item?.image} alt="productImg" />
        <div
          className={styles.PrCard_Cartbtn}
          onClick={() => handleAddToCart({ product: item, quantity: 1 })}
        >
          Add To Cart
        </div>
        <div className={styles.PrCard_icons}>
          {!isWish ? (
            <>
              <div className={styles.PrCard_icon}>
                {!fill ? (
                  <IoIosHeartEmpty
                    color="#000"
                    style={{ width: "24px", height: "24px" }}
                    onClick={() => {
                      handleAddToWishlist({ product: item });
                    }}
                  />
                ) : (
                  <IoIosHeart
                    color="#db4444"
                    style={{ width: "24px", height: "24px" }}
                    onClick={() => {
                      handleRemoveWishlist({ id: item.id });
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
                onClick={() => {
                  handleRemoveWishlist({ id: item.id });
                }}
                color="#000"
                style={{ width: "24px", height: "24px" }}
              />
            </div>
          )}
        </div>
      </div>
      <Link to={`/product/${item?.id}`}>
        <div className={styles.PrCard_content}>
          <p className={styles.PrCard_title}>{trimmedTitle}</p>
          <div className={styles.PrCard_price}>
            <p className={styles.PrCard_discount}>
              ${item?.price}{" "}
              <span className={styles.PrCard_Mrp}>${item?.price + 100}</span>
            </p>
          </div>
          {!isWish && (
            <div className={styles.PrCard_rating}>
              <div className={styles.PrCard_ratingStar}>
                {createStarRating(item?.rating)}
              </div>
              <p className={styles.PrCard_ratingCount}>{item?.rating?.count}</p>
            </div>
          )}
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
