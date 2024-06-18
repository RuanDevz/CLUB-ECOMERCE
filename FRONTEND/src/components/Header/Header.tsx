import React from 'react'
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div>
      <header className='flex justify-between items-center py-5 bg-header'>
        <h1 className='text-3xl font-bold text-white ml-4'>CLUB CLOTHING</h1>
        <nav>
          <ul className='flex items-center justify-around gap-20 mr-14'>
            <li className='font-medium text-xl text-white'>Explorer</li>
            <li className='font-medium text-xl text-white'>Login</li>
            <li className='font-medium text-xl text-white'>Criar conta</li>
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
