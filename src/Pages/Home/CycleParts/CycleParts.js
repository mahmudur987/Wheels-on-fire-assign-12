import React, { useEffect } from "react";
import { useState } from "react";

const CycleParts = () => {
  const [parts, Setparts] = useState([]);
  useEffect(() => {
    fetch("CycleParts.json")
      .then((res) => res.json())
      .then((data) => Setparts(data));
  }, []);

  return (
    <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
      {parts.map((service, idx) => (
        <div className="card  bg-base-200 shadow-xl" key={idx}>
          <figure>
            <img
              className="w-80 lg:w-9/12 h-80"
              src={service.picture}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl font-bold">
              {" "}
              {service.productTitle}{" "}
            </h2>
            <p className="text-xl text-secondary font-bold">
              {" "}
              Price :{service.price}{" "}
            </p>
            <p>Best Quality Product </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CycleParts;
