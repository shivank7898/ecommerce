import React from "react";
import styles from "./footer.module.css";
import send from "../../assets/send.svg";
import qr from "./images/qr.png";
import play from "./images/playStore.png";
import app from "./images/appstore.png";
import fb from "./images/fb.png";
import X from "./images/X.png";
import insta from "./images/insta.png";
import link from "./images/Link.png";

const Footer = () => {
  return (
    <div className={styles.footMain}>
      <div className={styles.footChild1}>
        <div className={styles.footCols}>
          <div className={styles.footLogoCol}>
            <div className={styles.navLogo}>Exclusive</div>
            <div className={styles.footCol}>
              <div className={styles.footColHead}>Subscribe</div>
              <div className={styles.footColCntnt}>
                <p>Get 10% off your first order</p>
                <div className={styles.footInput}>
                  <input type="text" placeholder="Enter your email" />
                  <div className={styles.inputSend}>
                    <img src={send} alt="send" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.footCol}>
            <div className={styles.footColHead}>Support</div>
            <div className={styles.footColCntnt}>
              <p>
                111 Bijoy sarani, Dhaka,
                <br /> DH 1515, Bangladesh.
              </p>
              <p>exclusive@gmail.com</p>
              <p>+88015-88888-9999</p>
            </div>
          </div>
          <div className={styles.footCol}>
            <div className={styles.footColHead}>Account</div>
            <div className={styles.footColCntnt}>
              <p>My Account</p>
              <p>Login / Register</p>
              <p>Cart</p>
              <p>Wishlist</p>
              <p>Shop</p>
            </div>
          </div>
          <div className={styles.footCol}>
            <div className={styles.footColHead}>Quick Link</div>
            <div className={styles.footColCntnt}>
              <p>Privacy Policy</p>
              <p>Terms Of Use</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
          </div>
          <div className={styles.footCol}>
            <div className={styles.footColHead}>Download App</div>
            <div className={styles.footColCntnt}>
              <div className={styles.footQr}>
                <div>
                  <div className={styles.footQrText}>
                    Save $3 with App New User Only
                  </div>
                  <div className={styles.footQrImg}>
                    <div className={styles.qrimg}>
                      <img src={qr} alt="QrCode" />
                    </div>
                    <div className={styles.storeimg}>
                      <img src={play} alt="playStore" />
                      <img src={app} alt="appStore" />
                    </div>
                  </div>
                </div>
                <div className={styles.footSocials}>
                  <img src={fb} alt="" />
                  <img src={X} alt="" />
                  <img src={insta} alt="" />
                  <img src={link} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footChild2}>
        © Copyright Rimel 2022. All right reserved
      </div>
    </div>
  );
};

export default Footer;
