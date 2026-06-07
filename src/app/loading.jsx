import React from 'react';

const loading = () => {
    return (
        <div className='min-h-[85vh] w-full flex justify-center items-center'>
        <div className="global-loader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        </div>

    );
};

export default loading;