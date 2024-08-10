import React from "react";
import SectionHead from "../../../components/sectionHead/SectionHead";
import ProductCard from "../../../components/productCard/ProductCard";
import Carasoul from "../../../components/carasoul/Carasoul";
import { SwiperSlide } from "swiper/react";
import styles from "./landingFlashSec.module.css";
import Button from "../../../components/button/Button";
import { useSelector } from "react-redux";
const LandingFlashSec = () => {
  const ar = [1, 2, 3, 4, 5, 5, 5, 5, 5];
  const { data, loading, err } = useSelector((state) => state.product.products);

  // console.log(data, "cfjfjfj", err);

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
                <div>
                  <ProductCard
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    rating={item.rating}
                    img={item.image}
                  />
                </div>
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
