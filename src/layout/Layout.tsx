import styles from "./layout.module.css";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CustomSnackbar from "../components/CustomSnackBar/CustomSnackbar";
import React from "react";

const Layout = ({ children }: {children: React.ReactNode}) => {
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
