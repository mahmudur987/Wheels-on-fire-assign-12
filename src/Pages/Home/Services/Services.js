import { useQuery } from "@tanstack/react-query";
import React from "react";

const Services = () => {
  const { data: services = [] } = useQuery({
    queryKey: ["services"],
    queryFn: () =>
      fetch(`${process.env.REACT_APP_databaseurl}/services`).then((res) =>
        res.json()
      ),
  });

  // console.log(services)

  return (
    <div className="  text-center grid md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
      {services.map((service, idx) => (
        <div className="card  bg-base-100 shadow-xl" key={idx}>
          <figure>
            <img
              className="w-80 lg:w-9/12 h-80"
              src={service.picture}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {service.ServiceName} </h2>
            <p className="text-xl text-primary font-bold">
              {" "}
              Price :{service.price}{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
