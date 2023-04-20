import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BannerData } from "../../../constant/Banner/indexs";

const Banner = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "black",
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    speed: 18000,
    autoplaySpeed: 200,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <Slider {...settings}>
        {BannerData?.map((data, idx) => (
          <div key={idx}>
            <div class="relative bg-gray-800 m-3">
              <img
                src={data.img}
                alt="Banner Images"
                class="object-cover w-full h-[650px]"
              />
              <div class="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-80"></div>
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                  <h1 class="text-4xl font-bold text-white lg:text-6xl">
                    Second Hand Cycle All <br />
                    <span className="text-sky-100 block text-center">
                      Bangladesh
                    </span>
                  </h1>
                  <p class="mt-4 text-lg text-gray-300">{data.text}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
