
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { authContext } from '../../Context/UserContext';

const BookingModal = ({ cycle, SetopenModal }) => {
    // console.log(cycle)
    const { productTitle, _id, price, } = cycle;
    const { user } = useContext(authContext);
    // console.log(user)
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target;
        const productName = form.productName.value;
        const price = form.price.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const meetingLocation = form.meetingLocation.value;

        const booking = { productName, price, name, email, phone, meetingLocation, productId: _id }

        console.log(booking)
        fetch(`${process.env.REACT_APP_databaseurl}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(booking),
        }).then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.acknowledged) {
                    toast.success('booking confirm successfully')
                    fetch(`${process.env.REACT_APP_databaseurl}/cycle/${_id}`, {
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    }).then(res => res.json())
                        .then(data => {
                            console.log(data)
                            SetopenModal(false)
                        });

                }

            })


    }

    return (
        <div>

            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <form onSubmit={handleSubmit} className="modal-box grid">
                    <h3 className="font-bold text-lg"> Booking  Confirmation</h3>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Product name {_id}</span>
                        </label>
                        <input defaultValue={productTitle} readOnly type="text" placeholder="product name" name='productName' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">price</span>
                        </label>
                        <input defaultValue={price} readOnly type="text" placeholder="price" name='price' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input defaultValue={user?.displayName} readOnly type="text" placeholder="your name" name='name' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">your Email</span>
                        </label>
                        <input defaultValue={user?.email} type="text" placeholder="Your email" name='email' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">your Phone</span>
                        </label>
                        <input type="text" placeholder="Your phone" required name='phone' className="input input-bordered w-full max-w-xs" />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Meeting Location</span>
                        </label>
                        <input type="text" placeholder="meeting location" name='meetingLocation' required className="input input-bordered w-full max-w-xs" />

                    </div>


                    <div className="modal-action">
                        <input className='btn btn-primary' type="submit" value="submit" />
                        <label htmlFor="my-modal-6" className="btn btn-primary">cancel</label>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;