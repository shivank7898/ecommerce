import React from "react";
import { Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Carasoul = ({
  children,
  isBanner,
  slidesPerView,
  spaceBetween,
  isNavigation,
  prev,
  next,
  top,
  right,
  bottom,
  breakpoint,
}) => {
  // console.log(prev, next);
  return (
    <div
      className="swiper-container"
      style={{
        width: "100%",
        position: "relative",
      }}
    >
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={spaceBetween}
        pagination={isBanner && true}
        navigation={
          isNavigation && {
            nextEl: `.${next}`,
            prevEl: `.${prev}`,
          }
        }
        // breakpoints={breakpoints}
        breakpoints={breakpoint ? breakpoint : undefined}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        style={{
          "--swiper-pagination-bottom": bottom,
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {children}
      </Swiper>

      {isNavigation && (
        <div
          className="custom-navigation"
          style={{
            display: "flex",
            position: "absolute",
            top: top,
            right: right,
            gap: "8px",
            // zIndex: 12, // Uncomment if you need zIndex
          }}
        >
          <div
            className={prev}
            style={{
              // width: "16px",
              // height: "14px",
              backgroundColor: "#F5F5F5",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaArrowLeft
              style={{
                width: "16px",
                height: "14px",
              }}
            />
          </div>
          <div
            className={next}
            style={{
              // width: "16px",
              // height: "14px",
              backgroundColor: "#F5F5F5",
              width: "46px",
              height: "46px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FaArrowRight
              style={{
                width: "16px",
                height: "14px",
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Carasoul;
