import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import ProductCard from "../../components/productCard/ProductCard";
import SectionHead from "../../components/sectionHead/SectionHead";
import styles from "./wishlist.module.css";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productSlice";
import useAddToCartAndWish from "../../hooks/useAddToCartAndWish";
import Breadcrumb from "../../components/breadcrumb/Breadcumb";

const WishList = () => {
  const { data } = useSelector((state) => state.product.products);
  const wish = useSelector((state) => state.wish);
  // console.log(wish)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <div className={styles.wishList_main}>
      <Breadcrumb className={styles.breadcrumb_wish} />
      <div className={styles.wishList_child}>
        <div className={styles.wishList_list}>
          <div className={styles.wishList_list_head}>
            <div className={styles.wishList_list_text}>Wishlist (4)</div>
            <Button
              text="Move All To Bag"
              backgroundColor="transparent"
              color="#000"
              border="1px solid #00000080"
            />
          </div>
          <div className={styles.wishList_list_cards}>
            {wish.items.items?.map((item) => (
              <ProductCard isWish={true} item={item?.product} />
            ))}
          </div>
        </div>
        <div className={styles.wishList_suggestion}>
          <div className={styles.wishList_list_head}>
            <SectionHead small={"Just For You"} color={"#000"} />
            <Button
              text="See All"
              backgroundColor="transparent"
              color="#000"
              border="1px solid #00000080"
            />
          </div>
          <div className={styles.wishList_list_cards}>
            {data?.slice(11, 15).map((item) => (
              <ProductCard item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
