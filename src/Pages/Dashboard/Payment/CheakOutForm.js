// import React, { useEffect, useState } from 'react';
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import toast from 'react-hot-toast';

// const CheckoutForm = ({ booking }) => {
//     const [cardError, setCardError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [processing, setProcessing] = useState(false);
//     const [transactionId, setTransactionId] = useState('');
//     const [clientSecret, SetClientSecret] = useState("");
//     const stripe = useStripe();
//     const elements = useElements();
//     const { price, email, name, _id } = booking;

//     // console.log(clientSecret)

//     useEffect(() => {
//         // Create PaymentIntent as soon as the page loads

//         fetch("http://localhost:5000/create-payment-intent", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify({ price }),
//         })
//             .then((res) => res.json())
//             .then((data) => SetClientSecret(data.clientSecret));
//     }, [price]);

//     const handleSubmit = async (event) => {
//         // Block native form submission.
//         event.preventDefault();

//         if (!stripe || !elements) {

//             return;
//         }

//         const card = elements.getElement(CardElement);

//         if (card == null) {
//             return;
//         }

//         // Use your card Element with other Stripe.js APIs
//         const { error, paymentMethod } = await stripe.createPaymentMethod({
//             type: 'card',
//             card,
//         });

//         if (error) {
//             console.log('[error]', error);
//             toast.error(error.message);
//             setCardError(error.message);
//         }
//         else {
//             console.log('[PaymentMethod]', paymentMethod);
//             setCardError('');
//         }
//         setSuccess('');
//         setProcessing(true);
//         const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//             clientSecret,
//             {
//                 payment_method: {
//                     card: card,
//                     billing_details: {
//                         name: name,
//                         email: email
//                     },
//                 },
//             },
//         );
//         if (confirmError) {
//             toast.error('confirmError', confirmError.message);
//             setCardError(confirmError.message);
//             return;

//         }
//         console.log('paymentIntent', paymentIntent)

//         if (paymentIntent.status === "succeeded") {
//             // console.log('cardInfo', card);
//             // database save
//             const payment = {
//                 price,
//                 transactionId: paymentIntent.id,
//                 email,
//                 bookingId: _id

//             }
//             fetch(`http://localhost:5000/payment`, {
//                 method: "POST",
//                 headers: {
//                     'content-type': 'application/json',
//                     authorization: `Bearer ${localStorage.getItem('accessToken')}`
//                 },
//                 body: JSON.stringify(payment)
//             }).then(res => res.json())
//                 .then(data => {
//                     console.log(data)
//                     if (data.insertedId) {
//                         setSuccess('congrates your payment done');
//                         setTransactionId(paymentIntent.id);
//                     }
//                 })
//         }
//         setProcessing(false);
//     };

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//                 <CardElement
//                     options={{
//                         style: {
//                             base: {
//                                 fontSize: '20px',
//                                 color: '#424770',
//                                 '::placeholder': {
//                                     color: '#aab7c4',
//                                 },
//                             },
//                             invalid: {
//                                 color: '#9e2146',
//                             },
//                         },
//                     }}
//                 />
//                 <button className=' btn-info btn-sm m-10' type="submit" disabled={!stripe || !clientSecret || processing}>
//                     Pay
//                 </button>
//             </form>

//             <p className="text-red-500">{cardError}</p>
//             {
//                 success && <div>
//                     <p className='text-green-500'>{success}</p>
//                     <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
//                 </div>
//             }

//         </>

//     );
// };

// // Make sure to call `loadStripe` outside of a component’s render to avoid
// // recreating the `Stripe` object on every render.

// // const App = () => {
// //     return (
// //         <Elements stripe={stripePromise}>
// //             <CheckoutForm />
// //         </Elements>
// //     );
// // };

// export default CheckoutForm;
