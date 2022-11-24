import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { authContext } from '../../Context/UserContext';

const MyBookings = () => {

    const { user } = useContext(authContext);
    const { data: bookings = [] } = useQuery({
        queryKey: ['userbooking', `${user.email}`],
        queryFn: () => fetch(`${process.env.REACT_APP_databaseurl}/userbooking?email=${user.email}`)
            .then(res => res.json()
            )

    })
    console.log(bookings)


    return (
        <div className="overflow-x-auto flex-1 w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>no</th>
                        <th>Product Name & Id</th>
                        <th> Your Name & address</th>
                        <th>Confirm/Delete  </th>
                    </tr>
                </thead>
                <tbody>


                    {
                        bookings.map((booking, idx) => <tr
                            key={idx}

                            className="hover">
                            <th>{idx + 1}</th>
                            <td>
                                <p className='font-bold'>{booking.productName}</p>
                                <p className='font-bold'>{booking.price}</p>
                                <p>{booking._id.slice(0, 12)}</p>

                            </td>
                            <td>
                                <p>{booking.name}</p>
                                <p>{booking.phone}</p>
                                <p>{booking.email}</p>
                                <p>Meeting Point: {booking.meetingLocation}</p>

                            </td>
                            <td>
                                <button className='btn btn-primary btn-sm'>Confirm</button>
                                <button className='btn btn-info m-1 btn-sm'>Delete</button>
                            </td>
                        </tr>
                        )
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;