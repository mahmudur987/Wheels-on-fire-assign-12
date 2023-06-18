import React, { useEffect } from "react";
import { useState } from "react";

const CycleParts = () => {
  const [parts, Setparts] = useState([]);
  const [count, setCount] = useState(3);
  useEffect(() => {
    fetch("CycleParts.json")
      .then((res) => res.json())
      .then((data) => Setparts(data));
  }, []);

  return (
    <div>
      <div className="  grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
        {parts.slice(0, count).map((service, idx) => (
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
      <p className="flex justify-center m-10">
        <button
          onClick={() => setCount(parts.length)}
          className={`btn  btn-outline ${
            count === parts.length ? "hidden" : ""
          }`}
        >
          see all
        </button>
        <button
          onClick={() => setCount(3)}
          className={`btn btn-outline ${
            count === parts.length ? "" : "hidden"
          }`}
        >
          see less
        </button>
      </p>
    </div>
  );
};

export default CycleParts;
