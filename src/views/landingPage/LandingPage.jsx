import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Lottie from "lottie-react";

import styles from "./landingPage.module.css";

import LandingBannerSec from "./landingBannerSec/LandingBannerSec";
import LandingFlashSec from "./landingFlashSec/LandingFlashSec";
import LandingCategorySec from "./landingCategorySec/LandingCategorySec";
import LandingSellingSec from "./landingSellingSec/LandingSellingSec";
import LandingBanner2Sec from "./landingbanner2Sec/LandingBanner2Sec";
import LandingExploreSec from "./landingExploreSec/LandingExploreSec";
import LandingArrivalSec from "./landingArrivalSec/LandingArrivalSec";
import LandingSeciveSec from "./landingSeciveSec/LandingSeciveSec";
import loader from "../../Animation - 1723303295037.json";
import {
  getCategoryAction,
  getProductsAction,
} from "../../redux/actions/action";

const LandingPage = () => {
  const { loading } = useSelector((state) => state.product.products);
  const { loading: catLoading } = useSelector((state) => state.category);
  const { loading: detailsLoading } = useSelector(
    (state) => state.product.productDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAction());
    dispatch(getCategoryAction());
  }, []);
  return (
    <>
      {!loading && !catLoading && !detailsLoading ? (
        <div>
          <LandingBannerSec />
          <LandingFlashSec />
          <LandingCategorySec />
          <LandingSellingSec />
          <LandingBanner2Sec />
          <LandingExploreSec />
          <LandingArrivalSec />
          <LandingSeciveSec />
        </div>
      ) : (
        <main className={styles.loader_main}>
          <Lottie animationData={loader} className={styles.loader} />
        </main>
      )}
    </>
  );
};

export default LandingPage;
