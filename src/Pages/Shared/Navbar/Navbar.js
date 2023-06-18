import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../../../Context/UserContext";

const Navbar = () => {
  const { user, logout, dashboard, Setdashboard } = useContext(authContext);

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
        <Link onClick={() => Setdashboard(false)} to={"/"}>
          HOME
        </Link>
      </li>
      <li>
        <Link onClick={() => Setdashboard(false)} to={"/blog"}>
          BLOG
        </Link>
      </li>
      <li>
        <Link onClick={() => Setdashboard(false)} to={"/dashboard"}>
          DASHBOARD
        </Link>
      </li>
      <li>
        <Link onClick={() => Setdashboard(false)} to={"/wishlist"}>
          WISHLIST
        </Link>
      </li>
      <li>
        <Link onClick={() => Setdashboard(false)} to={"/about"}>
          ABOUT
        </Link>
      </li>
      <li>
        <Link onClick={() => Setdashboard(false)} to={"/contact"}>
          CONTACT
        </Link>
      </li>

      {user?.email ? (
        <>
          <li onClick={() => Setdashboard(false)}>
            <Link onClick={handleSignOut} to={"/signup"}>
              SIGNOUT
            </Link>
          </li>

          <div className="grid border  ">
            <li className=" justify-center">
              <img
                className="w-16 inline rounded-full"
                alt=""
                src={user?.photoURL}
              ></img>{" "}
            </li>
            <li>
              {user?.email !== "safemahmud987@gmail.com" && (
                <Link
                  onClick={() => Setdashboard(false)}
                  className=" font-bold  uppercase"
                >
                  {" "}
                  {user?.displayName}{" "}
                </Link>
              )}
            </li>

            <li>
              {user?.email === "safemahmud987@gmail.com" && (
                <Link
                  onClick={() => Setdashboard(false)}
                  className="text-red-800 text-[10px] font-bold  uppercase"
                >
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
            <Link onClick={() => Setdashboard(false)} to={"/login"}>
              LOGIN{" "}
            </Link>
          </li>
          <li>
            <Link onClick={() => Setdashboard(false)} to={"/signup"}>
              SIGNUP
            </Link>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <div onClick={() => Setdashboard(true)}>
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
          </div>
          <div className={dashboard ? "block" : "hidden"}>
            <ul
              tabIndex={0}
              className={
                "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              }
            >
              {menuItems}
            </ul>
          </div>
        </div>
        <Link className="btn btn-ghost normal-case font-bold text-xl md:text-2xl lg:text-4xl  bg-neutral">
          {" "}
          WHEELS ON FIRE{" "}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex flex-wrap">
        <ul className="menu menu-horizontal m-0 p-0 font-bold">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
