import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import styles from "./landingFlashSec.module.css";

import SectionHead from "../../../components/sectionHead/SectionHead";
import ProductCard from "../../../components/productCard/ProductCard";
import Carasoul from "../../../components/carasoul/Carasoul";
import Button from "../../../components/button/Button";
import { Link } from "react-router-dom";

const LandingFlashSec = () => {
  const ar = [1, 2, 3, 4, 5, 5, 5, 5, 5];
  const { data, err } = useSelector((state) => state.product.products);

  const breakpoint = {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    550: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 30,
    },
    1072: {
      slidesPerView: 3.7,
      spaceBetween: 30,
    },
    1138: {
      slidesPerView: 3.9,
      spaceBetween: 30,
    },
    1300: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
  };

  return (
    <div className={styles.LfSec_main}>
      <div className={styles.LfSec_child}>
        <div className={styles.LfSec_sectionHead}>
          <SectionHead
            istimer
            duration={10}
            unit="days"
            small="Today's"
            big="Flash Sales"
          />
        </div>
        {err ? (
          "Sorry Trouble Loading Products"
        ) : (
          <div className={styles.LfSec_carasoul}>
            <Carasoul
              breakpoint={breakpoint}
              isNavigation={true}
              next={styles.swiper2_next}
              prev={styles.swiper2_prev}
              top="-85px"
              right="138px"
            >
              {data?.map((item) => (
                <SwiperSlide key={item.id}>
                  <ProductCard item={item} />
                </SwiperSlide>
              ))}
            </Carasoul>
          </div>
        )}
        <div className={styles.LfSec_button}>
          <Link to={"/product"}>
            <Button text="View All Products" />
          </Link>
        </div>
        <div className={styles.LfSec_divider}></div>
      </div>
    </div>
  );
};

export default LandingFlashSec;
