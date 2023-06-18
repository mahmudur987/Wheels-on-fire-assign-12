import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Cycle from "../Cycles/Cycle";
import Cycles from "../Cycles/Cycles";

const HoatDeal = () => {
  const [count, setCount] = useState(3);
  const { data: cycles = [] } = useQuery({
    queryKey: ["promos"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_databaseurl}/promos`).then((res) =>
        res.json()
      ),
  });

  return (
    <div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cycles.slice(0, count).map((cycle) => (
          <Cycle key={cycle._id} cycle={cycle}></Cycle>
        ))}
      </div>

      <p className="flex justify-center m-10">
        <button
          onClick={() => setCount(cycles.length)}
          className={`btn btn-secondary ${
            count === cycles.length ? "hidden" : ""
          }`}
        >
          see all
        </button>
        <button
          onClick={() => setCount(3)}
          className={`btn btn-secondary ${
            count === cycles.length ? "" : "hidden"
          }`}
        >
          see less
        </button>
      </p>
    </div>
  );
};

export default HoatDeal;
