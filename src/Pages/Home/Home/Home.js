
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Cycles from '../Cycles/Cycles';
import HoatDeal from '../HotDeal/HoatDeal';
import Services from '../Services/Services';

const Home = () => {
    const [cycles, SetCycles] = useState([]);
    const [catagories, SetCatagories] = useState([])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_databaseurl}/cycles`).then(res => res.json()).then(data => SetCycles(data))
    }, [])
    useEffect(() => {
        fetch(`${process.env.REACT_APP_databaseurl}/catagories`).then(res => res.json()).then(data => SetCatagories(data))
    }, [])


    return (
        <div>
            <div className='h-96 py-10'>
                <Banner></Banner>
            </div>
            <div className=' py-10'>
                <h1 className="text-3xl font-bold text-primary text-center   "> Hot Deals</h1>

                <HoatDeal></HoatDeal>
            </div>
            <div className=' py-10 border border-secondary m-5 text-center rounded-md'>
                <h1 className="text-3xl underline uppercase font-bold bg-secondary p-2 rounded-xl m-4 text-info text-center"> Catagories</h1>
                <div className='grid md: grid-cols-2 lg:grid-cols-3 lg:gap-5'>

                    {
                        catagories.map(catagory => <div
                            key={catagory._id}

                        >
                            <img className=' w-full lg:w-9/12 h-80' src={catagory.image} alt="" />

                            <Link to={`catagory/${catagory.catagoryId}`} >
                                <button className='text-2xl font-bold text-primary'>{catagory.catagoryName} </button>
                            </Link>

                        </div>)
                    }


                </div>


            </div>

            <div className='border border-black'>
                <h1 className="text-3xl underline uppercase font-bold bg-red-400 p-2 rounded-xl m-4 text-info text-center">All  Cycles</h1>
                <Cycles
                    cycles={cycles}
                ></Cycles>

            </div>

            <div className='mt-10 border'>
                <h1 className="text-3xl underline uppercase font-bold bg-cyan-400 p-2 rounded-xl m-4 text-info text-center"> OUR SERVICES </h1>

                <Services></Services>
            </div>

        </div>
    );
};

export default Home;