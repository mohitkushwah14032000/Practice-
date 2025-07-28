import React, { useState } from 'react'

const Loginform = () => {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className='min-h-screen flex items-center justify-center flex-col'>
            <div className='bg-green-500 py-4 px-12 rounded flex items-center flex-col'>
                <div className=''>
                    <button
                        onClick={() => setIsLogin(true)}
                        className={`${isLogin ? "bg-sky-500 text-white" : "bg-white text-green-500"}
                        font-semibold py-2 px-12 rounded text-[1.3rem]`}
                    >Login</button>
                    <button
                        onClick={() => setIsLogin(false)}
                        className={`${!isLogin ? "bg-sky-500 text-white" : "bg-white text-green-500"} 
                        font-semibold py-2 px-12 rounded text-[1.3rem]`}
                    >Signup</button>
                </div>

                <div className='mt-8 bg-white py-2 rounded shadow w-[300px]'>
                    {isLogin ? (

                        <div className='flex items-center flex-col justify-center rounded'>
                            <h1 className='px-5 text-[2rem] font-bold'>Login Form</h1>
                            <input type='text' placeholder='Email'
                                className='border mt-2 mx-5 px-2 py-2 w-[95%] rounded outline-none placeholder:text-[1.2rem]' />

                            <input type='password' placeholder='Password'
                                className='border mt-2 mx-5 px-2 py-2 w-[95%] rounded outline-none  placeholder:text-[1.2rem]' />
                            <div className='w-full flex items-end px-7 py-3 flex-col'>
                                <a href='#' className='text-[1.4rem] text-blue-500 hover:underline'>
                                    Forgot Password?
                                </a>
                                <button className='w-full px-6 py-1 font-semibold text-[1.4rem] bg-blue-600 text-white rounded mt-3'>Login</button>
                                <p className='mt-3 w-full flex item-center justify-center  text-[1.1rem]'>
                                    Not a member ? <a href='#' className='text-blue-500' onClick={() => setIsLogin(false)}>Signup</a></p>
                            </div>

                        </div>

                    ) : <div className='flex items-center flex-col justify-center rounded'>
                        <h1 className='px-5 text-[2rem] font-bold'>Signup Form</h1>
                        <input type='text' placeholder='Email'
                            className='border mt-2 mx-5 px-2 py-2 w-[95%] rounded outline-none placeholder:text-[1.2rem]' />
                        <input type='text' placeholder='Password'
                            className='border mt-2 mx-5 px-2 py-2 w-[95%] rounded outline-none placeholder:text-[1.2rem]' />

                        <input type='password' placeholder='Confirm Password'
                            className='border mt-2 mx-5 px-2 py-2 w-[95%] rounded outline-none  placeholder:text-[1.2rem]' />

                        <div className='w-[95%] flex items-end  flex-col'>
                            <button className='w-full px-6 py-1 font-semibold text-[1.4rem] bg-blue-600 text-white rounded mt-3'>Signup</button>
                            <p className='mt-3 w-full flex item-center justify-center  text-[1.1rem]'>
                                Have you Registerd ? <a href='#' className='text-blue-500' onClick={() => setIsLogin(true)}>Login</a></p>
                        </div>

                    </div>}



                </div>
            </div>
        </div>
    )
}

export default Loginform
