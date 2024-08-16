import React, { useEffect, useState } from "react";
import styles from "./layout.module.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import loader from "../Animation - 1723303295037.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";
import CustomSnackbar from "../components/CustomSnackbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <CustomSnackbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
