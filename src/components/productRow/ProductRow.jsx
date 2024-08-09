// src/components/ProductRow/ProductRow.js

import React from "react";
import styles from "./productRow.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const ProductRow = ({ product, quantity, onQuantityChange }) => {
    const incrementQuantity = () => {
      onQuantityChange(product.id, quantity + 1);
    };

    const decrementQuantity = () => {
      if (quantity > 1) {
        onQuantityChange(product.id, quantity - 1);
      }
    };
  return (
    <div className={styles.productRow}>
      <div className={styles.productInfo}>
        <img src={product.imageUrl} className={styles.productImage} />
        <span>{product.name}</span>
      </div>
      <div className={styles.productPrice}>${product.price}</div>
      <div className={styles.quantityInput}>
        <div className={styles.quantityInput_child}>
          <span className={styles.quantityDisplay}>{quantity}</span>
          <div className={styles.quantityInput_arrow}>
            <IoIosArrowUp onClick={incrementQuantity} />

            <IoIosArrowDown onClick={decrementQuantity} />
          </div>
        </div>
      </div>
      <div className={styles.productSubtotal}>${product.price * quantity}</div>
    </div>
  );
};

export default ProductRow;
