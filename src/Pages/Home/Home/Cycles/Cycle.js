import React from 'react';

const Cycle = ({ cycle }) => {
    // console.log(cycle)
    const { productTitle, userName, brand, condition, price, location, registered, usingDuration, sold, picture
    } = cycle;
    return (
        <div className="card w-full  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={picture} alt="cycle" className="rounded-xl h-80 w-80" />
            </figure>
            <div className="card-body text-start ">
                <h2 className="card-title text-2xl font-bold"> {productTitle} </h2>
                <p>Condition :{condition}</p>
                <p>Brand :{brand}</p>
                <p>Release Date :{registered}</p>
                <p>Using For :{usingDuration}</p>
                <p className='text-xl font-extrabold'>Price :{price}</p>
                <p>Location :{location}   <span className='text-red-600 font-extrabold bg-green-400 rounded-full p-2 text-sm  '> {sold ? 'not available' : 'available'}  </span> </p>
                <p>Posted By :{userName}</p>

                <div className="card-actions">
                    <button className="btn btn-primary">Booked Now</button>
                </div>
            </div>
        </div>
    );
};

export default Cycle;