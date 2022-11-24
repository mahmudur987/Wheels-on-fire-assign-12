
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Cycles from '../Cycles/Cycles';
import HoatDeal from '../HotDeal/HoatDeal';

const Home = () => {
    const [cycles, SetCycles] = useState([]);
    const [catagories, SetCatagories] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/cycles').then(res => res.json()).then(data => SetCycles(data))
    }, [])
    useEffect(() => {
        fetch('http://localhost:5000/catagories').then(res => res.json()).then(data => SetCatagories(data))
    }, [])


    console.log(catagories)

    return (
        <div>
            <div className='h-96 py-10'>
                <Banner></Banner>
            </div>
            <div className='h-96 py-10'>
                <h1 className="text-2xl"> Hot Deals</h1>

                <HoatDeal></HoatDeal>
            </div>
            <div className=' py-10 h-80 border border-secondary rounded-md'>
                <h1 className="text-3xl underline uppercase font-bold bg-secondary p-2 rounded-xl m-4 text-info"> Catagories</h1>
                <div className='grid '>

                    {
                        catagories.map(catagory => <Link
                            key={catagory._id}
                            to={`catagory/${catagory.catagoryId}`}

                        >  <button className='text-2xl font-bold text-primary'>{catagory.catagoryName
                        } </button>

                        </Link>)
                    }


                </div>


            </div>

            <div className='border border-black'>
                <h1 className="text-3xl underline uppercase font-bold bg-red-400 p-2 rounded-xl m-4 text-info">All  Cycles</h1>
                <Cycles
                    cycles={cycles}
                ></Cycles>

            </div>



        </div>
    );
};

export default Home;