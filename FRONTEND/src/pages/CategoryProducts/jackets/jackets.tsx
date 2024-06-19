import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'

const Jackets = () => {


  const [jackets, setJackets] = useState<productsProps[]>([])


  useEffect(() =>{
    axios.get(`${import.meta.env.VITE_API_URL}/products/jackets`)
    .then((response) =>{
      setJackets(response.data)
    })
  })

  return (
    <div>
    <Header/>
    <main>
      <Backpage>Explorar Jaquetas</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {jackets.map((jacket) =>(
        <div key={jacket.id}>
          <img className='w-productwidth h-productheight rounded-xl font-primary' src={jacket.imageUrl} alt={jacket.name} />
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{jacket.name}</p>
            <p className='font-medium text-base text-center'>R${jacket.price}</p>
          </div>
        </div>
      ))}
    </section>
    </main>
  </div>
  )
}

export default Jackets
