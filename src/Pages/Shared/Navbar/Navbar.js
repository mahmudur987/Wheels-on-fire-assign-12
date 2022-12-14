import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/UserContext";

const Navbar = ({ dashboard, Setdashboard }) => {
  const { user, logout } = useContext(authContext);

  const handleSignOut = () => {
    logout()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const menuItems = (
    <>
      <li>
        <Link to={"/"}>HOME</Link>
      </li>
      <li>
        <Link to={"/blog"}>BLOG</Link>
      </li>
      <li>
        <Link onClick={() => Setdashboard(true)} to={"/dashboard"}>
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link to={"/wishlist"}>WISHLIST</Link>
      </li>

      {user?.email ? (
        <>
          <li>
            <Link onClick={handleSignOut} to={"/signup"}>
              SIGNOUT
            </Link>
          </li>

          <div className="grid border border-purple-400  ">
            <li className=" justify-end">
              <img
                className="w-16 inline rounded-full"
                alt=""
                src={user?.photoURL}
              ></img>{" "}
            </li>
            <li>
              {user?.email !== "safemahmud987@gmail.com" && (
                <Link className="text-red-800 font-bold  uppercase">
                  {" "}
                  {user?.displayName}{" "}
                </Link>
              )}
            </li>

            <li>
              {user?.email === "safemahmud987@gmail.com" && (
                <Link className="text-red-800 text-[10px] font-bold  uppercase">
                  {" "}
                  {user?.displayName}{" "}
                  <span className=" text-green-400  bg-red-500  rounded-3xl text-[8px]">
                    Admin
                  </span>{" "}
                </Link>
              )}
            </li>
          </div>
        </>
      ) : (
        <>
          <li>
            <Link to={"/login"}>LOGIN </Link>
          </li>
          <li>
            <Link to={"/signup"}>SIGNUP</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-primary flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case font-bold text-xl bg-neutral">
          {" "}
          WHEELS ON FIRE{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex flex-wrap">
        <ul className="menu menu-horizontal m-0 p-0">{menuItems}</ul>
      </div>
      {/* {dashboard && (
        <label
          htmlFor="my-drawer-2"
          tabIndex={1}
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5" 
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      )} */}
    </div>
  );
};

export default Navbar;
