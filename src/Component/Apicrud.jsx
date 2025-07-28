import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Apicrud = () => {
    const [post, setPost] = useState([]);
    const [newTitle, setNewTitle] = useState("");
    const [editpost, setEditpost] = useState(null);

    const Data_URL = 'https://jsonplaceholder.typicode.com/posts';

    const fetchpost = async () => {
        try {
            const bro = await axios.get(Data_URL);
            console.log(bro.data);
            setPost(bro.data);
        } catch (error) {
            console.log("Error in fetch data", error);
        }
    };

    useEffect(() => {
        fetchpost();
    }, []);

    const handlesubmit = async () => {
        try {
            if (!newTitle.trim()) {
                alert("Enter Task");
                return;
            }

            const mk = await axios.post(Data_URL, {
                title: newTitle,
                body: "This is Test Body",
                userId: 1, // ✅ spelling fix
            });

            console.log(mk.data);

            setPost([mk.data, ...post]);
            setNewTitle(""); // ✅ input clear
        } catch (error) {
            console.log("Error in Data", error);
        }
    };

    const updatepost = async () => {
        try {
            const mohit = await axios.patch(`${Data_URL}/${editpost.id}`, {
                title: newTitle,
                body: "This is Test Body",
                userId: 1,
            });

            setPost(post.map((item) =>
                item.id === editpost.id ? mohit.data : item
            ));

            setEditpost(null);
            setNewTitle("")

        } catch (error) {
            console.log("Erroe", error)
        }
    }

    const handledit = (post) => {
        setEditpost(post)
        setNewTitle(post.title);
    }

    const deletepost = async (id) => {
        try {
            await axios.delete(`${Data_URL}/${id}`);
            setPost(post.filter((p) => p.id!==id))
        } catch (error) {
            console.log("Erroe", error)
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-xl">
                <h1 className='text-2xl font-bold mb-4 text-center text-blue-700'>Post Titles</h1>

                {/* Input and Add Button */}
                <div className="flex gap-3 mb-5">
                    <input
                        type='text'
                        placeholder='Enter Your Task'
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    <button
                        onClick={handlesubmit}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        {editpost ? "update" : "Add"}
                    </button>
                </div>

                {/* Post List */}
                <ul className='space-y-4'>
                    {post.slice(0, 5).map((item) => (
                        <li
                            key={item.id}
                            className="p-4 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
                        >
                            <p className="font-semibold text-gray-800 mb-2">{item.title}</p>
                            <div className="flex gap-2">
                                <button className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500"
                                    onClick={(e) => handledit(item)}
                                >Edit</button>
                                <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => deletepost(item.id)}
                                >Delete</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Apicrud;
