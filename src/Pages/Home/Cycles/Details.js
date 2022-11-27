import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import { authContext } from '../../../Context/UserContext';
import BookingModal from '../../Bookings/BookingModal';

const Details = () => {

    const [openModal, SetopenModal] = useState(true)
    const cycle = useLoaderData();
    const { user } = useContext(authContext)
    // console.log(cycle)
    const { productTitle, catagoryName
        , userName, brand, condition, price, location, registered, usingDuration, sold, picture, about, phone, _id
    } = cycle;
    // console.log(cycle)
    const handleAddToWishList = (id) => {
        fetch(`${process.env.REACT_APP_databaseurl}/wishlist/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: user.email }),
        }).then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    toast.success('this item aadded to wish list')
                }
            })

    }




    return (
        <div className="card card-compact w-3/4 mx-auto  bg-base-100 shadow-xl">
            <figure><img className='h-[500px] w-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body text-start font-bold">
                <h2 className="card-title text-2xl"> {productTitle} </h2>

                <p> Listed : {registered}</p>
                <br />
                <p> Condition: {condition}</p>
                <p> Using Time: {usingDuration}</p>
                <p> Brand: {brand}</p>
                <p className=''> Details: <br />{about}</p>
                <br />
                <br />

                <p> Catagory: {catagoryName}</p>
                <p> Location: {location}</p>
                <p className={sold ? 'text-red-600 text-xl' : "available"}>STOK:   {sold ? 'booked' : "available"}  </p>
                <p className='text-xl'> Price: {price}</p>
                <p> Sell By: {userName}</p>
                <p> Phone Number: {phone}</p>


                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToWishList(_id)} className='btn btn-info'> Add to Wish list </button>

                    <label htmlFor="my-modal-6" className="btn btn-primary">Booked Now</label>
                </div>
            </div>
            {
                openModal && <BookingModal
                    cycle={cycle}
                    SetopenModal={SetopenModal}
                ></BookingModal>
            }

        </div>
    );
};

export default Details;