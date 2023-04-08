import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BannerData } from "../../../constant/Banner/indexs";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
                  {/* <button class="px-8 py-3 mt-6 text-lg font-semibold text-white bg-blue-500 rounded hover:bg-blue-600">
                    Call to Action
                  </button> */}
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

// <div className="carousel w-full h-96 lg:h-[600px]">
//   <div id="slide1" className="carousel-item    relative w-full">
//     <img
//       alt=""
//       src="https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//       className="w-full h-full "
//     />

//     <div className="absolute left-16 top-1/3 w-full">
//       <h1 className="text-secondary text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold   ">
//         Second Hand Cycle All <br />
//         <span className="text-sky-100 block text-center"> Bangladesh</span>
//       </h1>
//     </div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide4" className="btn btn-circle">
//         ❮
//       </a>
//       <a href="#slide2" className="btn btn-circle">
//         ❯
//       </a>
//     </div>
//   </div>

//   <div id="slide2" className="carousel-item relative w-full">
//     <img
//       alt=""
//       src="https://images.unsplash.com/photo-1583467875263-d50dec37a88c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
//       className="w-full h-full "
//     />

//     <div className="absolute left-16 top-1/3 w-full">
//       <h1 className="text-secondary text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">
//         Second Hand Cycle All <br />
//         <span className="text-sky-100 block text-center"> Bangladesh</span>
//       </h1>
//     </div>

//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide1" className="btn btn-circle">
//         ❮
//       </a>
//       <a href="#slide3" className="btn btn-circle">
//         ❯
//       </a>
//     </div>
//   </div>

//   <div id="slide3" className="carousel-item relative w-full">
//     <img
//       alt=""
//       src="https://images.unsplash.com/photo-1570865116909-d358c47f1806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
//       className="w-full h-full"
//     />
//     <div className="absolute left-16 top-1/3 w-full">
//       <h1 className="text-secondary text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">
//         Second Hand Cycle All <br />
//         <span className="text-sky-100 block text-center"> Bangladesh</span>
//       </h1>
//     </div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide2" className="btn btn-circle">
//         ❮
//       </a>
//       <a href="#slide4" className="btn btn-circle">
//         ❯
//       </a>
//     </div>
//   </div>

//   <div id="slide4" className="carousel-item relative w-full">
//     <img
//       alt=""
//       src="https://images.unsplash.com/photo-1624522008901-55790cc6ea2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
//       className="w-full"
//     />
//     <div className="absolute left-16 top-1/3 w-full">
//       <h1 className="text-secondary text-2xl  sm:text-4xl md:text-6xl lg:text-7xl font-extrabold">
//         Second Hand Cycle All <br />
//         <span className="text-sky-100 block text-center"> Bangladesh</span>
//       </h1>
//     </div>
//     <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
//       <a href="#slide3" className="btn btn-circle">
//         ❮
//       </a>
//       <a href="#slide1" className="btn btn-circle">
//         ❯
//       </a>
//     </div>
//   </div>
// </div>
