import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useAdmin } from '../Components/Hooks/useAdmin';
import { useSeller } from '../Components/Hooks/useSeller';
import { authContext } from '../Context/UserContext';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashBoardlayout = () => {
    const { user } = useContext(authContext);
    const [seller] = useSeller(user?.email);
    const [admin] = useAdmin(user.email);
    // console.log(admin)








    return (
        <div>
            <Navbar></Navbar>


            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

                <div className="drawer-content  mt-10">


                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to={'/dashboard'}>My Orders</Link></li>
                        {
                            (seller || admin) &&
                            <>
                                <li><Link to={'/dashboard/Addproduct'}>Add product</Link></li>
                                <li><Link to={'/dashboard/myproduct'}>My product</Link></li>


                            </>

                        }

                        {
                            admin &&
                            <>
                                <li><Link to={'/dashboard/allbuyers'}>  All Buyers</Link></li>
                                <li><Link to={'/dashboard/allsellers'}>  All Sellers</Link></li>
                            </>
                        }



                    </ul>

                </div>
            </div>


        </div>
    );
};

export default DashBoardlayout;