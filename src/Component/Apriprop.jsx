import React from 'react'

const Apriprop = ({ definedata }) => {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {definedata.map((item) => (
                <div key={item.id} className='font-semibold text-[1.1rem]'>
                    <p>{item.name}</p>
                    <h1>{item.username}</h1>

                </div>
            ))}
        </div>
    )
}

export default Apriprop
