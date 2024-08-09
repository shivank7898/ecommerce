import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Button from "../../../components/button/Button";
import ProductCard from "../../../components/productCard/ProductCard";
import SectionHead from "../../../components/sectionHead/SectionHead";
import styles from "./landingExploreSec.module.css";
const LandingExploreSec = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div className={styles.LESec_main}>
      <div className={styles.LESec_child}>
        <div className={styles.LESec_sectionHead}>
          <SectionHead
            small="Our Products"
            big="Explore Our Products"
            istimer={false}
          />
          <div className={styles.LESec_custom_navigation}>
            <div className={styles.LESec_custom_navigation_prev}>
              <FaArrowLeft style={{ width: "16px", height: "14px" }} />
            </div>
            <div className={styles.LESec_custom_navigation_next}>
              <FaArrowRight style={{ width: "16px", height: "14px" }} />
            </div>
          </div>
        </div>
        <div className={styles.LESec_productCards}>
          <div className={styles.LESec_productCards_child}>
            {arr.map(() => (
              <>
                <ProductCard />
              </>
            ))}
          </div>
          <div className={styles.LESec_productCards_child}>
            {arr.map(() => (
              <>
                <ProductCard />
              </>
            ))}
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
          <Button text="View All Products" />
        </div>
      </div>
    </div>
  );
};

export default LandingExploreSec;
