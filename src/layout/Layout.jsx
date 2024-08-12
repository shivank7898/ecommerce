import React, { useEffect, useState } from "react";
import styles from "./layout.module.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import loader from "../Animation - 1723303295037.json";
import Lottie from "lottie-react";
import { useSelector } from "react-redux";

const Layout = ({ children }) => {
  const [load, setLoad] = useState(true);

  const { loading } = useSelector((state) => state.product.products);
  const { loading: catLoading } = useSelector((state) => state.category);
  const { loading: detailsLoading } = useSelector(
    (state) => state.product.productDetails
  );

  useEffect(() => {
    // console.log({ loading, catLoading, detailsLoading });
    if (!loading && !catLoading && !detailsLoading) {
      setLoad(false);
    }
  }, [loading, catLoading, detailsLoading]);

  return (
    <>
      <Navbar />

      {!load ? (
        <main>{children}</main>
      ) : (
        <main className={styles.loader_main}>
          <Lottie animationData={loader} className={styles.loader} />
        </main>
      )}

      <Footer />
    </>
  );
};

export default Layout;
