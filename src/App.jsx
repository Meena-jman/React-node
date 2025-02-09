import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Blog from './components/Blog'
import Blogview from './components/Blogview'
import ReadBlog from './components/ReadBlog'
import EditBlog from './components/editblogs'




function App() {
  const [count, setCount] = useState(0);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
    
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/blog" element={<Blogview/>}/>
        <Route path="/addblog" element={<Blog/>}/>
        <Route path="/readblog/:id" element={<ReadBlog/>}/>
        <Route path="/editblogs/:id" element={<EditBlog />} />
      </Routes>
      <Footer/>
      </BrowserRouter>

      
    </>
  )
}

export default App
