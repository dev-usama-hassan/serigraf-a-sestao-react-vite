import React from "react";
import { Slide, Fade } from "react-slideshow-image";
import maker from "../assets/maker.jpeg";
import machine1 from "../assets/machine1.jpeg";
import machine2 from "../assets/machine2.jpeg";
import machine3 from "../assets/machine3.jpeg";
import machine4 from "../assets/machine4.jpeg";
import machine5 from "../assets/machine5.jpeg";
import machine6 from "../assets/machine6.jpeg";
import machine7 from "../assets/machine7.jpeg";
import "react-slideshow-image/dist/styles.css";

const Header = () => {
  const slidesData = [
    { url: maker, caption: "Slide 1" },
    { url: machine1, caption: "Slide 2" },
    { url: machine2, caption: "Slide 3" },
    { url: machine3, caption: "Slide 4" },
    { url: machine4, caption: "Slide 5" },
    { url: machine5, caption: "Slide 6" },
    { url: machine6, caption: "Slide 7" },
    { url: machine7, caption: "Slide 8" },
  ];

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "730px",
  };

  return (
      <div className="w-[65%] mx-auto relative mt-24">
        <Fade>
          {slidesData.map((slideImage, index) => (
            <div key={index} className="">
              <div
                style={{
                  ...divStyle,
                  backgroundImage: `url(${slideImage.url})`,
                }}
              >
                {/* <span style={spanStyle}>{slideImage.caption}</span> */}
              </div>
            </div>
          ))}
        </Fade>
      </div>
  );
};

export default Header;
