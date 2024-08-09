import styles from "./imageContainer.module.css";
const ImageContainer = ({Imgsrc , head, para, button}) => {
  return (
    <div className={styles.ImageContainer_main}>
        <img src={Imgsrc} alt="" />
        <div className={styles.ImageContainer_content}>
            <div className={styles.ImageContainer_head}>

            </div>
            <div className={styles.ImageContainer_para}></div>
            <div className={styles.ImageContainer_button}></div>
            
        </div>

    </div>
  )
}

export default ImageContainer