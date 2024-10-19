
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeCarousel.css";

import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from '../Firebase/Configuration.jsx';
import React, { useState, useEffect } from "react";

import homeEntries from '../homeEntries.json';

const responsive = {
  desktop: {
    breakpoint: {max: 10024, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min:0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};


const HomeCarousel = () => {

  return (
    <div className="parentContainer">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {homeEntries.map((imageEntry) => {
          return (
            <div className="slider" key={imageEntry.id}>
              <img src={imageEntry.thumbnail} alt="image not found" />
              <h1 className="cHText">{imageEntry.title}</h1>
              <p className="cPText">{imageEntry.subtext}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;