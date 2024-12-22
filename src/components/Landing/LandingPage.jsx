import React from 'react'
import img from "../images/recyclelogo.png"
import im2 from "../images/recycle2.png"
import im3 from "../images/recycle1.png"
import { Link } from "react-router-dom"
// if user not exist i.e not logged in signed up
function LandingPage() {
  
  return (
    <div className="bg-gradient-to-b from-c1 to-c2 w-screen h-screen relative">
      <div className="nav flex justify-around">
        <img src={img} alt="logo" className='h-28 w-38'/>
        <div className='w-48 h-12'></div>
        <Link to="/Login" className='p-4 m-4 h-14 w-28 border-white border-4 rounded-full flex justify-center items-center text-white font-bold'>
          Login
        </Link>
      </div>
      <div className="middle flex justify-between items-center h-1/2 w-screen">
        <div className='left ml-6 p-6'>
          <h1 className='text-pretty text-6xl text-c3 font-bold'>Recycling MarketPlace App</h1>
          <p className='text-pretty font-semibold text-neutral-50 mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea quis quam deserunt quo totam facilis reiciendis placeat veniam culpa praesentium magnam, expedita nobis error debitis eius necessitatibus veritatis iusto velit!
          Ea officiis odio aperiam corporis qui </p>
          <Link to= "/Example" className='p-4 m-4 h-14 w-44 border-c4 border-2 rounded-full flex justify-center items-center text-c4 font-bold bg-white'>
            Create Account
          </Link>
        </div>
      <img src={im2} alt="pic" className="relative bottom-0 mb-0 w-1/2" style={{
        height:"500px"
      }} />
      </div>
      <img src={im3} alt="dj" className='relative -top-20 h-1/2 w-screen' />
    </div>
  )
}

export default LandingPage
