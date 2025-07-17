import React, { useState } from 'react'
import { use } from 'react';

const Todo = () => {

    const [inputdata, setInputData] = useState("");
    const [listdata, setListdata] = useState([]);
    const [editindex, setEditIndex] = useState(null);


    const addactivity = () => {
        if (inputdata.trim() === "") {
            alert("Enter Details");
            return;
        }



        // "Edit par click karte hi input me value dikhe, aur phir edit ka code chale"

        if (editindex !== null) {
            const updatedList = [...listdata];
            updatedList[editindex].text = inputdata;
            setListdata(updatedList);
            setEditIndex(null)
        }

        else {
            setListdata((listdata) => [...listdata, { text: inputdata, completed: false }]);
        }

        setInputData('');

    }

    const handledit = (index) => {
        setInputData(listdata[index].text); // Input box me value dikha do
        setEditIndex(index); // is index ko hum edit kar rahe hain
    }




    const handledelete = (index) => {
        const mohit = listdata.filter((ele, id) => {
            return index != id;
        })
        setListdata(mohit);
    }

    const handlecomplete = (index) => {
        const updatedList = [...listdata]
        updatedList[index].completed = !updatedList[index].completed
        setListdata(updatedList);
    }


    return (
        <div>
            <div className='min-h-screen flex justify-center items-center flex-col'>
                <h1 className='text-[2rem] font-bold'>Todo List</h1>
                <div className='w-1/2 bg-gray-500 h-auto py-4 px-4 flex items-center justify-center flex-col'>
                    <div className=' flex items-center justify-center w-full gap-4'>

                        <input type='text' placeholder='Enter Task'
                            value={inputdata}
                            onChange={(e) => {
                                setInputData(e.target.value);
                                console.log(inputdata)
                            }}

                            className='bg-white w-2/3 py-3 px-4 rounded mt-4  font-bold text-[1.2rem] placeholder:text-gray-800 placeholder:text-[1.2rem] placeholder:font-bold' />

                        <button onClick={addactivity} 
                        className='py-3 px-8 rounded mt-4 outline-none font-bold text-[1.2rem] bg-green-500'>
                            {editindex !== null ? 'Update' : 'Add'}
                        </button>
                    </div>

                    <div className='flex flex-col gap-8'>
                        {listdata.map((item, index) => (
                            <div key={index}
                                className='bg-white text-black px-4 py-2 my-2 rounded shadow font-bold text-[1.3rem] flex items-center justify-between'>
                                <div className='flex items-center gap-8'>
                                    {item.text}

                                    <div className=' flex flex-row items-center justify-center px-10'>

                                        <input
                                            type='checkbox'
                                            checked={item.completed}
                                            onChange={(e) => handlecomplete(index)}
                                            className="w-9 h-9 accent-green-500 cursor-pointer" />

                                        <button
                                            onClick={(e) => handledelete(index)}
                                            className='bg-red-500 px-6 py-1 flex gap-8 rounded text-white'>
                                            Delete</button>

                                        <button
                                            onClick={(e) => handledit(index)}
                                            className='bg-red-500 px-6 py-1 flex gap-8 rounded text-white'>
                                            Edit
                                        </button>

                                    </div>
                                </div>

                            </div>

                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todo
