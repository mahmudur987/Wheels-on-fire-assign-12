import React from "react";
import Slider from "react-slick";

const Brands = () => {
  const products = [
    {
      name: "koga",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6BrzFe4ImhjROfUfg80Ojh8SCj62W05sHlnymwHtvzA&s",
    },
    {
      name: "venmoof",
      image:
        "https://www.shutterstock.com/image-vector/recycle-arrow-icon-symbol-sign-260nw-1913576173.jpg",
    },
    {
      name: "binchi",
      image:
        "https://www.bianchi.com/wp-content/uploads/2019/06/eagle-bianchi.png",
    },
    {
      name: "cortina",
      image:
        "https://play-lh.googleusercontent.com/Igm40Xb2CORKruMKGGzgSHJbP4kklBbmuENm4MsGd4UGmVl5VOAvOzgUaG75yDtPRHuw=w240-h480-rw",
    },
    {
      name: "scott",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/6/63/SCOTT_LOGO_BLACK-sm.png",
    },
    {
      name: "GT",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/GT_Bicycles_Logo.svg/2560px-GT_Bicycles_Logo.svg.png",
    },
    {
      name: "stella",
      image:
        "https://w1.pngwing.com/pngs/178/253/png-transparent-bus-stella-fietsen-bicycle-logo-electric-bicycle-sparta-bv-longdistance-cycling-route-nl.png",
    },
    {
      name: "veloretti",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdseilQs7UzikoU6UzOvC56ooY_2dr4qdwyFvextXmzi9mHuPUa02p73-RyOwTbM09L5w&usqp=CAU",
    },
    {
      name: "Relaeigh",
      image:
        "https://w7.pngwing.com/pngs/406/172/png-transparent-raleigh-bicycle-company-raleigh-professional-cycling-roadster-bicycle-text-logo-bicycle.png",
    },
    {
      name: "batavus",
      image:
        "https://w7.pngwing.com/pngs/864/681/png-transparent-logo-batavus-brand-bicycle-trademark-bicycle-text-trademark-bicycle.png",
    },
    {
      name: "gezelle",
      image:
        "https://www.sefiles.net/merchant/5636/images/site/Royal_Dutch_Gazelle_logo_cen_RGB.jpg",
    },
    {
      name: "giant",
      image:
        "https://w7.pngwing.com/pngs/234/502/png-transparent-logo-symbol-giant-bicycles-brand-cycling-miscellaneous-company-bicycle.png",
    },
    {
      name: "Nekro",
      image:
        "https://bkart.s3.ap-south-1.amazonaws.com/images/cycles/232/bdcfdbb0-87a9-41c8-9d76-e88408328984.jpeg",
    },
    {
      name: "phonix",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq6zT8TYMlf9fUI7CQs_eGkxwprJ4Wi_WaAuREtkcrXWJ2TlvIExwZ7nHSu841MtQnmKE&usqp=CAU",
    },
    {
      name: "foreever",
      image:
        "https://i.pinimg.com/736x/1b/b7/76/1bb7767c0b3da7f52a33f287ad5b1a16--bicycle-tattoo-bike-tattoos.jpg",
    },
  ];

  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
    <div className="text-center">
      <h2 className="text-5xl font-bold mb-4">The bike marketplace </h2>
      <p className="text-2xl font-bold mb-4">with the most popular brands </p>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index}>
            <div className=" h-32 bg-base-200 flex flex-col m-5 justify-center ">
              <img
                className=" mx-auto w-16 h-16 rounded-full"
                src={product.image}
                alt={product.name}
              />
              <h3 className="text-3xl  text-center mt-4 uppercase font-mono">
                {product.name}
              </h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Brands;
