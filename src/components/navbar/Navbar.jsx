import React, { useEffect, useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { IoIosHeartEmpty } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { BsCart3 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

import styles from "./navbar.module.css";

import Dropdown from "../dropdown/Dropdown";
import search from "../../assets/search.svg";
import { useSelector } from "react-redux";
import { auth } from "../../firebase";
import useAuth from "../../hooks/useAuth";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const loaction = useLocation();
  const [cartLength, setCartLength] = useState(0);
  const cart = useSelector((state) => state.cart);
  const { handleSignOut } = useAuth();
  // console.log(user)

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartLength(storedCart.length);
    // console.log(storedCart.length);
  }, [cart]);

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
              {!auth.currentUser ? (
                <Link to={"/signUp"}>
                  <p
                    className={
                      loaction.pathname === "/signUp" ? styles.navActive : ""
                    }
                  >
                    Sign Up
                  </p>
                </Link>
              ) : (
                <p
                  className={
                    loaction.pathname === "/signUp" ? styles.navActive : ""
                  }
                  onClick={handleSignOut}
                >
                  {auth.currentUser.displayName}
                </p>
              )}
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
                <div className={styles.navIcons_cart}>
                  <BsCart3 style={{ width: "24px", height: "24px" }} />
                  <div className={styles.navIcons_cart_count}>{cartLength}</div>
                </div>
              </Link>
              <Link to={"/account"}>
                <VscAccount style={{ width: "24px", height: "24px" }} />
              </Link>
            </div>
          </div>
          <div className={styles.hamburgerIcon}>
            <Hamburger toggled={isOpen} toggle={setOpen} />
            <Drawer
              className={styles.navDrawer}
              anchor="right"
              open={isOpen}
              onClose={() => setOpen(false)}
            >
              <List className={styles.drawerList}>
                {auth.currentUser && (
                  <ListItem button onClick={() => setOpen(false)}>
                    <ListItemText
                      disableTypography
                      primary={`Hello ${auth.currentUser.displayName} !`}
                      className={styles.drawer_listItem_greet}
                    />
                  </ListItem>
                )}

                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/">
                    <ListItemText
                      disableTypography
                      primary="Home"
                      className={styles.drawer_listItem}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/about">
                    <ListItemText
                      disableTypography
                      primary="About"
                      className={styles.drawer_listItem}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/contact">
                    <ListItemText
                      primary="Contact"
                      disableTypography
                      className={styles.drawer_listItem}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/wishlist">
                    <ListItemText
                      primary="Wishlist"
                      disableTypography
                      className={styles.drawer_listItem}
                    />
                  </Link>
                </ListItem>
                <ListItem button onClick={() => setOpen(false)}>
                  <Link to="/cart">
                    <ListItemText
                      primary="Cart"
                      disableTypography
                      className={styles.drawer_listItem}
                    />
                  </Link>
                </ListItem>
                {!auth.currentUser && (
                  <ListItem button onClick={() => setOpen(false)}>
                    <Link to="/signUp">
                      <ListItemText
                        disableTypography
                        primary="Sign Up"
                        className={styles.drawer_listItem}
                      />
                    </Link>
                  </ListItem>
                )}
                {auth.currentUser && (
                  <ListItem
                    button
                    onClick={() => {
                      handleSignOut();
                      setOpen(false);
                    }}
                  >
                    <ListItemText
                      disableTypography
                      primary="Sign Out"
                      className={styles.drawer_listItem}
                    />
                  </ListItem>
                )}
              </List>
            </Drawer>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
