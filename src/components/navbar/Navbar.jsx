import React from "react";
import styles from "./navbar.module.css";
import Dropdown from "../dropdown/Dropdown";
import { IoIosHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import search from "../../assets/search.svg";
import { Link, useLocation } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";

const Navbar = () => {
  const loaction = useLocation();

  return (
    <main className={styles.main}>
      <div className={styles.navStrip}>
        <div className={styles.navStripText}>
          <div className={styles.stripText}>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <span>ShopNow</span>
          </div>
          <div className={styles.stripDrpdwn}>
            <Dropdown arr={["Hindi", "Spanish", "French", "Mexican"]} />
          </div>
        </div>
      </div>
      <div className={styles.navMain}>
        <div className={styles.navChild}>
          <div className={styles.navLeft}>
            <Link to={"/"}>
              <div className={styles.navLogo}>Exclusive</div>
            </Link>
            <div className={styles.navLinks}>
              <Link to={"/"}>
                <p
                  className={loaction.pathname === "/" ? styles.navActive : ""}
                >
                  Home
                </p>
              </Link>
              <p
                className={
                  loaction.pathname === "/contact" ? styles.navActive : ""
                }
              >
                Contact
              </p>
              <Link to={"/about"}>
                <p
                  className={
                    loaction.pathname === "/about" ? styles.navActive : ""
                  }
                >
                  About
                </p>
              </Link>
              <Link to={"/signUp"}>
                <p
                  className={
                    loaction.pathname === "/signUp" ? styles.navActive : ""
                  }
                >
                  Sign Up
                </p>
              </Link>
            </div>
          </div>
          <div className={styles.navRight}>
            <div className={styles.searchbar}>
              <input type="text" placeholder="What are you looking for?" />
              <img src={search} alt="" />
            </div>
            <div className={styles.navIcons}>
              <Link to={"/wishlist"}>
                <IoIosHeartEmpty style={{ width: "24px", height: "24px" }} />
              </Link>
              <Link to={"/cart"}>
                <BsCart3 style={{ width: "24px", height: "24px" }} />
              </Link>
              <Link to={"/account"}>
                <VscAccount style={{ width: "24px", height: "24px" }} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
