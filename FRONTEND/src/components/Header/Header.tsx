import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';



const Header = () => {
  return (
    <div>
      <header className='flex justify-between items-center py-5 bg-dark'>
        <Link to='/'><h1 className='text-3xl font-bold text-white ml-4'>CLUB CLOTHING</h1></Link>
        <nav>
          <ul className='flex items-center justify-around gap-20 mr-14'>
            <Link to='/explorer'><li className='font-medium text-xl text-white'>Explorer</li></Link>
            <Link to='/login'><li className='font-medium text-xl text-white'>Login</li></Link>
            <Link to='/register'><li className='font-medium text-xl text-white'>Criar conta</li></Link>
            <div className='flex'>
            <li className='font-medium text-2xl text-white'><IoCartOutline/></li>
            <span className='text-white text-base ml-3'>1</span>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Header
