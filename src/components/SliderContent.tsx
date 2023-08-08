import React from "react";

function SliderContent({ activeIndex, sliderImage }: any) {
  return (
    <section>
      {sliderImage.map((slide: any, index: any) => (
        <div
          key={index}
          className={index === activeIndex ? "slides active" : "inactive"}
        >
            <a href={slide.route}>
          <img className="slide-image" src={slide.urls} alt="project preview" />
          <p className="slide-title">{slide.title}</p>
          </a>
        </div>
      ))}
    </section>
  );
}

export default SliderContent;
