import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner from "../Banner/Banner";
import CycleParts from "../CycleParts/CycleParts";
import Cycles from "../Cycles/Cycles";
import HoatDeal from "../HotDeal/HoatDeal";
import Services from "../Services/Services";
import { authContext } from "../../../Context/UserContext";
import Loading from "../../../Components/Loading/Loading";

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
      <div className=" pb-10">
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

      <div className="p-1 text-center">
        <h1 className="text-3xl underline uppercase font-bold bg-primary text-secondary p-2 rounded-xl m-4  text-center">
          All Cycles
        </h1>
        <Cycles cycles={cycles}></Cycles>
        <Link to={"/allcycle"}>
          <button className="btn btn-outline m-5 font-bold">See All</button>
        </Link>
      </div>

      <div className="mt-10 border">
        <h1 className="text-3xl underline uppercase font-bold bg-primary text-secondary p-2 rounded-xl m-4  text-center">
          {" "}
          CYCLE PARTS{" "}
        </h1>

        <CycleParts></CycleParts>
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
