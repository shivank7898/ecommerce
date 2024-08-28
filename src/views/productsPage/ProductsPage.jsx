import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import styles from "./productpage.module.css";

import ProductCard from "../../components/productCard/ProductCard";
import Breadcrumb from "../../components/breadcrumb/Breadcumb";
import { getProductsAction } from "../../redux/actions/action";

const ProductsPage = () => {
  const { data } = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  //   console.log(data)

  useEffect(() => {
    dispatch(getProductsAction());
  }, [dispatch]);

  return (
    <div className={styles.productPage_main}>
      <Breadcrumb />
      <div className={styles.productPage_child}>
        {data?.map((item) => (
          <div key={item?.id} className={styles.productPage_card}>
            <ProductCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
