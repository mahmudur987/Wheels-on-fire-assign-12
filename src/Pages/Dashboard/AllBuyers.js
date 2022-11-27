import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllBuyers = () => {

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch(`${process.env.REACT_APP_databaseurl}/users?userType=Buyer`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())

    })

    // console.log(users)


    return (
        <div>
            <h1 className="text-3xl text-center">All BUYERS</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th> User Type </th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, idx) => <tr
                                key={user._id}

                            >
                                <th>{idx + 1}</th>
                                <td><img className='w-10 rounded-full' src={user.photoURL} alt="" /> {user.displayName} </td>
                                <td>  {user.userType} </td>
                                <td>Red</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;