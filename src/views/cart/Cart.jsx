import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import styles from "./cart.module.css";

import Button from "../../components/button/Button";
import ProductRow from "../../components/productRow/ProductRow";
import Breadcrumb from "../../components/breadcrumb/Breadcumb";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [cartItem, setCartItem] = useState(cart.items);

  const getTotal = () => {
    return cartItem.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };

  return (
    <div className={styles.cart_main}>
      <Breadcrumb className={styles.breadcrumb_cart} />
      <div className={styles.cart_child}>
        <div className={styles.cart_products}>
          <div className={styles.cart_header}>
            <div className={styles.header_product}>Product</div>
            <div className={styles.header_price}>Price</div>
            <div className={styles.header_quantity}>Quantity</div>
            <div className={styles.header_subtotal}>Subtotal</div>
          </div>
          {cart.items.map((item) => (
            <ProductRow key={item.product.id} item={item} id={item.id} />
          ))}
          <div className={styles.cart_buttons}>
            <Link to={"/product"}>
              <Button
                text={"Return To Shop"}
                backgroundColor="transparent"
                color="#000"
                border="1px solid #00000080"
              />
            </Link>
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
