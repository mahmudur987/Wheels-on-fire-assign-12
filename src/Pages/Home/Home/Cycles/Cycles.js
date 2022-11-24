import React from 'react';
import Cycle from './Cycle';

const Cycles = ({ cycles }) => {


    // console.log(cycles)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

            {
                cycles.slice(0, 3).map((cycle, idx) => <Cycle
                    key={idx}
                    cycle={cycle}

                ></Cycle>)
            }


        </div>
    );
};

export default Cycles;