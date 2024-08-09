import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./views/landingPage/LandingPage";
import AboutPage from "./views/aboutPage/AboutPage";
import Layout from "./layout/Layout";
import SignUp from "./views/auth/SignUp";
import Login from "./views/auth/Login";
import WishList from "./views/wishList/WishList";
import Cart from "./views/cart/Cart";
import AccountPage from "./views/accountPage/AccountPage";
import ProductDetailPage from "./views/productDetailPage/ProductDetailPage";

function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/productDetail" element={<ProductDetailPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
