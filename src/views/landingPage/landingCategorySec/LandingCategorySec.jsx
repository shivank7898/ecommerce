import styles from "./landingCategorySec.module.css";
import SectionHead from "../../../components/sectionHead/SectionHead";
import Carasoul from "../../../components/carasoul/Carasoul";
import { SwiperSlide } from "swiper/react";
import { CiCamera } from "react-icons/ci";
import { useSelector } from "react-redux";

const LandingCategorySec = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const { data } = useSelector((state) => state.category);

  const breakpoint = {
    320: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  };

  const duplicatedData = data && [...data, ...data, ...data];
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
            breakpoint={breakpoint}
            isNavigation={true}
            slidesPerView={6}
            spaceBetween="30px"
            next={styles.swiper_next}
            prev={styles.swiper_prev}
            top="-105px"
            right="0px"
          >
            {duplicatedData?.map((item) => (
              <SwiperSlide key={item?.id}>
                <div className={styles.LcSec_carasoul_card}>
                  <CiCamera style={{ width: "56px", height: "56px" }} />

                  <div
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "block",
                      width: "100%",
                    }}
                  >
                    {item || "N.A"}
                  </div>
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
