import React from "react";
import classNames from "classnames";

function SliderContent({ activeIndex, sliderImage }: any) {
  return (
    <section>
      {sliderImage.map((slide: any, index: any) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.urls} alt="" />
          <p className="slide-title">{slide.title}</p>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
