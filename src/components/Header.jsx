import React from 'react'
import { Outlet, Link } from "react-router-dom";
const Header = ({openModal}) => {
  return (
    <div className='flex justify-between items-center px-10 bg-black text-white '>
        <div className='flex'>
            <img src=" https://static.vecteezy.com/system/resources/previews/026/174/780/original/blog-icon-speech-icon-in-flat-design-on-white-background-vector.jpg" className='h-18 rounded-full px-20'/>
        </div>

        <div>
            <ul className=' flex list-none space-x-5 text-lg font-serif px-15 '>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/addblog">Add Blog</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header