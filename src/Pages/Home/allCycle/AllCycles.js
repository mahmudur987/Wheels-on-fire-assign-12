import React, { useContext, useEffect, useState } from "react";
import Cycle from "../Cycles/Cycle";
import { authContext } from "../../../Context/UserContext";
import Loading from "../../../Components/Loading/Loading";

const AllCycles = () => {
  const [cycles, SetCycles] = useState([]);
  const { loading, Setloading } = useContext(authContext);

  useEffect(() => {
    Setloading(true);
    fetch(`${process.env.REACT_APP_databaseurl}/cycles`)
      .then((res) => res.json())
      .then((data) => {
        SetCycles(data);

        Setloading(false);
      });
  }, [Setloading]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cycles.map((cycle) => (
        <Cycle key={cycle._id} cycle={cycle}></Cycle>
      ))}
    </div>
  );
};

export default AllCycles;
