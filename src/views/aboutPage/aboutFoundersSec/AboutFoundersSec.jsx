import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

import styles from "./aboutFoundersSec.module.css";

import img from "../../../assets/founder.png";
import Carasoul from "../../../components/carasoul/Carasoul";
import { SwiperSlide } from "swiper/react";

const AboutFoundersSec = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  return (
    <div className={styles.aboutFouSec_main}>
      <Carasoul
        spaceBetween={"30"}
        slidesPerView={"3"}
        isBanner={true}
        bottom={"-40px"}
      >
        {arr.map((index) => (
          <SwiperSlide key={index}>
            <div className={styles.aboutFouSec_sliderCard}>
              <div className={styles.aboutFouSec_sliderCard_img}>
                <img src={img} alt="" />
              </div>
              <div className={styles.aboutFouSec_sliderCard_head}>
                Tom Cruise
              </div>
              <div className={styles.aboutFouSec_sliderCard_desc}>
                Founder & Chairman
              </div>
              <div className={styles.aboutFouSec_sliderCard_icons}>
                <CiTwitter style={{ width: "24px", height: "24px" }} />
                <FaInstagram style={{ width: "24px", height: "24px" }} />
                <TiSocialLinkedin style={{ width: "24px", height: "24px" }} />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Carasoul>
    </div>
  );
};

export default AboutFoundersSec;
