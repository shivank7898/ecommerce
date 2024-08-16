import Breadcrumb from "../../../components/breadcrumb/Breadcumb";
import img from "./about.png";
import styles from "./aboutStorySec.module.css";
const AboutStorySec = () => {
  return (
    <div className={styles.aboutStorySec_main}>
        <Breadcrumb className={styles.breadcrumb_about} />
      <div className={styles.aboutStorySec_child}>
        <div className={styles.aboutStorySec_left}>
          <div className={styles.aboutStorySec_left_child}>
            <div className={styles.aboutStorySec_head}>Our Story</div>
            <div className={styles.aboutStorySec_para}>
              Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
              <br />
              makterplace with an active presense in Bangladesh. Supported by
              wide <br />
              range of tailored marketing, data and service solutions, Exclusive
              has <br />
              10,500 sallers and 300 brands and serves 3 millioons customers
              across <br />
              the region.
              <span>
                Exclusive has more than 1 Million products to offer, growing at
                a <br />
                very fast. Exclusive offers a diverse assotment in categories{" "}
                <br />
                ranging from consumer.
              </span>
            </div>
          </div>
        </div>
        <div className={styles.aboutStorySec_right}>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutStorySec;
