import { createBrowserRouter } from "react-router-dom";
import DashBoardlayout from "../Layouts/DashBoardlayout";
import Main from "../Layouts/Main";
import Blogs from "../Pages/Blog/Blog";
import AddAPProduct from "../Pages/Dashboard/AddAPProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import MyBookings from "../Pages/Dashboard/MyBookings";
import Myproducts from "../Pages/Dashboard/Myproducts";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Catagory from "../Pages/Home/Catagories/Catagory";
import Details from "../Pages/Home/Cycles/Details";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import DisplayError from "../Pages/Shared/DispalayError/DisplayError";
import Signup from "../Pages/Signup/Signup";
import WishList from "../Pages/WishList/WishList";
import AdminRoutes from "./AdminRoutes";
import PrivatRoutes from "./PrivetRoutes";
import AllCycles from "../Pages/Home/allCycle/AllCycles";
import ContactUs from "../Pages/ContactUs/ContactUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allcycle",
        element: <AllCycles />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
      {
        path: "/wishlist",
        element: (
          <PrivatRoutes>
            {" "}
            <WishList />
          </PrivatRoutes>
        ),
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/catagory/:id",
        element: <Catagory />,
        loader: async ({ params }) => {
          return fetch(
            `${process.env.REACT_APP_databaseurl}/cycles/${params.id}`
          );
        },
      },
      {
        path: "/cycle/:id",
        element: <Details />,
        loader: async ({ params }) => {
          return fetch(
            `${process.env.REACT_APP_databaseurl}/cycle/${params.id}`
          );
        },
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivatRoutes>
        {" "}
        <DashBoardlayout></DashBoardlayout>{" "}
      </PrivatRoutes>
    ),
    errorElement: <DisplayError></DisplayError>,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivatRoutes>
            {" "}
            <MyBookings />{" "}
          </PrivatRoutes>
        ),
      },
      {
        path: "/dashboard/allbuyers",
        element: (
          <AdminRoutes>
            {" "}
            <AllBuyers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/allsellers",
        element: (
          <AdminRoutes>
            {" "}
            <AllSellers />
          </AdminRoutes>
        ),
      },
      {
        path: "/dashboard/myproduct",
        element: (
          <PrivatRoutes>
            <Myproducts />
          </PrivatRoutes>
        ),
      },
      {
        path: "/dashboard/addproduct",
        element: (
          <PrivatRoutes>
            {" "}
            <AddAPProduct />
          </PrivatRoutes>
        ),
      },
      {
        path: "/dashboard/cheakout/:id",
        element: <Payment></Payment>,
        loader: (params) =>
          fetch(`${process.env.REACT_APP_databaseurl}/payment/${params.id}`),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
