import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Catagory = () => {
    const cycles = useLoaderData()
    console.log(cycles)
    return (
        <div>
            this is catagories
        </div>
    );
};

export default Catagory;