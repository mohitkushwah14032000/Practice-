import React, { useEffect, useState } from 'react';

const Todolist = () => {
    const [inputData, setInputData] = useState("");
    const [listData, setListData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // ✅ Add या Edit दोनों का काम एक ही function कर रहा है
    const handleAddOrEdit = () => {
        if (!inputData.trim()) {
            alert("Enter Details");
            return;
        }

        if (editIndex !== null) {
            // 🔁 Edit mode में update करें
            const updatedList = listData.map((item, i) =>
                i === editIndex ? { ...item, text: inputData } : item
            );
            setListData(updatedList);
        } else {
            // ➕ नया task add करें
            setListData([...listData, { text: inputData, completed: false }]);
        }

        // 🔄 Cleanup (input reset + edit बंद)
        setInputData("");
        setEditIndex(null);
    };

    // ✏️ जब कोई item edit पर क्लिक करे
    const handleEdit = (index) => {
        setInputData(listData[index].text);
        setEditIndex(index);
    };

    // ❌ Delete task
    const handleDelete = (index) => {
        const filteredList = listData.filter((_, i) => i !== index);
        setListData(filteredList);
    };

    // ✅ Checkbox toggle: Done / Not Done
    const toggleComplete = (index) => {
        const updatedList = listData.map((item, i) =>
            i === index ? { ...item, completed: !item.completed } : item
        );
        setListData(updatedList);
    };

    // 🔍 Debug: हर बार listData बदले तो console में दिखाओ
    useEffect(() => {
        console.log(listData);
    }, [listData]);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10 px-4">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">📝 Todo List</h1>

            {/* ✅ Input + Button */}
            <div className="flex gap-2 w-full max-w-md mb-6">
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddOrEdit()}
                    className="flex-grow border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <button
                    onClick={handleAddOrEdit}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                >
                    {editIndex !== null ? "Update" : "Add"}
                </button>
            </div>

            {/* ✅ Task List */}
            <div className="w-full max-w-md bg-white shadow-md rounded p-4">
                {listData.length === 0 ? (
                    <p className="text-center text-gray-500">No tasks yet.</p>
                ) : (
                    <ul className="space-y-2">
                        {listData.map((item, index) => (
                            <li
                                key={index}
                                className="bg-gray-100 px-4 py-2 rounded text-gray-800 flex justify-between items-center"
                            >
                                {/* ✅ Left: Checkbox + Text */}
                                <div className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={item.completed}
                                        onChange={() => toggleComplete(index)}
                                        className="w-4 h-4 accent-green-500"
                                    />
                                    <span className={item.completed ? "line-through text-gray-500" : ""}>
                                        {item.text}
                                    </span>
                                </div>

                                {/* ✅ Right: Edit + Delete */}
                                <div className="space-x-2">
                                    <button
                                        onClick={() => handleEdit(index)}
                                        className="text-sm bg-yellow-400 hover:bg-yellow-500 px-2 py-1 rounded"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(index)}
                                        className="text-sm bg-red-500 hover:bg-red-600 px-2 py-1 rounded text-white"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Todolist;
