import { useEffect } from "react";
import styles from "./productpage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/slices/productSlice";
import ProductCard from "../../components/productCard/ProductCard";
import Breadcrumb from "../../components/breadcrumb/Breadcumb";

const ProductsPage = () => {
  const { data } = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  //   console.log(data)

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={styles.productPage_main}>
      <Breadcrumb />
      <div className={styles.productPage_child}>
        {data?.map((item) => (
          <div key={item.id} className={styles.productPage_card}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
