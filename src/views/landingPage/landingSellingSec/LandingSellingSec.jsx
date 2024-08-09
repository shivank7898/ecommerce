import Button from "../../../components/button/Button";
import ProductCard from "../../../components/productCard/ProductCard";
import SectionHead from "../../../components/sectionHead/SectionHead";
import styles from "./landingSellingSec.module.css";
const LandingSellingSec = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={styles.LSSec_main}>
      <div className={styles.LSSec_child}>
        <div className={styles.LSSec_sectionHead}>
          <SectionHead
            small="This month"
            big="Best Selling Products"
            istimer={false}
          />
          <Button text="View all" />
        </div>
        <div className={styles.LSSec_productCards}>
          {arr.map(() => (
            <ProductCard />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSellingSec;
