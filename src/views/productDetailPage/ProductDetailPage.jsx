import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { FiRefreshCcw } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";

import styles from "./productDetailPage.module.css";

import ProductGallery from "../../components/productGallery/ProductGallery";
import img2 from "../../assets/card2.png";
import img3 from "../../assets/card3.png";
import Button from "../../components/button/Button";
import SectionHead from "../../components/sectionHead/SectionHead";
import ProductCard from "../../components/productCard/ProductCard";
import useAddToCartAndWish from "../../hooks/useAddToCartAndWish";
import { createStarRating } from "../../utils/starRating";
import loader from "../../Animation - 1723303295037.json";
import Breadcrumb from "../../components/breadcrumb/Breadcumb";
import {
  getProductDetailsAction,
  getProductsAction,
} from "../../redux/actions/action";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [fill, setFill] = useState(false);
  const { loading } = useSelector((state) => state.product.products);
  const { loading: detailsLoading } = useSelector(
    (state) => state.product.productDetails
  );
  const { handleAddToCart, handleAddToWishlist, handleRemoveWishlist } =
    useAddToCartAndWish();
  const { data } = useSelector((state) => state.product.products);
  const wish = useSelector((state) => state.wish);
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data: product } = useSelector(
    (state) => state.product.productDetails
  );

  const images = [product?.image, img2, img2, img3];

  const handleQuantity = (action) => {
    if (action === "increment") {
      setQuantity(quantity + 1);
    }
    if (action === "decrement") {
      setQuantity(Math.max(quantity - 1, 0));
    }
  };

  useEffect(() => {
    const existingProduct = wish.items?.find(
      (wishItem) => wishItem.product.id === product?.id
    );

    setFill(!!existingProduct);
  }, [wish, product]);

  useEffect(() => {
    dispatch(getProductDetailsAction(id));
    dispatch(getProductsAction());
  }, [dispatch, id]);

  return (
    <>
      {!loading && !detailsLoading ? (
        <div className={styles.productDetail_main}>
          <Breadcrumb
            className={styles.breadcrumb_productDetails}
            prodcutdetails={true}
            productName={product?.title || "N.A"}
          />
          <div className={styles.productDetail_child}>
            <div className={styles.productDetail_gallery}>
              <ProductGallery images={images} thumb={product?.image || "N.A"} />
            </div>
            <div className={styles.productDetail_details}>
              <div className={styles.productDetail_details_top}>
                <div className={styles.productDetail_details_head}>
                  {product?.title}
                </div>
                <div className={styles.productDetail_details_rating}>
                  {createStarRating(product?.rating)}
                  <span>
                    ( {product?.rating.count || "N.A"} ) |
                    <span className={styles.details_rating_stock}>
                      In Stock
                    </span>
                  </span>
                </div>
                <div className={styles.productDetail_details_price}>
                  {" "}
                  ${product?.price || "N.A"}
                </div>
                <div className={styles.productDetail_details_desc}>
                  {product?.description || "N.A"}
                </div>
              </div>
              <div className={styles.productDetail_details_divider}></div>
              <div className={styles.productDetail_details_btm}>
                <div className={styles.productDetail_details_color}>
                  Colours:
                  <div
                    className={styles.productDetail_details_color_circle}
                  ></div>
                  <div
                    className={styles.productDetail_details_color_circle}
                  ></div>
                </div>
                <div className={styles.productDetail_details_size}>
                  Size:
                  <div className={styles.productDetail_details_size_button}>
                    XS
                  </div>
                  <div className={styles.productDetail_details_size_button}>
                    S
                  </div>
                  <div className={styles.productDetail_details_size_button}>
                    M
                  </div>
                  <div className={styles.productDetail_details_size_button}>
                    L
                  </div>
                  <div className={styles.productDetail_details_size_button}>
                    XL
                  </div>
                </div>
                <div className={styles.productDetail_details_button}>
                  <div className={styles.productDetail_details_button_child1}>
                    <div
                      className={styles.productDetail_details_button_minus}
                      onClick={() => {
                        handleQuantity("decrement");
                      }}
                    >
                      -
                    </div>
                    <div className={styles.productDetail_details_button_number}>
                      {quantity}
                    </div>
                    <div
                      className={styles.productDetail_details_button_plus}
                      onClick={() => {
                        handleQuantity("increment");
                      }}
                    >
                      +
                    </div>
                  </div>
                  <Button text={"Buy Now"} padding="10px 48px" />
                  <div className={styles.productDetail_details_button_heart}>
                    {!fill ? (
                      <IoIosHeartEmpty
                        color="#000"
                        onClick={() => {
                          handleAddToWishlist({ product: product });
                        }}
                      />
                    ) : (
                      <IoIosHeart
                        color="#db4444"
                        onClick={() => {
                          handleRemoveWishlist({ id: product.id });
                        }}
                      />
                    )}
                  </div>
                  <Button
                    text={"Add To Cart"}
                    padding="10px 48px"
                    onClick={() =>
                      handleAddToCart({ product: product, quantity: quantity })
                    }
                  />
                </div>
              </div>
              <div className={styles.productDetail_details_features}>
                <div className={styles.productDetail_details_features_top}>
                  <div
                    className={styles.productDetail_details_features_top_icon}
                  >
                    <TbTruckDelivery />
                  </div>
                  <div
                    className={
                      styles.productDetail_details_features_top_content
                    }
                  >
                    <div
                      className={styles.productDetail_details_features_top_text}
                    >
                      Free Delivery
                    </div>
                    <div
                      className={styles.productDetail_details_features_top_info}
                    >
                      Enter your postal code for Delivery Availability
                    </div>
                  </div>
                </div>
                <div className={styles.productDetail_details_features_btm}>
                  <div
                    className={styles.productDetail_details_features_btm_icon}
                  >
                    <FiRefreshCcw />
                  </div>
                  <div
                    className={
                      styles.productDetail_details_features_top_content
                    }
                  >
                    <div
                      className={styles.productDetail_details_features_btm_text}
                    >
                      Return Delivery
                    </div>
                    <div
                      className={styles.productDetail_details_features_btm_info}
                    >
                      Free 30 Days Delivery Returns. Details
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.productDetail_suggestion}>
            <div className={styles.productDetail_suggestion_head}>
              <SectionHead small={"Related Item"} />
            </div>
            <div className={styles.productDetail_suggestion_cards}>
              {data?.slice(0, 4).map((item) => (
                <ProductCard item={item} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <main className={styles.loader_main}>
          <Lottie
            animationData={loader}
            className={styles.loader}
            style={{ margin: "auto", width: "50vh", height: "100vh" }}
          />
        </main>
      )}
    </>
  );
};

export default ProductDetailPage;
