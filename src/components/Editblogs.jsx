import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: '',
    content: '',
    imageUrl: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/api/blogs/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.error("Error fetching blog:", err));
  }, [id]);

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/blogs/${id}`, blog);
      navigate('/blog');
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
      <form onSubmit={handleSubmit} className="bg-gray-500 p-6 text-white flex-col rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4 font-mono italic flex justify-center uppercase">Add your updation</h2>
        <div className="mb-4">
          <label className="block">Title</label>
          <input
            type="text"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Content</label>
          <textarea
            name="content"
            value={blog.content}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Image URL</label>
          <input
            type="text"
            name="imageUrl"
            value={blog.imageUrl}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg content-center ">Update Blog</button>
      </form>
    </div>
  );
};

export default EditBlog;
