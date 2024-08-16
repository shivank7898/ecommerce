import React from "react";
import styles from "./aboutStorySec/aboutStorySec.module.css"
import AboutStorySec from "./aboutStorySec/AboutStorySec";
import AboutAchivementSec from "./aboutAchivementSec/AboutAchivementSec";
import AboutFoundersSec from "./aboutFoundersSec/AboutFoundersSec";
import LandingServiceSec from "../landingPage/landingSeciveSec/LandingSeciveSec";
import Breadcrumb from "../../components/breadcrumb/Breadcumb";
const AboutPage = () => {
  return (
    <div>
      
      <AboutStorySec />
      <AboutAchivementSec />
      <AboutFoundersSec />
      <LandingServiceSec />
    </div>
  );
};

export default AboutPage;
