import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Trash2, Eye,Pencil } from 'lucide-react';

const Blogview = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/blogs')
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      setBlogs(blogs.filter((blog) => blog._id !== id));
    } catch (error) {
      console.error("Error deleting blog", error);
    }
  };

  return (
    <div className="p-4 h-screen bg-gray-700">
      <h2 className="text-5xl font-bold mb-6 text-center text-white italic">Let's Read Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <div key={blog._id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl">
              {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover rounded-lg mb-4" />}
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              {/* <p className="text-gray-700">{blog.content.substring(0, 150)}...</p> */}

              <p className="text-gray-700">{blog.content ? blog.content.substring(0, 100) + "..." : "No content available"}</p>

              <div className="flex justify-between mt-3">

                <Link to={`/readblog/${blog._id}`} className="bg-black text-white px-4 py-2 rounded-lg">Read More</Link>
                <div className='gap-2 flex'>
                <p className="text-sm text-black mt-2"><Eye /> {blog.views}</p> 
                <Link to={`/editblogs/${blog._id}`} className="text-black"><Pencil /></Link>


                <button onClick={() => deleteBlog(blog._id)} className="text-black"><Trash2 /></button>
              </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-white text-lg">No blogs available. Add some!</p>
        )}
      </div>
    </div>
  );
};

export default Blogview;
