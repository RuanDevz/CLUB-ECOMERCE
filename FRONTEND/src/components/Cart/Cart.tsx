
import React from 'react'
import Button from '../Button/Button'
import { BsBagCheck } from 'react-icons/bs'

const Cart = () => {
  return (
    <div className='fixed h-screen w-screen right-0 bottom-0 left-0 top-0 bg-cartbg flex justify-end transition-all 0.3 ease-in text-dark mt-20'>
      <div className='h-full bg-white p-5 overflow-y-hidden min-w-96'>
        <p className='mb-4 font-semibold text-2xl'>Seu carrinho</p>
        {/* produtos */}
        <p className='font-bold font-primary text-base'>Total: R$ 1472</p>
        <Button>
          <BsBagCheck className='text-2xl font-extrabold'/>
          Ir para o Checkout
          </Button>
      </div>
    </div>
  )
}

export default Cart
