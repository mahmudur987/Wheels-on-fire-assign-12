import React from "react";
import { BsBicycle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Methods } from "../../constant/BestMathod";
const BestMathod = () => {
  return (
    <div className="py-8 shadow-md rounded-md border my-10 ">
      <div className="max-w-full p-4 flex flex-col items-center">
        <h2 className="text-5xl font-extrabold text-center mb-8 uppercase">
          Best Tips to bye a second hand cycle
        </h2>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center min-h-[400px] bg-gray-100">
          <div className="md:w-1/2 p-8">
            <div className="flex flex-col gap-10  ">
              {Methods.slice(0, 2).map((item, index) => (
                <p
                  key={index}
                  className=" p-1 font-bold text-xl grid gap-5 items-center rounded-lg"
                >
                  <p className="flex gap-5 items-center  text-2xl text-lime-700">
                    <span>
                      {" "}
                      <BsBicycle />{" "}
                    </span>{" "}
                    <span>{item.split(":")[0]}</span>
                  </p>
                  <span>
                    {item.split(":")[1]} . . . <div className=""></div>
                  </span>
                </p>
              ))}

              <p className="flex justify-end items-center">
                <Link to={"/blog"}>
                  <button className="btn btn-sm btn-info ">Read more</button>
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-1/2 p-8">
            <img
              className="w-full"
              src="https://media.istockphoto.com/id/486312465/photo/man-buying-bicycle.jpg?s=612x612&w=is&k=20&c=18SbFMdQk22dxAxYXVm-2-zAtSPWDo9pgn5I9rtJCLY="
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestMathod;
