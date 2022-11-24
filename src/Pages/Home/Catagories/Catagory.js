import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cycle from '../Cycles/Cycle';

const Catagory = () => {
    const cycles = useLoaderData()
    // console.log(cycles)
    return (
        <div>

            <h1 className='text-4xl font-bold text-neutral my-20 bg-primary p-5 rounded-2xl w-9/12 mx-auto'>
                {
                    cycles[0].catagoryName
                }

            </h1>

            <div className='grid md:grid-cols-2 lg:grid-cols-3' >
                {
                    cycles.map(cycle => <Cycle
                        key={cycle._id}
                        cycle={cycle}


                    ></Cycle>)
                }
            </div>
        </div >
    );
};

export default Catagory;