import React from 'react';

const Banner = () => {
    return (
        <div className="carousel w-full h-96">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='' src="https://images.unsplash.com/photo-1529422643029-d4585747aaf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-full" />
                <div className='absolute left-5 top-5'>
                    <h1 className='text-white text-3xl'>Second Hand Cycle All Bangladesh</h1>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide2" className="carousel-item relative w-full">
                <img alt='' src="https://images.unsplash.com/photo-1523798146182-2375d53e1e5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80" className="w-full h-full" />

                <div className='absolute left-5 top-5'>
                    <h1 className='text-white text-3xl'>Second Hand Cycle All Bangladesh</h1>
                </div>

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <img alt='' src="https://images.unsplash.com/photo-1570865116909-d358c47f1806?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-full h-full" />
                <div className='absolute left-5 top-5'>
                    <h1 className='text-white text-3xl'>Second Hand Cycle All Bangladesh</h1>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <img alt='' src="https://images.unsplash.com/photo-1624522008901-55790cc6ea2f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" className="w-full" />
                <div className='absolute left-5 top-5'>
                    <h1 className='text-white text-3xl'>Second Hand Cycle All Bangladesh</h1>

                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;