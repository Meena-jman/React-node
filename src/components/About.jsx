import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col justify-center bg-gray-700'>
        <div className='flex justify-center my-10'>
        <div className=' bg-gray-400 border-2 w-150 ml-10 solid rounded-lg p-10  transition-transform duration-300 hover:scale-110'>
            <p className='text-3xl font-bold'>Bringing social movements to the cutting edge of digital culture</p>
            <p>We help organizations create online campaigns in an era of ever-changing media landscapes</p>
        </div>
        <div className=' bg-gray-400 w-150 ml-15 border-2 rounded-lg items-center text-center flex flex-col p-4 transition-transform duration-300 hover:scale-110'>
            <p className='text-4xl font-bold flex text-center font-sans'>OUR MISSION</p>
            <p className='text-center w-3/4 md:w-2/3'>
            A mission-driven media company. We work with digital influencers and content creators to build powerful social media movements in support of the organizations, businesses, and campaigns working to advance equity and opportunity worldwide. 
            </p>
        </div>
        </div>
        <hr className='border-3'/>
       
        <hr className='border-3'/>
        <div className='flex justify-center w-180 p-10 my-10 ml-150 border-2 rounded-lg  bg-gray-400  transition-transform duration-300 hover:scale-110'>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWlOiC8OQtp9F_2c7FWb9OoBYBE2K83pkZR3oQAo0SOQKJXWpckDLoXjKTp9zXYfFQrCk&usqp=CAU" className='md:w-3/4 h-70 object-cover rounded-lg transition-transform duration-300 hover:scale-110'/>
            </div>
            <div className='flex flex-col'>
            <p className='text-3xl'>Join Our Team!..</p>
            <input className=' m-5 border-2 rounded-lg flex justify-center' type='text' placeholder='Enter email'/>
            <button onClick={()=>alert("Thank you for your interest!!!, Will Reach Out Soon")} className="bg-gray-800 hover:bg-gray-600 h-10 rounded-2xl">Connect</button>
            </div>
        </div>

    </div>
  )
}

export default About