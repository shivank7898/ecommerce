import styles from "./layout.module.css";

import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import CustomSnackbar from "../components/CustomSnackBar/CustomSnackbar";

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
