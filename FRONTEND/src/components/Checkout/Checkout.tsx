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
      <div className='flex justify-center items-center'>
        <Title>Checkout</Title>
      </div>
      <div className='flex justify-between flex-col'>
        {products.map((product) =>(
            <div className='w-[650px] flex justify-center items-center flex-col mx-auto bg-blue-200'>
                <div className='flex justify-between items-center'>
                    <img className='w-44 h-64 rounded-lg my-5' src={product.imageUrl} alt="" />
                    <p className='font-primary font-semibold text-base ml-4'>{product.name}</p>
                </div>
                <div className='flex justify-between w-52'>
                <p className='font-primary font-semibold text-base text-pricecolor'>R${product.price}</p>
                <FaXmark  className='text-xl cursor-pointer mr-5'/>
              </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Checkout
