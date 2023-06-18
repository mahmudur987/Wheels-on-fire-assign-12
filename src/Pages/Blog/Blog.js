import React from "react";
import { Methods } from "../../constant/BestMathod";
import { BsBicycle } from "react-icons/bs";

const Blogs = () => {
  return (
    <div>
      <div className=" p-5 m-5">
        <div className="py-8 shadow-md rounded-md border my-10 ">
          <div className="max-w-full p-4 flex flex-col items-center">
            <h2 className="text-5xl font-extrabold text-center mb-8 uppercase">
              Best Tips to bye a second hand cycle
            </h2>
            <div className="flex flex-col md:flex-row-reverse items-center justify-center min-h-[400px] bg-gray-100">
              <div className=" p-8">
                <div className="flex flex-col gap-10  ">
                  {Methods.map((item, index) => (
                    <p
                      key={index}
                      className=" p-1 font-bold text-2xl grid gap-5 items-center rounded-lg"
                    >
                      <p className="flex gap-5 items-center  text-3xl text-lime-700">
                        <span>
                          {" "}
                          <BsBicycle />{" "}
                        </span>{" "}
                        <span>{item.split(":")[0]}</span>
                      </p>
                      <span>
                        {item.split(":")[1]} <div className=""></div>
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
