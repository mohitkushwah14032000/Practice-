import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    return (

        <div>
            <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
                <div className='font-bold text-[1.5rem] text-center space-x-4 '>
                    <h1>Count{count}</h1>
                    <button onClick={() => setCount(count + 1)}>Increment</button>
                    <button onClick={() => setCount(count - 1)}>Drement</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Counter
