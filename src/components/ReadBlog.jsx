import React, { useState,useEffect } from 'react'
import { useNavigate, useParams} from 'react-router-dom'

const ReadBlog = () => {
  const {id} =useParams();
    
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs/${id}`);
        if (!response.ok) throw new Error("Failed to fetch blog");
        const data = await response.json();
        setBlog(data);
      } 
      catch (error) {
        console.error("Error fetching blog:", error);
      } 
      finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (!blog) return <div>Processing...</div>;

  return (
    <div className="p-4 bg-gray-700 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-gray-500 p-6 rounded-lg shadow-md w-full max-w-4xl flex text-white">
      <div className="w-1/3">
          <img
            src={blog.imageUrl}
            alt={blog.title}
            className="w-full h-auto object-cover py-30 rounded-lg"
          />
        </div>
        <div className="w-2/3 pr-4 px-6">
          <h2 className="font-bold text-6xl uppercase mb-4 italic">{blog.title}</h2>
          <hr/>
          <p className="text-white mb-6">{blog.content}</p>
          <p className="text-sm text-gray-300 mt-2">Views: {blog.views}</p>

        </div>
        
      </div>
      
    </div>
  );
};
export default ReadBlog