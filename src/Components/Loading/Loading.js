import React from 'react';

const Loading = () => {
    return (
        <div class="flex items-center justify-center space-x-2">

            <div className="spinner-border border-black animate-spin inline-block w-12 h-12 border-4 rounded-full" role="status">
                <span className="visually-hidden text-red-400"> O</span>
            </div>

        </div>
    );
};

export default Loading;