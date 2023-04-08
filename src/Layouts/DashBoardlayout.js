import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { useAdmin } from "../Components/Hooks/useAdmin";
import { useSeller } from "../Components/Hooks/useSeller";
import { authContext } from "../Context/UserContext";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { FaBackspace } from "react-icons/fa";

const DashBoardlayout = () => {
  const { user } = useContext(authContext);
  const [seller] = useSeller(user?.email);
  const [admin] = useAdmin(user.email);
  // console.log(admin);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        <div className="drawer-content  mt-10">
          <label
            htmlFor="my-drawer-2"
            tabIndex={1}
            className="btn btn-primary btn-sm lg:hidden ml-1"
          >
            menu
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side border m-3 border-primary">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <label
                htmlFor="my-drawer-2"
                tabIndex={1}
                className="btn btn-ghost lg:hidden"
              >
                <FaBackspace className="text-4xl"></FaBackspace>
              </label>
            </li>
            <li className="text-xl font-bold text-secondary ">
              <Link to={"/dashboard"}>My Orders</Link>
            </li>
            {(seller || admin) && (
              <>
                <li className="text-xl font-bold text-secondary ">
                  <Link to={"/dashboard/addproduct"}>Add product</Link>
                </li>
                <li className="text-xl font-bold text-secondary ">
                  <Link to={"/dashboard/myproduct"}>My product</Link>
                </li>
              </>
            )}

            {admin && (
              <>
                <li className="text-xl font-bold text-secondary ">
                  <Link to={"/dashboard/allbuyers"}> All Buyers</Link>
                </li>
                <li className="text-xl font-bold text-secondary ">
                  <Link to={"/dashboard/allsellers"}> All Sellers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoardlayout;
