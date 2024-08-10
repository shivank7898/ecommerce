import { useDispatch } from "react-redux";

import LandingBannerSec from "./landingBannerSec/LandingBannerSec";
import LandingFlashSec from "./landingFlashSec/LandingFlashSec";
import LandingCategorySec from "./landingCategorySec/LandingCategorySec";
import LandingSellingSec from "./landingSellingSec/LandingSellingSec";
import LandingBanner2Sec from "./landingbanner2Sec/LandingBanner2Sec";
import LandingExploreSec from "./landingExploreSec/LandingExploreSec";
import LandingArrivalSec from "./landingArrivalSec/LandingArrivalSec";
import LandingSeciveSec from "./landingSeciveSec/LandingSeciveSec";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/slices/productSlice";
import axios from "axios";
import { fetchCategory } from "../../redux/slices/categorieSlice";

const LandingPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategory())
    // console.log("first")
  }, [dispatch]);
  return (
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
  );
};

export default LandingPage;
