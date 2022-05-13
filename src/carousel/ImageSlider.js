import React, { useState, useEffect } from "react";
import ImgData from "./ImgData";
import "./imageSlider.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length - 1;
  const [value, updateValue] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      updateValue((a) => {
        let newValue = a + 0.2;
        if (newValue > 100) {
          setCurrent((b) => {
            let curr = b === length ? 0 : b + 1;
            return curr;
          });
          newValue = 0;
        }
        return newValue;
      });
    }, 120);
  }, []);

  const next = () => {
    setCurrent((b) => {
      let curr = b === length ? 0 : b + 1;
      return curr;
    });
    updateValue((a) => {
      a = 0;
      return a;
    })
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1);
    updateValue((a) => {
      a = 0;
      return a;
    })
  };

  return (
    <div>
      <ProgressBar value={value} />
      <div className="slider">
        <FaAngleDoubleLeft className="left-arrow" onClick={prevSlide} />
        <FaAngleDoubleRight className="right-arrow" onClick={next} />
        {ImgData.map((image, index) => {
          return (
            <div className={"slide"} key={index}>
              {index === current && (
                <img src={image.image} alt={image.alt} className="img" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
