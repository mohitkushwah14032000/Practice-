import React from 'react';

const Servicecard = ({ service}) => {
    const { work, Discription } = service;

    return (
        <div className='mb-4 p-4 border rounded shadow flex items-center justify-center flex-col'>
            <h2 className='text-2xl font-bold text-center text-green-600 mb-4'>Servicescard</h2>
            <div className="mt-3 text-2xl flex items-center justify-center flex-col">
                <h2>Work: {work}</h2>
                <h2>Discription: {Discription}</h2>
            </div>
        </div>
    );
};

export default Servicecard;
