import React from "react";
import "./style.scss";
import photos from "../../data";

const Featured = () => {
  const [firstImg, secondImg] = photos;
  return (
    <section className="featured-section">
      <div className="featured-row-layout">
        <h6>green</h6>
        <img src={firstImg} />
      </div>
      <div className="featured-column-layout">
        <h6>lily</h6>
        <img src={secondImg} />
      </div>
    </section>
  );
};

export default Featured;