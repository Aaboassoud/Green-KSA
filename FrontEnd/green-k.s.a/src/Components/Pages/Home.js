import React from "react";
import VideoHome from "../images/videoHome.mp4";
import Goals from "../Goals";
import Top5 from "../Top5";
import About from "../About";
import Achievements from "../Achievements";

export default function Home() {
  return (
    <div className="homePage">
      <div className="containerVideo">
        <video
          className="videoHome"
          preload="auto"
          autoplay="auto"
          playsinline
          loop
          muted
        >
          <source src={VideoHome} type="video/mp4" />
        </video>
        <div class="overlay">
          <h1>
            نحن عازمون بطموحنا الكبير، وخبراتنا الواسعة، وإبداعنا اللامحدود على
            أن نصنع الفرق. مرحباً بكم في السعودية الخضراء
          </h1>
        </div>
      </div>
      <About />
      <Goals />
      <Achievements />
      <Top5 />
    </div>
  );
}
