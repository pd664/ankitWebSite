import React, { useState, useEffect } from "react";
import ImgData from "./ImgData";
import "./imageSlider.css";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length - 1;
  const [value, updateValue] = useState(1);
  const [barValue, setBarValue] = useState(0)

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
    <div className="cont">
      <ProgressBar value={value} className="bar" />
      <div className="slidera">
        
        {ImgData.map((image, index) => {
          return (
            <div className={"slide"} key={index}>
              
              {index === current && (
                <div className="content">
                  
                <img src={image.image} alt={image.alt} className="img img-fluid mt-0" />
                <FaAngleDoubleLeft className="left-arrow" onClick={prevSlide} />
                <FaAngleDoubleRight className="right-arrow" onClick={next} />
                <p className="p1">{value > 5 ? image.a1 : ""}</p>
                <h2 className="heading">{value > 8 ?image.text : ""}</h2>
                <p className="p2">{value > 11 ?image.a2 : ""}</p>
                {value > 14 ? <button className="button">{image.btn}</button> : ""}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageSlider;
