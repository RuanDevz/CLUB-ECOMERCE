import React, { useContext } from 'react'
import MenubarLogged from '../Menubar/MenubarLogged'
import Title from '../Title/Title'
import Context from '../../context/Context'
import { FaMinus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';

const Checkout = () => {

    const {products} = useContext(Context)


    

  return (
    <div>
        <MenubarLogged/>
      <div className='flex items-center flex-col py-8 overflow-hidden'>
        <Title>Checkout</Title>
      </div>
    </div>
  )
}

export default Checkout
