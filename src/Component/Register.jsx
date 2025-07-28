import React, { use, useState } from 'react'

const Register = () => {

    const data = { name: "", email: "", password: "" }
    const [inputdata, setinputData] = useState(data);
    const [flag, setFlag] = useState(false);
    const [submittedName, setSubmittedName] = useState("");  // Save name before resetting


    const handledata = (e) => {
        setinputData({ ...inputdata, [e.target.name]: e.target.value })
        console.log(inputdata)
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (!inputdata.name || !inputdata.email || !inputdata.password) {
            alert("Fill Data")
        }
        else {
            setSubmittedName(inputdata.name)
            setFlag(true)
            setinputData(data)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            {/* preformatted text dikhane ke liye kiya jata hai. Jab aap kisi text ko <pre> tag ke andar likhte hain, to 
                browser us text ko exactly waise hi render karta hai jaise aapne likha */}
            <pre>
                {(flag) && <h2 className='font-bold text-[1.3rem] bg-gray-300 py-2 px-3'>
                    hello , {submittedName},You have Register sucessfully
                </h2>
                }
            </pre>
            <form className='bg-sky-500 py-4 px-4 font-bold text-white mt-8' onSubmit={handlesubmit}>
                <h1 className='text-[2rem]'>Registration Form</h1>
                <div className='flex flex-col space-y-6 mt-6'>

                    {/* name से input की पहचान होती है — ये किस काम के लिए है।
                    इससे form data को process करना आसान होता है — चाहे वो backend हो या JavaScript/React।
                     */}
                    <input type='text'
                        placeholder='Enter your name'
                        name='name'
                        value={inputdata.name}
                        onChange={handledata}
                        className='mt-2 w-full py-2 px-2 placeholder:text-[1.2rem] placeholder:text-white border border-gray-400 
                                     border-1 outline-none rounded focus:ring-2 '
                    />
                    <input type='text'
                        placeholder='Enter your Email'
                        name='email'
                        value={inputdata.email}
                        onChange={handledata}
                        className='mt-2 w-full py-2 px-2 placeholder:text-[1.2rem] placeholder:text-white border border-gray-400 
                                     border-1 outline-none rounded focus:ring-2 '
                    />
                    <input type='text'
                        placeholder='Enter your Password'
                        name='password'
                        value={inputdata.password}
                        onChange={handledata}
                        className='mt-2 w-full py-2 px-2 placeholder:text-[1.2rem] placeholder:text-white border border-gray-400 
                                     border-1 outline-none rounded focus:ring-2 '
                    />
                    <button type='submit'
                        className='mt-4 w-full py-3 px-2 placeholder:text-[1.2rem] placeholder:text-white 
                    border border-gray-400 outline-none rounded focus:ring-2 '>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register
