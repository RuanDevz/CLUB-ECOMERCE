
import React, { useContext, useEffect, useState } from 'react'
import Button from '../Button/Button'
import { BsBagCheck } from 'react-icons/bs'
import Context from '../../context/Context'
import { FaMinus } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaXmark } from "react-icons/fa6";
import AOS from 'aos'





const Cart = () => {

  const {products} = useContext(Context)

  const totalprice = products.reduce((total, product) => total + product.price, 0);

  const [quantity, setQuantity] = useState(0)

  const addquantity = () =>{
    setQuantity(quantity + 1)
  }


  return (
    <div data-aos="fade-left" className='fixed h-screen w-screen right-0 bottom-0 left-0 top-0 bg-cartbg flex justify-end transition-all 0.3 ease-in text-dark mt-20'>
      <div className='h-full bg-white p-5 overflow-y-hidden w-cart'>
        <p className='mb-4 font-semibold text-2xl'>Seu carrinho</p>
        {products.map((product) => (
          <div key={product.id} className='flex items-center gap-3'>
            <div>
              <img className='w-44 h-64 rounded-lg my-5' src={product.imageUrl} alt={product.name} />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='font-primary font-semibold text-base'>{product.name}</p>
              <div className='flex justify-between w-52'>
              <p className='font-primary font-semibold text-base text-pricecolor'>R${product.price}</p>
              <FaXmark className='text-xl cursor-pointer mr-5'/>
              </div>
              <div className='flex items-center gap-3'>
                <FaMinus className='text-xl cursor-pointer'/>
                <span className='text-xl cursor-pointer'>{quantity}</span>
                <IoMdAdd onClick={addquantity} className='text-xl cursor-pointer'/>
              </div>
            </div>
          </div>
        ))}
        <p className='font-bold font-primary text-xl mb-3'>Total: R$ {totalprice}</p>
        <div className='w-96'>
        <Button className=''>
          <BsBagCheck className='text-2xl font-extrabold'/>
          Ir para o Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Cart
