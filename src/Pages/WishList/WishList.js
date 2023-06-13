import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { authContext } from "../../Context/UserContext";
import Cycle from "../Home/Cycles/Cycle";

const WishList = () => {
  const { user } = useContext(authContext);

  const { data: cycles = [] } = useQuery({
    queryKey: ["wishlist", `${user.email}`],
    queryFn: () =>
      fetch(
        `${process.env.REACT_APP_databaseurl}/wishlist?email=${user.email}`
      ).then((res) => res.json()),
  });

  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3">
      {cycles.map((cycle, idx) => (
        <Cycle key={idx} cycle={cycle}></Cycle>
      ))}
    </div>
  );
};

export default WishList;
