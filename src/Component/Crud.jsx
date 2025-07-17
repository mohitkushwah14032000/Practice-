import React, { useState } from 'react'

const Crud = () => {

    const [inputdata, setInputData] = useState('')
    const [listdata, setListData] = useState([])
    const [editindex, setEditIndex] = useState(null)


    const addactivity = () => {

        // input data abhi by default khali hai yani abhi alert show karga aur ! use true krega

        if (!inputdata.trim()) {
            alert('Enter Details');
            return;
        }


        if (editindex !== null) {

            const updatedList = [...listdata];
            updatedList[editindex].text = inputdata;
            setListData(updatedList);
            setEditIndex(null)

        }

        else {
            setListData((listdata) => [...listdata, { text: inputdata, completed: false }]);
        }

        setInputData("")

    }

    const handledit = (index) => {
        setInputData(listdata[index].text); // चुना गया task input में डालो
        setEditIndex(index);                // index को edit mode के लिए सेट करो
    };

    const handledelete = (index) => {
        const mohit = listdata.filter((ele, id) => {
            return index != id;
        
        })

        setListData(mohit);

    }



    return (
        <div className='min-h-screen flex justify-center items-center flex-col'>
            <h1 className='text-[2rem] font-bold'>Todo List</h1>
            <div className='w-1/2 bg-gray-500 h-auto py-4 px-4 flex items-center justify-center flex-col'>
                <div className=' flex items-center justify-center w-full gap-4'>

                    <input
                        type='text'
                        placeholder='Enter Task'
                        value={inputdata}
                        onChange={(e) => {
                            setInputData(e.target.value)
                            console.log(inputdata)
                        }}
                        className='bg-white w-2/3 py-3 px-4 rounded mt-4  font-bold text-[1.2rem] 
                        placeholder:text-gray-800 placeholder:text-[1.2rem] placeholder:font-bold'
                    />

                    <button
                        onClick={addactivity}
                        className='py-3 px-8 rounded mt-4 outline-none font-bold text-[1.2rem] bg-green-500'>
                        {editindex !== null ? 'Update' : 'Add'}
                    </button>



                </div>






                <div className='flex flex-col'>
                    {listdata.map((item, index) => (
                        <div key={index}
                            className='bg-white text-black  px-4 py-2 my-2 rounded shadow font-bold text-[1.3rem] flex items-center justify-between'>
                            <div className='flex items-center gap-8 w-full'>
                                {item.text}

                                <div className=' flex flex-row items-center justify-center px-10'>
                                    <button
                                        onClick={(e) => handledit(index)}
                                        className='bg-blue-500 px-6 py-1 flex gap-8 rounded text-white'
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={(e) => handledelete(index)}
                                        className='bg-red-500 px-6 py-1 flex gap-8 rounded text-white'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Crud
