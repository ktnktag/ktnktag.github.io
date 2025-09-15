import classes from "./Slider.module.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../../../assets/webps/Slider/slide_1.webp";
import img2 from "../../../assets/webps/Slider/slide_2.webp";
import img3 from "../../../assets/webps/Slider/image-86.webp";
import img4 from "../../../assets/webps/Slider/slide_4.webp";
import img5 from "../../../assets/webps/Slider/slide_5.webp";
import img6 from "../../../assets/webps/Slider/slide_6.webp";
import img7 from "../../../assets/webps/Slider/slide_7.webp";
import img8 from "../../../assets/webps/Slider/slide_8.webp";
import img9 from "../../../assets/webps/Slider/slide_9.webp";
import img10 from "../../../assets/webps/Slider/slide_10.webp";
import { useEffect, useRef, useState } from "react";

const imgs = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

export default function SliderList() {
  const checkWidth = (width: number) => (width > 900 ? 4 : width > 650 ? 3 : 2);
  const [slides, setSlides] = useState(() => checkWidth(window.innerWidth));
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    function handleResize() {
      setSlides(checkWidth(window.innerWidth));
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handleMouseLeave = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const settings = {
    infinite: true,
    speed: 8000,
    slidesToShow: slides,
    slidesToScroll: 1,
    autoplaySpeed: 0,
    cssEase: "linear",
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: false,
    dots: false,
    swipe: false,
    draggable: false,
    adaptiveHeight: false,
    variableWidth: false,
    centerMode: false,
    focusOnSelect: false,
    initialSlide: 0,
    rtl: false,
    ref: sliderRef,
  };

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Slider className={classes.slider} {...settings}>
        {imgs.map((item, index) => (
          <div key={"slider-img" + index} className={classes.item}>
            <img src={item} alt={"slider-img" + index} />
          </div>
        ))}
      </Slider>
    </div>
  );
}
