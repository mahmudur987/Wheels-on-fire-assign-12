import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Catagory from "../Pages/Home/Catagories/Catagory";
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

        ]


    },

])
