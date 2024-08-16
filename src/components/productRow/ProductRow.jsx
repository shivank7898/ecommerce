import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { IoCloseCircle } from "react-icons/io5";

import styles from "./productRow.module.css";

import useAddToCartAndWish from "../../hooks/useAddToCartAndWish";

const ProductRow = ({ item, id }) => {
  const { handleAddToCart, handleRemoveFromCart } = useAddToCartAndWish();
  // console.log(item.product.id, "product");

  const handleQuantity = (action) => {
    if (action === "increment") {
      handleAddToCart({ product: item.product, quantity: 1 });
    }
    if (action === "decrement") {
      handleAddToCart({ product: item.product, quantity: -1 });
    }
  };

  return (
    <div className={styles.productRow}>
      <div className={styles.productInfo}>
        <img src={item.product.image} className={styles.productImage} />
        <IoCloseCircle
          className={styles.productInfo_close}
          onClick={() => handleRemoveFromCart({ id: item.product.id })}
        />
        <span>{item.product.name}</span>
      </div>
      <div className={styles.productPrice}>${item.product.price}</div>
      <div className={styles.quantityInput}>
        <div className={styles.quantityInput_child}>
          <span className={styles.quantityDisplay}>{item.quantity}</span>
          <div className={styles.quantityInput_arrow}>
            <IoIosArrowUp onClick={() => handleQuantity("increment")} />

            <IoIosArrowDown onClick={() => handleQuantity("decrement")} />
          </div>
        </div>
      </div>
      <div className={styles.productSubtotal}>
        ${item.product.price * item.quantity}
      </div>
    </div>
  );
};

export default ProductRow;
