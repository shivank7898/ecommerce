import Button from "../../components/button/Button";
import ProductCard from "../../components/productCard/ProductCard";
import SectionHead from "../../components/sectionHead/SectionHead";
import styles from "./wishlist.module.css";

const WishList = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={styles.wishList_main}>
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
            {arr.map((item) => (
              <ProductCard isWish={true} />
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
            {arr.map((item) => (
              <ProductCard />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
