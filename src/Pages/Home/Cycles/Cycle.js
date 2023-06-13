import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";
const Cycle = ({ cycle }) => {
  const {
    sellerVarified,
    productTitle,
    userName,
    brand,
    condition,
    price,
    location,
    registered,
    usingDuration,
    sold,
    picture,
    _id,
  } = cycle;
  return (
    <div className="card w-full  bg-base-100 shadow-xl m-1">
      <figure className="px-10 pt-10">
        <PhotoProvider>
          <PhotoView src={picture}>
            <img src={picture} alt="cycle" className="rounded-xl h-80 w-full" />
          </PhotoView>
        </PhotoProvider>
      </figure>
      <div className="card-body text-start ">
        <h2 className="card-title text-2xl font-bold"> {productTitle} </h2>
        <p>Condition :{condition}</p>
        <p>Brand :{brand}</p>
        <p>Release Date :{registered}</p>
        <p>Using For :{usingDuration}</p>
        <p className="text-xl font-extrabold">Price :{price}</p>
        <p>
          Location :{location}{" "}
          <span className="text-secondary font-extrabold bg-green-200 rounded-full p-2 text-sm  ">
            {" "}
            {sold ? "Booked" : "available"}{" "}
          </span>{" "}
        </p>
        <p>
          Posted By :{userName}{" "}
          <span className=" rounded-full bg-red-100 text-secondary p-1">
            {sellerVarified ? "varified" : "new Seller"}
          </span>{" "}
        </p>

        <div className="card-actions justify-end">
          <Link to={`/cycle/${_id}`}>
            <button className="btn btn-secondary btn-sm">Details </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
