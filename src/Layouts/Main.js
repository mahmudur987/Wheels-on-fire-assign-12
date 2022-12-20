import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {
  const [dashboard, Setdashboard] = useState(false);
  console.log(dashboard);

  return (
    <div>
      <Navbar dashboard={dashboard} Setdashboard={Setdashboard}></Navbar>

      <Outlet></Outlet>

      <Footer></Footer>
    </div>
  );
};

export default Main;
