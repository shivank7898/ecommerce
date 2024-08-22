import { useSelector } from "react-redux";
import Button from "../../../components/button/Button";
import ProductCard from "../../../components/productCard/ProductCard";
import SectionHead from "../../../components/sectionHead/SectionHead";
import styles from "./landingSellingSec.module.css";
import { Link } from "react-router-dom";
const LandingSellingSec = () => {
  const { data } = useSelector((state) => state.product.products);
  // console.log(data)
  return (
    <div className={styles.LSSec_main}>
      <div className={styles.LSSec_child}>
        <div className={styles.LSSec_sectionHead}>
          <SectionHead
            small="This month"
            big="Best Selling Products"
            istimer={false}
          />
          <Link to={"/product"}>
            <Button text="View all" />
          </Link>
        </div>
        <div className={styles.LSSec_productCards}>
          {data?.slice(11, 15).map((item) => (
            <ProductCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingSellingSec;
