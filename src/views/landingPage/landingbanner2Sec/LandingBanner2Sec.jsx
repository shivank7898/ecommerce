import styles from "./landingbanner2Sec.module.css";

import banner from "../../../assets/banner2.png";

const LandingBanner2Sec = () => {
  return (
    <div className={styles.lb2Sec_main}>
      <img src={banner} alt="" className={styles.bannerImage} />
    </div>
  );
};

export default LandingBanner2Sec;
