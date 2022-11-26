
import { createBrowserRouter } from "react-router-dom";
import DashBoardlayout from "../Layouts/DashBoardlayout";
import Main from "../Layouts/Main";
import AddAPProduct from "../Pages/Dashboard/AddAPProduct";
import AllBuyers from "../Pages/Dashboard/AllBuyers";
import AllSellers from "../Pages/Dashboard/AllSellers";
import MyBookings from "../Pages/Dashboard/MyBookings";
import Myproducts from "../Pages/Dashboard/Myproducts";
import Catagory from "../Pages/Home/Catagories/Catagory";
import Details from "../Pages/Home/Cycles/Details";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import NotFound from "../Pages/NotFound/NotFound";
import DisplayError from "../Pages/Shared/DispalayError/DisplayError";
import Signup from "../Pages/Signup/Signup";
import PrivatRoutes from "./PrivetRoutes";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: async ({ params }) => {
                    return fetch(`${process.env.REACT_APP_databaseurl}/cycles/${params.id}`)
                }

            },
            {
                path: '/cycle/:id',
                element: <Details></Details>,
                loader: async ({ params }) => {
                    return fetch(`${process.env.REACT_APP_databaseurl}/cycle/${params.id}`)
                }

            },
            {
                path: '*',
                element: <NotFound></NotFound>
            },

        ]
    },
    {
        path: '/dashboard',
        element: <PrivatRoutes> <DashBoardlayout></DashBoardlayout> </PrivatRoutes>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>

            },
            {
                path: '/dashboard/allbuyers',
                element: <AllBuyers></AllBuyers>

            },
            {
                path: '/dashboard/allsellers',
                element: <AllSellers></AllSellers>

            },
            {
                path: '/dashboard/myproduct',
                element: <Myproducts></Myproducts>

            },
            {
                path: '/dashboard/addproduct',
                element: <AddAPProduct></AddAPProduct>

            },
            {
                path: '*',
                element: <NotFound></NotFound>

            },
        ]
    }, {
        path: '*',
        element: <NotFound></NotFound>
    }

])
