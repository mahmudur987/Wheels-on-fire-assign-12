import React from "react";
import Slider from "react-slick";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const PublicReviews = () => {
  const reviews = [
    {
      image:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat, urna eu vulputate iaculis.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      text: "Aliquam finibus ex vitae est congue auctor. Praesent volutpat nisi eget tortor vulputate, sed tincidunt urna pharetra.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      text: "Curabitur nec orci sagittis, malesuada tellus nec, feugiat libero. Ut finibus, neque id pellentesque ullamcorper, purus diam fermentum est.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
      text: "Sed interdum risus ut pharetra commodo. Sed a fermentum urna. Sed iaculis consectetur nisi, in elementum felis consequat in.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1667132970685-a2109a3ed00d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      text: "Sed interdum risus ut pharetra commodo. Sed a fermentum urna. Sed iaculis consectetur nisi, in elementum felis consequat in.",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 8000,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-8 border ">
      <div className="px-4">
        <h2 className="text-4xl uppercase text-green-600 font-bold text-center mb-8">
          What people Said
        </h2>
        <div className="mx-5">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="  ">
                <div className="h-60 mx-3 border p-3 border-green-600 shadow-xl rounded-md">
                  <img
                    className="w-24 h-24 rounded-full mx-auto mb-4"
                    src={review.image}
                    alt="User"
                  />
                  <p>{review.text.slice(0, 150)}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PublicReviews;
