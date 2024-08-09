import ImageContainer from "../../../components/imageContainer/ImageContainer";
import SectionHead from "../../../components/sectionHead/SectionHead";
import styles from "./landingArrivalSec.module.css";
import img1 from "../../../assets/img1.png"
import img2 from "../../../assets/img2.png"
import img3 from "../../../assets/img3.png"
import img4 from "../../../assets/img4.png"
const LandingArrivalSec = () => {
  return (
    <div className={styles.LASec_main}>
      <div className={styles.LASec_child}>
        <div className={styles.LASec_sectionHead}>
          <SectionHead small="Featured" big="New Arrival" istimer={false} />
        </div>
        <div className={styles.LASec_images}>
          {/* <ImageContainer Imgsrc={}/> */}
          <div className={styles.LASec_images_left}>
            <img src={img1} alt="" />
          </div>
          <div className={styles.LASec_images_right}>
            <div className={styles.LASec_images_right_top}>
                <img src={img2} alt="" />
            </div>
            <div className={styles.LASec_images_right_btm}>
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingArrivalSec