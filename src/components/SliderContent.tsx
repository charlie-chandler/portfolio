import React from "react";
import { Link } from "react-router-dom";

function SliderContent({ activeIndex, sliderImage }: any) {
  return (
    <section>
      {sliderImage.map((slide: any, index: any) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <Link to={slide.route}>
          <img className="slide-image" src={slide.urls} alt="" />
          <p className="slide-title">{slide.title}</p>
          </Link>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
