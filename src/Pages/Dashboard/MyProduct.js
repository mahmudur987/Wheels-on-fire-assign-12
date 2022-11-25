
import React from 'react';
import toast from 'react-hot-toast';

const MyProduct = ({ myproduct, handleDelete }) => {
    const { productTitle, picture, registered, sold, _id } = myproduct




    const handleAddToPromo = () => {
        fetch(`${process.env.REACT_APP_databaseurl}/promos`, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(myproduct),
        }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('your item added to Hot zone')
                }
            })
    }



    // console.log(myproduct)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img className='h-80 w-full' src={picture} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title"> {productTitle} </h2>
                <p>publishd date  : {registered} </p>
                <p className=' font-bold text-xl text-lime-50 bg-red-500'>   {sold ? 'Booked' : 'Available'} </p>
                <div className=" ">
                    <p> Click Promotion for adding item to Hot zone for Queek sell
                        <button onClick={handleAddToPromo} className="btn-sm btn btn-primary"> Promotion  </button>

                    </p>
                    <div className="divider">OR</div>
                    <button onClick={() => handleDelete(_id)} className="btn-sm btn btn-primary"> Remove items</button>
                </div>
            </div>
        </div>
    );
};

export default MyProduct;