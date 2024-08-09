import React from "react";
import styles from "./landingbannersec.module.css";
import { IoIosArrowForward } from "react-icons/io";
import banner from "../../../assets/banner.png";
import Carasoul from "../../../components/carasoul/Carasoul";
import { SwiperSlide } from "swiper/react";
const LandingBannerSec = () => {
  const data = [1, 2, 3, 4];

  return (
    <div className={styles.LbSec}>
      <div className={styles.LbSec_menu}>
        <div className={styles.LbSec_menuChild}>
          <div className={styles.LbSec_menuText}>
            <div>Woman’s Fashion</div> <IoIosArrowForward />
          </div>
          <div className={styles.LbSec_menuText}>
            <div>Men’s Fashion</div>
            <IoIosArrowForward />
          </div>
          <div className={styles.LbSec_menuText}>Electronics</div>
          <div className={styles.LbSec_menuText}>Home & Lifestyle</div>
          <div className={styles.LbSec_menuText}>Medicine</div>
          <div className={styles.LbSec_menuText}>Sports & Outdoor</div>
          <div className={styles.LbSec_menuText}>Baby’s & Toys</div>
          <div className={styles.LbSec_menuText}>Groceries & Pets</div>
          <div className={styles.LbSec_menuText}>Health & Beauty</div>
        </div>
      </div>
      <div className={styles.LbSec_banner}>
        <Carasoul isBanner={true}  >
          {data.map((item) => (
            <SwiperSlide>
              <img
                src={banner}
                alt="ffff"
                style={{ width: "100%", objectFit: "contain" }}
              />
            </SwiperSlide>
          ))}
        </Carasoul>
      </div>
    </div>
  );
};

export default LandingBannerSec;
