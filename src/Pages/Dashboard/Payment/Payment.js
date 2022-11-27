import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheakOutForm';


const stripePromise = loadStripe('pk_test_51M68T3DQNKvqDUnhFd6Bh156zYT1Atbavwqp7rEB4fpXFFWF7QRsKSGecqE5nQfOqKHdziT92EFaldWlAKk8avVF001ITOglIp');
// console.log(process.env.REACT_APP_STRIPE_PK)
const Payment = () => {
    // const booking = useLoaderData();
    // const { time, price, treatmentName } = booking
    // // console.log(booking)



    return (
        <div>
            {/* <h1 className='text-2xl text-primary'>Payment for {treatmentName}</h1> */}

            {/* <p className='text-2xl'>please pay {price} for your appointment on {booking.date}  at {time}</p> */}

            <div className='text-2xl bg-sky-100 m-8 w-9/12'>

                <Elements stripe={stripePromise}>
                    <CheckoutForm
                    // booking={booking}

                    ></CheckoutForm>
                </Elements>

            </div>


        </div>
    );
};

export default Payment;