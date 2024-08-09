import styles from "./landingSeciveSec.module.css";
import img1 from "./images/Services.png"
import img2 from "./images/Services1.png"
import img3 from "./images/Services2.png"
const LandingSeciveSec = () => {
  return (
    <div className={styles.LSerSec_main}>
      <div className={styles.LSerSec_child}>
        <div className={styles.LSerSec_service}>
          <div className={styles.LSerSec_service_img}>
            <img src={img1} alt="" />
          </div>
          <div className={styles.LSerSec_service_content}>
            <div className={styles.LSerSec_service_content_head}>
              FREE AND FAST DELIVERY
            </div>
            <div className={styles.LSerSec_service_content_para}>
              Free delivery for all orders over $140
            </div>
          </div>
        </div>
        <div className={styles.LSerSec_service}>
          <div className={styles.LSerSec_service_img}>
            <img src={img2} alt="" />
          </div>
          <div className={styles.LSerSec_service_content}>
            <div className={styles.LSerSec_service_content_head}>
              24/7 CUSTOMER SERVICE
            </div>
            <div className={styles.LSerSec_service_content_para}>
              Friendly 24/7 customer support
            </div>
          </div>
        </div>
        <div className={styles.LSerSec_service}>
          <div className={styles.LSerSec_service_img}>
            <img src={img3} alt="" />
          </div>
          <div className={styles.LSerSec_service_content}>
            <div className={styles.LSerSec_service_content_head}>
              MONEY BACK GUARANTEE
            </div>
            <div className={styles.LSerSec_service_content_para}>
              We reurn money within 30 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingSeciveSec;
