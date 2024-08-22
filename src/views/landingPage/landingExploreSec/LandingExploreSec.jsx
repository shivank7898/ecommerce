import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../../components/button/Button";
import ProductCard from "../../../components/productCard/ProductCard";
import SectionHead from "../../../components/sectionHead/SectionHead";
import styles from "./landingExploreSec.module.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const LandingExploreSec = () => {
  const { data } = useSelector((state) => state.product.products);
  return (
    <div className={styles.LESec_main}>
      <div className={styles.LESec_child}>
        <div className={styles.LESec_sectionHead}>
          <SectionHead
            small="Our Products"
            big="Explore Our Products"
            istimer={false}
          />
          {/* <div className={styles.LESec_custom_navigation}>
            <div className={styles.LESec_custom_navigation_prev}>
              <FaArrowLeft style={{ width: "16px", height: "14px" }} />
            </div>
            <div className={styles.LESec_custom_navigation_next}>
              <FaArrowRight style={{ width: "16px", height: "14px" }} />
            </div>
          </div> */}
        </div>
        <div className={styles.LESec_productCards}>
          <div className={styles.LESec_productCards_child}>
            {data?.slice(0, 4).map((item) => (
              <>
                <ProductCard item={item} key={item.id} />
              </>
            ))}
          </div>
          <div className={styles.LESec_productCards_child}>
            {data?.slice(10, 14).map((item) => (
              <>
                <ProductCard item={item} key={item.id} />
              </>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={"/product"}>
            <Button text="View All Products" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingExploreSec;
