// components/FashionSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // Scroll within 2 seconds
    slidesToShow: window.innerWidth >= 1024 ? 4 : window.innerWidth >= 640 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Your slider content goes here */}
      <div className="p-4 transition-transform transform scale-110">
        <img src="your-image-url-1" alt="Fashion 1" />
      </div>
      <div className="p-4 transition-transform transform scale-110">
        <img src="your-image-url-7" alt="Fashion 7" />
      </div>
      {/* Add more slides as needed */}
    </Slider>
  );
};

export default CardSlider;