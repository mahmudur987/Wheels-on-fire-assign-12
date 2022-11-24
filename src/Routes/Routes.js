import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import DashBoardlayout from "../Layouts/DashBoardlayout";
import Main from "../Layouts/Main";
import MyBookings from "../Pages/Dashboard/MyBookings";
import Catagory from "../Pages/Home/Catagories/Catagory";
import Details from "../Pages/Home/Cycles/Details";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import DisplayError from "../Pages/Shared/DispalayError/DisplayError";
import Signup from "../Pages/Signup/Signup";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        // errorElement: <DisplayError></DisplayError>,
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

        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardlayout></DashBoardlayout>,
        children: [
            {
                path: '/dashboard',
                element: <MyBookings></MyBookings>

            }
        ]
    }

])
