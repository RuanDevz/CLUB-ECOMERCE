import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'

const Sneakers = () => {

  const [sneakers, setSneakers] = useState<productsProps[]>([])


  useEffect(() =>{
    axios.get(`${import.meta.env.VITE_API_URL}/products/sneakers`)
    .then((response) =>{
      setSneakers(response.data)
    })
  })

  return (
    <div>
    <Header/>
    <main>
      <Backpage>Explorar Tênis</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {sneakers.map((sneaker) =>(
        <div key={sneaker.id}>
          <img className='w-productwidth h-productheight rounded-xl font-primary' src={sneaker.imageUrl} alt={sneaker.name} />
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{sneaker.name}</p>
            <p className='font-medium text-base text-center'>R${sneaker.price}</p>
          </div>
        </div>
      ))}
    </section>
    </main>
  </div>
  )
}

export default Sneakers
