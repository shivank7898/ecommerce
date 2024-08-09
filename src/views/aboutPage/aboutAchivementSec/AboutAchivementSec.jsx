import React from "react";
import { CiShop } from "react-icons/ci";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import { IoBagHandleOutline } from "react-icons/io5";


import { TbMoneybag } from "react-icons/tb";

import styles from "./aboutAchivementSec.module.css";
const AboutAchivementSec = () => {
  const data = [
    {
      icon: <CiShop className={styles.icon} />,
      num: "10.5k",
      text: "Sallers active our site",
    },
    {
      icon: <HiOutlineCurrencyDollar className={styles.icon} />,
      num: "33k",
      text: "Mopnthly Produduct Sale",
    },
    {
      icon: <IoBagHandleOutline className={styles.icon} />,
      num: "45.5k",
      text: "Customer active in our site",
    },
    {
      icon: <TbMoneybag className={styles.icon} />,
      num: "25k",
      text: "Anual gross sale in our site",
    },
  ];
  return (
    <div className={styles.aboutAchiSec_main}>
      <div className={styles.aboutAchiSec_child}>
        {data.map((item) => (
          <div className={styles.aboutAchiSec_card}>
            <div className={styles.aboutAchiSec_card_icon}>
              <div className={styles.aboutAchiSec_card_icon_border1}>
                <div className={styles.aboutAchiSec_card_icon_border2}>
                  {item.icon}
                </div>
              </div>
            </div>
            <div className={styles.aboutAchiSec_card_num}>{item.num}</div>
            <div className={styles.aboutAchiSec_card_text}>{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutAchivementSec;
