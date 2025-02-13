import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newBlog = {
      title,
      content,
      imageUrl,
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(newBlog),
      });
  
      if (!response.ok) throw new Error("Saving Failed"); 
  
      const data = await response.json(); 
      console.log("Blog saved:", data);
  
      setMessage("Saved successfully");
  
      setTimeout(() => {
        setMessage('');
        navigate('/blog');
      }, 1000);
    } catch (error) {
      setMessage("Saving failed");
      console.error("Error saving blog:", error);
    }
  };
  
 

  return (
    <div className="flex justify-center items-center h-screen bg-gray-700">
     
      <form
        onSubmit={handleSubmit}
        className="bg-gray-500 p-6 text-white  flex-col rounded-lg shadow-md w-full max-w-lg"
      >
         {/* <div className='bg-black h-10 border-black  rounded-lg '></div> */}
        <h2 className="text-2xl font-bold mb-4 font-mono italic flex justify-center">Share Your Knowledge</h2>
        <div className="mb-4">
          <label className="block">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block">Image URL</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className='flex flex-col justify-center '>
        <button
          type="submit"
          className=" bg-black text-white content-center px-4 py-2 mt-4 rounded-lg transition-transform duration-300 hover:scale-95"
        >Share it!
        </button>
        {message && (
          <div className="text-center text-white mt-4">{message}</div>
        )}
        </div>
      </form>
    </div>
  );
};

export default Blog


