import { IoIosHeartEmpty } from "react-icons/io";

import styles from "./productDetailPage.module.css";

import ProductGallery from "../../components/productGallery/ProductGallery";
import img from "../../assets/card.png";
import img2 from "../../assets/card2.png";
import img3 from "../../assets/card3.png";
import Button from "../../components/button/Button";

const ProductDetailPage = () => {
  const images = [img, img2, img2, img3];
  return (
    <div className={styles.productDetail_main}>
      <div className={styles.productDetail_child}>
        <div className={styles.productDetail_gallery}>
          <ProductGallery images={images} thumb={img3} />
        </div>
        <div className={styles.productDetail_details}>
          <div className={styles.productDetail_details_top}>
            <div className={styles.productDetail_details_head}>
              Havic HV G-92 Gamepad
            </div>
            <div className={styles.productDetail_details_rating}>
              ★★★★★ <span>(150 Reviews) |</span>
            </div>
            <div className={styles.productDetail_details_price}>$192.00</div>
            <div className={styles.productDetail_details_desc}>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal Pressure
              sensitive.
            </div>
          </div>
          <div className={styles.productDetail_details_divider}></div>
          <div className={styles.productDetail_details_btm}>
            <div className={styles.productDetail_details_color}>
              Colours:
              <div className={styles.productDetail_details_color_circle}></div>
              <div className={styles.productDetail_details_color_circle}></div>
            </div>
            <div className={styles.productDetail_details_size}>
              Size:
              <div className={styles.productDetail_details_size_button}>XS</div>
              <div className={styles.productDetail_details_size_button}>S</div>
              <div className={styles.productDetail_details_size_button}>M</div>
              <div className={styles.productDetail_details_size_button}>L</div>
              <div className={styles.productDetail_details_size_button}>XL</div>
            </div>
            <div className={styles.productDetail_details_button}>
              <div className={styles.productDetail_details_button_child1}>
                <div className={styles.productDetail_details_button_minus}>
                  -
                </div>
                <div className={styles.productDetail_details_button_number}>
                  2
                </div>
                <div className={styles.productDetail_details_button_plus}>
                  +
                </div>
              </div>
              <Button text={"Buy Now"} padding="10px 48px" />
              <div className={styles.productDetail_details_button_heart}>
                <IoIosHeartEmpty />
              </div>
            </div>
          </div>
          <div className={styles.productDetail_details_features}>
            <div className={styles.productDetail_details_features_top}>
              <div className={styles.productDetail_details_features_top_icon}>
                <img src="/assets/icons/delivery.svg" alt="Free Delivery" />
              </div>
              <div className={styles.productDetail_details_features_top_contet}>
                <div className={styles.productDetail_details_features_top_text}>
                  Free Delivery
                </div>
                <div className={styles.productDetail_details_features_top_info}>
                  Enter your postal code for Delivery Availability
                </div>
              </div>
            </div>
            <div className={styles.productDetail_details_features_btm}>
              <div className={styles.productDetail_details_features_btm_icon}>
                <img src="/assets/icons/return.svg" alt="Free Delivery" />
              </div>
              <div className={styles.productDetail_details_features_top_contet}>
                <div className={styles.productDetail_details_features_btm_text}>
                  Return Delivery
                </div>
                <div className={styles.productDetail_details_features_btm_info}>
                  Free 30 Days Delivery Returns. Details
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
