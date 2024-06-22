import React from 'react'

const Cart = () => {
  return (
    <div className='fixed h-screen w-screen right-0 bottom-0 left-0 top-0 bg-cartbg flex justify-end transition-all 0.3 ease-in text-dark'>
      <div className='h-full bg-white p-5 overflow-y-hidden min-w-96'>
        <p className='mb-4 font-semibold text-2xl'>Produtos</p>
      </div>
    </div>
  )
}

export default Cart
