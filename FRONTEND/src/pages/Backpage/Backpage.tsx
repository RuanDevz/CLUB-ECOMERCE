import React, { PropsWithChildren } from 'react'
import Title from '../../components/Title/Title'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import {Link} from 'react-router-dom'

const Backpage = ({children}: PropsWithChildren) => {
  return (
    <div>
        <Title className='ml-5 text-lg flex items-center'>
        <Link to='/'><MdOutlineKeyboardArrowLeft className='text-4xl font-extrabold cursor-pointer'/></Link>
        {children}
      </Title>
    </div>
  )
}

export default Backpage
