import styles from "./landingCategorySec.module.css";
import SectionHead from "../../../components/sectionHead/SectionHead";
import Carasoul from "../../../components/carasoul/Carasoul";
import { SwiperSlide } from "swiper/react";
import { CiCamera } from "react-icons/ci";

const LandingCategorySec = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className={styles.LcSec_main}>
      <div className={styles.LcSec_child}>
        <div className={styles.LcSec_sectionHead}>
          <SectionHead
            istimer={false}
            small="Categories"
            big="Browse By Category"
          />
        </div>
        <div className={styles.LcSec_carasoul}>
          <Carasoul
            isNavigation={true}
            slidesPerView={6}
            spaceBetween="30px"
            next="swiper-next"
            prev="swiper-prev"
            top="-105px"
            right="0px"
          >
            {arr.map((item) => (
              <SwiperSlide>
                <div className={styles.LcSec_carasoul_card}>
                  <CiCamera style={{ width: "56px", height: "56px" }} />

                  <div>Camera</div>
                </div>
              </SwiperSlide>
            ))}
          </Carasoul>
        </div>
        <div className={styles.LfSec_divider}></div>
      </div>
    </div>
  );
};

export default LandingCategorySec;
