import React from 'react';
import { useRouteError } from 'react-router-dom';

const DisplayError = () => {


    const error = useRouteError()


    return (
        <div className='h-[900px] display flex  flex-col justify-center items-center'>
            <p className='text-red-500 text-5xl'>Something wrong</p>
            <p className='text-red-500 text-5xl'> Data {error.statusText || error.message}</p>
            <h4 className='text-3xl'>please <button>sign out</button> and log back in </h4>

        </div>
    );
};

export default DisplayError;