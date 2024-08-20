import React from "react";
import { Snackbar, Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../../redux/slices/cartSlice";
import { clearWishNotification } from "../../redux/slices/wishSlice";

import styles from "./customSnackBar.module.css";

const CustomSnackbar = () => {
  const dispatch = useDispatch();
  const cartNotification = useSelector((state) => state.cart.notification);
  const wishNotification = useSelector((state) => state.wish.notification);

  const notification = cartNotification || wishNotification;

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(clearNotification());
    dispatch(clearWishNotification());
  };

  

  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(notification)}
      autoHideDuration={2000}
      onClose={handleClose}
      className={styles.snackbarPosition}
    >
      <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: "100%" }}>
        {notification}
      </Alert>
    </Snackbar>
  );
};

export default CustomSnackbar;
