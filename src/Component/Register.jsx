import React, { useEffect, useState } from 'react'

const Register = () => {
    // यह structure अक्सर React forms के साथ use होता है।
    // React में हम ऐसा object को useState के साथ manage करते हैं:

    const data = { name: "", email: "", password: "" };
    console.log(data)
    const [inputdata, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)

    useEffect(() => {
        console.log(flag)
    })

    const handledata = (e) => {
        setInputData({ ...inputdata, [e.target.name]: e.target.value })
        console.log(inputdata)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!inputdata.name || !inputdata.email || !inputdata.password) {
            alert("Fill all files")
        } else {
            setFlag(true);             // ✅ show message
            setInputData(data);        // ✅ clear form

        }
    }



    return (
        <div className='min-h-screen flex items-center justify-center flex-col '>
            <pre>
                {(flag) && <h2 className='font-bold text-[1.3rem] bg-gray-300 py-2 px-3'>
                    Hello {inputdata.name},you have registerd successfully</h2>}
            </pre>

            <form className='bg-sky-500 py-4 px-4 font-bold text-white mt-8' onSubmit={handlesubmit}>
                <h1 className='text-[2rem]'>Registration Form</h1>
                <div>
                    <input
                        type='text'
                        placeholder='Enter you Name'
                        name='name'
                        value={inputdata.name}
                        onChange={handledata}
                        className='mt-4 w-full py-3 px-2 placeholder:text-[1.2rem] placeholder:text-white border border-gray-400 
                                     border-1 outline-none rounded focus:ring-2 '
                    />
                    <input
                        type='text'
                        placeholder='Enter you Email'
                        name='email'
                        value={inputdata.email}
                        onChange={handledata}
                        className='mt-4 w-full py-3 px-2 placeholder:text-[1.2rem] placeholder:text-white border border-gray-400 
                                     border-1 outline-none rounded focus:ring-2 '
                    />
                    <input
                        type='text'
                        placeholder='Enter you Password'
                        name='password'
                        value={inputdata.password}
                        onChange={handledata}
                        className='mt-4 w-full py-3 px-2 placeholder:text-[1.2rem] placeholder:text-white border border-gray-400 
                                     border-1 outline-none rounded focus:ring-2 '
                    />

                    {/* By default, <button> का type होता है "submit", लेकिन ये HTML standard behavior है.
                        React में अगर आप गलती से type नहीं देते और multiple buttons हों, तो confusion हो सकता है। */}

                    <button type='submit' className='mt-4 w-full py-3 px-2 placeholder:text-[1.2rem] placeholder:text-white border border-gray-400 outline-none rounded focus:ring-2 '>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
