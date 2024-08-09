import React from "react";
import AboutStorySec from "./aboutStorySec/AboutStorySec";
import AboutAchivementSec from "./aboutAchivementSec/AboutAchivementSec";
import AboutFoundersSec from "./aboutFoundersSec/AboutFoundersSec";
import LandingServiceSec from "../landingPage/landingSeciveSec/LandingSeciveSec"
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
