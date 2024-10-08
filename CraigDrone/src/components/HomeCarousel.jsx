
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./HomeCarousel.css";

import { collection, DocumentSnapshot, getDocs } from "firebase/firestore";
import db from '../Firebase/Configuration.jsx';
import React, { useState, useEffect } from "react";

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
const sliderImageUrl = [
  //First image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 1",
    smallText:"words"
      
  },
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 2",
    smallText:"words"
  },
  //Second image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 3",
    smallText:"words"
  },
  //Third image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 4",
    smallText:"words"
  },

  //Fourth image url
  {
    url:"https://placehold.co/500x400",
    bigText:"caption 5",
    smallText:"words"
  }
];




const HomeCarousel = () => {

  const [images, setImages] = useState([]);

  useEffect(() => {
      let ignore = false;

      const getImages = async () => {
        setImages([]);
          await getDocs(collection(db, "home_page"))
              .then(querySnapshot => {
                  querySnapshot.forEach(doc => {
                      if (!ignore) {
                        setImages(images => [...images, doc.data()])
                      }
                  })
              })
              .catch(err => {
                  
              })
      }

      getImages();

      return () => {
          ignore = true;
      };


  }, [])

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
        {images.map((imageEntry) => {
          return (
            <div className="slider" key={imageEntry}>
              <img src={imageEntry.image} alt="image" />
              <h1 className="cHText">{imageEntry.title}</h1>
              <p className="cPText">{imageEntry.sub_text}</p>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;