import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import Cycles from "../Cycles/Cycles";
import HoatDeal from "../HotDeal/HoatDeal";
import Services from "../Services/Services";

const Home = () => {
  const [cycles, SetCycles] = useState([]);
  const [catagories, SetCatagories] = useState([]);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_databaseurl}/cycles`)
      .then((res) => res.json())
      .then((data) => SetCycles(data));
  }, []);
  useEffect(() => {
    fetch(`${process.env.REACT_APP_databaseurl}/catagories`)
      .then((res) => res.json())
      .then((data) => SetCatagories(data));
  }, []);

  return (
    <div>
      <div className=" py-10">
        <Banner></Banner>
      </div>
      <div className=" py-10">
        <h1 className="text-3xl underline uppercase font-bold bg-primary text-secondary p-2 rounded-xl m-4  text-center ">
          {" "}
          Hot Deals
        </h1>

        <HoatDeal></HoatDeal>
      </div>
      <div className=" py-10 p-3 text-center rounded-md">
        <h1 className="text-3xl underline uppercase font-bold bg-primary text-secondary p-2 rounded-xl m-4  text-center">
          {" "}
          Catagories
        </h1>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 bg-secondary  ">
          {catagories.map((catagory) => (
            <div className="my-14" key={catagory._id}>
              <img
                className=" w-full mx-auto lg:w-9/12 h-80"
                src={catagory.image}
                alt=""
              />

              <Link to={`catagory/${catagory.catagoryId}`}>
                <button className="text-2xl font-bold text-primary">
                  {catagory.catagoryName}{" "}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="p-1">
        <h1 className="text-3xl underline uppercase font-bold bg-primary text-secondary p-2 rounded-xl m-4  text-center">
          All Cycles
        </h1>
        <Cycles cycles={cycles}></Cycles>
      </div>

      <div className="mt-10 border">
        <h1 className="text-3xl underline uppercase font-bold bg-primary text-secondary p-2 rounded-xl m-4  text-center">
          {" "}
          OUR SERVICES{" "}
        </h1>

        <Services></Services>
      </div>
    </div>
  );
};

export default Home;
