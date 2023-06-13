import { useQuery } from "@tanstack/react-query";
import React from "react";
import Cycle from "../Cycles/Cycle";

const HoatDeal = () => {
  const { data: cycles = [] } = useQuery({
    queryKey: ["promos"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_databaseurl}/promos`).then((res) =>
        res.json()
      ),
  });

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cycles.map((cycle) => (
        <Cycle key={cycle._id} cycle={cycle}></Cycle>
      ))}
    </div>
  );
};

export default HoatDeal;
