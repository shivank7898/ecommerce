import React, { useState } from "react";
import styles from "./cart.module.css";

import Button from "../../components/button/Button";
import ProductRow from "../../components/productRow/ProductRow";
import img from "../../assets/card.png";

const Cart = () => {
  // Dummy products data
  const products = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      imageUrl: img,
    },
    {
      id: 2,
      name: "HI Gamepad",
      price: 550,
      imageUrl: img,
    },
  ];

  const [quantities, setQuantities] = useState(() =>
    products.reduce((acc, product) => {
      acc[product.id] = 1; // Set initial quantity to 1
      return acc;
    }, {})
  );

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const getTotal = () => {
    return products.reduce((total, product) => {
      return total + product.price * (quantities[product.id] || 1);
    }, 0);
  };

  return (
    <div className={styles.cart_main}>
      <div className={styles.cart_child}>
        <div className={styles.cart_products}>
          <div className={styles.cart_header}>
            <div className={styles.header_product}>Product</div>
            <div className={styles.header_price}>Price</div>
            <div className={styles.header_quantity}>Quantity</div>
            <div className={styles.header_subtotal}>Subtotal</div>
          </div>
          {products.map((product) => (
            <ProductRow
              key={product.id}
              product={product}
              quantity={quantities[product.id]}
              onQuantityChange={handleQuantityChange}
            />
          ))}
          <div className={styles.cart_buttons}>
            <Button
              text={"Return To Shop"}
              backgroundColor="transparent"
              color="#000"
              border="1px solid #00000080"
            />
            <Button
              text={"Update Cart"}
              backgroundColor="transparent"
              color="#000"
              border="1px solid #00000080"
            />
          </div>
        </div>
        <div className={styles.cart_subtotal}>
          <div className={styles.cart_coupon}>
            <input type="text" placeholder="Coupon Code" />
            <Button text={"Apply Coupon"} />
          </div>
          <div className={styles.cart_totalCard}>
            <div className={styles.cart_totalCard_head}>Cart Total</div>
            <div className={styles.cart_totalCard_subHead}>
              Subtotal: <span>${getTotal()}</span>
            </div>
            <div className={styles.cart_totalCard_divider}></div>
            <div className={styles.cart_totalCard_subHead}>
              Shipping: <span>Free</span>{" "}
            </div>
            <div className={styles.cart_totalCard_divider}></div>
            <div className={styles.cart_totalCard_subHead}>
              Total: <span> ${getTotal()}</span>{" "}
            </div>
            <Button text={"Proceed to checkout"} maxWidth="100%" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
