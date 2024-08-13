import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

import "./App.css";

import LandingPage from "./views/landingPage/LandingPage";
import AboutPage from "./views/aboutPage/AboutPage";
import Layout from "./layout/Layout";
import SignUp from "./views/auth/SignUp";
import Login from "./views/auth/Login";
import WishList from "./views/wishList/WishList";
import Cart from "./views/cart/Cart";
import AccountPage from "./views/accountPage/AccountPage";
import ProductDetailPage from "./views/productDetailPage/ProductDetailPage";
import ProductsPage from "./views/productsPage/ProductsPage";
import { setUser } from "./redux/slices/userSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // User is signed out or session has expired
        dispatch(setUser(null));
        localStorage.removeItem("user");
      }
    });

    return () => unsubscribe();
  }, []);
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
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/product" element={<ProductsPage />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
