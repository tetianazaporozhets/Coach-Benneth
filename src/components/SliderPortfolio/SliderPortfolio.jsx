import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import portfolio1 from "../../static/images/portfolio1.jpg";
import portfolio2 from "../../static/images/portfolio2.jpg";
import portfolio3 from "../../static/images/portfolio3.jpg";
import portfolio4 from "../../static/images/portfolio4.jpg";
import "./SliderPortfolio.scss";

const images = [portfolio1, portfolio2, portfolio3, portfolio4];

const SliderPortfolio = () => {
  return (
    <div className="swiper-container">
      <Swiper
        className="container"
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={2}
        spaceBetween={56}
        centeredSlides={false}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          400: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <img className="swiper-img" src={src} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPortfolio;
