
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Cycles from '../Cycles/Cycles';
import HoatDeal from '../HotDeal/HoatDeal';

const Home = () => {
    const [cycles, SetCycles] = useState([]);
    useEffect(() => {
        fetch('cycles.json').then(res => res.json()).then(data => SetCycles(data))
    }, [])


    return (
        <div>
            <div className='h-96 py-10'>
                <Banner></Banner>
            </div>
            <div className='h-96 py-10'>
                <h1 className="text-2xl"> Hot Deals</h1>

                <HoatDeal></HoatDeal>
            </div>
            <div className=' py-10'>
                <h1 className="text-3xl underline uppercase font-bold bg-secondary p-2 rounded-xl m-4 text-info"> Catagories</h1>
                <div className='grid '>

                    <Link>
                        <button className='text-2xl font-bold text-primary'> Mountain Bike</button>

                    </Link>
                    <Link>

                        <button className='text-2xl font-bold text-primary'> Road  Bike</button>
                    </Link>
                    <Link>
                        <button className='text-2xl font-bold text-primary'> Hybrid Bike</button>


                    </Link>

                </div>

                <Cycles
                    cycles={cycles}
                ></Cycles>

            </div>
        </div>
    );
};

export default Home;