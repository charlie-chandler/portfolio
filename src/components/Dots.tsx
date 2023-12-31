import React from "react";

function Dots({ activeIndex, onclick, sliderImage }: any) {
  return (
    <div className="all-dots">
      {sliderImage.map((slide: any, index: any) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
