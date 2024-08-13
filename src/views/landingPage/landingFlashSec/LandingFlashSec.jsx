import { SwiperSlide } from "swiper/react";
import { useSelector } from "react-redux";

import styles from "./landingFlashSec.module.css";

import SectionHead from "../../../components/sectionHead/SectionHead";
import ProductCard from "../../../components/productCard/ProductCard";
import Carasoul from "../../../components/carasoul/Carasoul";
import Button from "../../../components/button/Button";

const LandingFlashSec = () => {
  const ar = [1, 2, 3, 4, 5, 5, 5, 5, 5];
  const { data } = useSelector((state) => state.product.products);

  return (
    <div className={styles.LfSec_main}>
      <div className={styles.LfSec_child}>
        <div className={styles.LfSec_sectionHead}>
          <SectionHead
            duration={10}
            unit="days"
            small="Today's"
            big="Flash Sales"
          />
        </div>
        <div className={styles.LfSec_carasoul}>
          <Carasoul
            slidesPerView={4.5}
            spaceBetween="30px"
            isNavigation={true}
            next="swiper2-next"
            prev="swiper2-prev"
            top="-85px"
            right="138px"
          >
            {data?.map((item) => (
              <SwiperSlide>
                <ProductCard item={item} />
              </SwiperSlide>
            ))}
          </Carasoul>
        </div>
        <div className={styles.LfSec_button}>
          <Button text="View All Products" />
        </div>
        <div className={styles.LfSec_divider}></div>
      </div>
    </div>
  );
};

export default LandingFlashSec;
