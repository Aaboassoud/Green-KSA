import React from "react";
import VideoHome from "../images/videoHome.mp4";
import ImgHome1 from "../images/imgHome1.jpg";
import ImgHome2 from "../images/imgHome2.jpeg";
import ImgHome3 from "../images/imgHome3.jpeg";
import ImgHome4 from "../images/imgHome4.jpeg";
import Goals from "../Goals";
import Top5 from "../Top5";
import About from "../About";
import Achievements from "../Achievements";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";


export default function Home() {
  return (
    <Fullpage>
      <FullPageSections>
        <div className="homePage">
          <FullpageSection>
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
                  نحن عازمون بطموحنا الكبير، وخبراتنا الواسعة، وإبداعنا
                  اللامحدود على أن نصنع الفرق. مرحباً بكم في السعودية الخضراء
                </h1>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundImage: `url(${ImgHome2})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "1em",
            }}
          >
            <About />
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundImage: `url(${ImgHome3})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "1em",
            }}
          >
            <Goals />
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundImage: `url(${ImgHome1})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "1em",
            }}
          >
            <Achievements />
          </FullpageSection>
          <FullpageSection
            style={{
              backgroundImage: `url(${ImgHome4})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              padding: "1em",
            }}
          >
            <Top5 />
          </FullpageSection>
        </div>
      </FullPageSections>
    </Fullpage>
  );
}
