import React, { useState } from "react";

import styles from "./productGallery.module.css";

import img from "../../assets/card.png";
import img2 from "../../assets/card2.png";

const ProductGallery = ({images, thumb}) => {
  const [selectedImage, setSelectedImage] = useState(thumb);

//   const images = [img, img2, img2, img2];

  return (
    <div className={styles.productGallery_main}>
      <div className={styles.productGallery_thumbnails}>
        {images.map((image, index) => (
          <div key={index} className={styles.productGallery_thumb_img}>
            <img
              src={image}
              alt={`Product Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(image)}
              className={selectedImage === image ? "active" : ""}
            />
          </div>
        ))}
      </div>
      <div className={styles.productGallery_main_img}>
        <img id="featured" src={selectedImage} alt="Product Main Image" />
      </div>
    </div>
  );
};

export default ProductGallery;
