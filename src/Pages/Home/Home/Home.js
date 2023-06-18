import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import CycleParts from "../CycleParts/CycleParts";
import Cycles from "../Cycles/Cycles";
import HoatDeal from "../HotDeal/HoatDeal";
import Services from "../Services/Services";
import { authContext } from "../../../Context/UserContext";
import Loading from "../../../Components/Loading/Loading";
import Showcase from "../../../Components/Showcase/Showcase";
import Brands from "../../../Components/Brands/Brands";
import Map from "../../../Components/Map/Map";
import BestMathod from "../../../Components/BestMethod/BestMathod";
import PublicReviews from "../../../Components/PublicReview/PublicReview";

const Home = () => {
  const { loading, Setloading } = useContext(authContext);

  const [cycles, SetCycles] = useState([]);
  const [catagories, SetCatagories] = useState([]);
  useEffect(() => {
    Setloading(true);
    fetch(`${process.env.REACT_APP_databaseurl}/cycles`)
      .then((res) => res.json())
      .then((data) => {
        SetCycles(data);

        Setloading(false);
      });
  }, [Setloading]);
  useEffect(() => {
    Setloading(true);
    fetch(`${process.env.REACT_APP_databaseurl}/catagories`)
      .then((res) => res.json())
      .then((data) => {
        SetCatagories(data);
        Setloading(false);
      });
  }, [Setloading]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {/* banner section */}

      <div className=" my-10">
        <Banner></Banner>
      </div>

      {/* Hot deals */}

      <div className=" py-10 my-10 border">
        <h1 className="text-3xl   uppercase font-bold  text-secondary p-2  m-4  text-center ">
          {" "}
          <span className="  px-10 rounded-xl">Hot Deals !</span>
        </h1>

        <HoatDeal></HoatDeal>
      </div>

      {/* catagories */}
      <div className=" py-10 p-3 text-center rounded-md my-10 border">
        <h1 className="text-2xl md:text-3xl   uppercase font-bold  text-secondary p-2 m-4  text-center">
          {" "}
          <span className="  px-10 rounded-xl"> Find by Catagories</span>
        </h1>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3   ">
          {catagories.map((catagory) => (
            <div className="my-14" key={catagory._id}>
              <img
                className=" w-full mx-auto lg:w-9/12 h-80"
                src={catagory.image}
                alt=""
              />

              <Link to={`catagory/${catagory.catagoryId}`}>
                <button className="text-2xl font-bold">
                  {catagory.catagoryName}{" "}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* recently added */}

      <div className="p-1 min-h-[850px] text-center my-20 border flex flex-col justify-end  relative">
        <h1 className="text-xl sm:text-3xl uppercase font-bold p-2 m-4  text-center md:absolute -top-12 left-1/3 z-10">
          <span className="bg-gradient-to-r from-cyan-800 to-blue-800  text-pink-400 px-10 rounded-xl">
            {" "}
            Recently Added
          </span>
        </h1>
        <Cycles cycles={cycles}></Cycles>
        <Link to={"/allcycle"}>
          <button className="btn btn-outline m-5 font-bold">See All</button>
        </Link>
      </div>

      {/* showcase */}

      <div className="my-10 border">
        <Showcase />
      </div>

      {/* brands slider */}

      <div className="my-10 border">
        <Brands />
      </div>

      {/* buying or selling map */}

      <div className="my-10 border">
        <Map />
      </div>

      {/* accessories */}
      <div className="my-10 border">
        <h1 className="text-3xl   uppercase font-bold text-secondary p-2 m-4  text-center">
          {" "}
          <span className="  px-10 rounded-xl">CYCLE ACCESSORIES </span>
        </h1>

        <CycleParts></CycleParts>
      </div>

      {/* Best Tips */}
      <div className="my-10 border">
        <BestMathod />
      </div>

      {/* our services */}

      <div className="my-10 border">
        <h1 className="text-3xl   uppercase font-bold  text-secondary p-2  m-4  text-center">
          <span className="  px-10 rounded-xl"> OUR SERVICES </span>
        </h1>

        <Services></Services>
      </div>

      {/* public review */}

      <div className="my-10 border">
        <PublicReviews />
      </div>
    </div>
  );
};

export default Home;
