import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Apicrud = () => {
  const [post, setPost] = useState([]);
  const [inputdata, setInputData] = useState('');
  const [editPostId, setEditPostId] = useState(null); // ✅ Correct edit state
  const Data_URL = 'https://jsonplaceholder.typicode.com/posts';

  const fetchUser = async () => {
    try {
      const res = await axios.get(Data_URL);
      setPost(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handlesubmit = async () => {
    try {
      if (!inputdata.trim()) {
        alert('Enter Details');
        return;
      }

      if (editPostId === null) {
        // Add New Post
        const res = await axios.post(Data_URL, {
          title: inputdata,
          body: 'This is test body',
          userId: 1,
        });
        setPost([res.data, ...post]);
      } else {
        // Edit Existing Post
        const res = await axios.put(`${Data_URL}/${editPostId}`, {
          id: editPostId,
          title: inputdata,
          body: 'Updated body',
          userId: 1,
        });
        const updatedList = post.map((item) =>
          item.id === editPostId ? { ...item, title: res.data.title } : item
        );
        setPost(updatedList);
        setEditPostId(null); // reset edit mode
      }

      setInputData('');
    } catch (error) {
      console.error('Error submitting:', error);
    }
  };

  const handledit = (item) => {
    setEditPostId(item.id);
    setInputData(item.title); // fill input with current title
  };

  const deletePost = async (id) => {
    try {
      await axios.delete(`${Data_URL}/${id}`);
      setPost(post.filter((p) => p.id !== id));
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Latest Posts</h2>
        <p className="text-sm text-gray-600">Add / Edit / Delete using API</p>
      </div>

      {/* Input + Button */}
      <div className="mb-6 flex gap-2 px-10">
        <input
          type="text"
          placeholder="Enter Details"
          value={inputdata}
          onChange={(e) => setInputData(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handlesubmit}
          className={`px-4 py-2 text-white rounded-lg ${
            editPostId
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {editPostId ? 'Update' : 'Add'}
        </button>
      </div>

      {/* Post List */}
      <ul className="space-y-4 px-10">
        {post.slice(0, 5).map((item) => (
          <li
            key={item.id}
            className="bg-white shadow-md p-4 rounded-xl hover:bg-gray-50 transition duration-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4"
          >
            <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
            <div className="flex gap-2">
              <button
                onClick={() => handledit(item)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Apicrud;
