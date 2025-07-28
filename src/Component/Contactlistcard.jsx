import React from 'react'

const Contactlistcard = ({ updatedlist }) => {



    return (
        <div className='flex items-center justify-center'>
            <div className='p-4 border rounded shadow flex items-center justify-center flex-col'>
                <h2 className='text-3xl font-bold text-center text-green-600 mt-1'>Contactcard</h2>
                {updatedlist.map((item, index) => (
                    <div key={index}>
                        <h2 className='text-2xl mt-1'>Name:{item.name}</h2>
                        <h2 className='text-2xl mt-1'>Number:{item.number}</h2>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Contactlistcard
