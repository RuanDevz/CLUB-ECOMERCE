import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'

const Male = () => {

  const [male, setMale] = useState<productsProps[]>([])


  useEffect(() =>{
    axios.get(`${import.meta.env.VITE_API_URL}/products/male`)
    .then((response) =>{
      setMale(response.data)
    })
  })

  return (
    <div>
    <Header/>
    <main>
      <Backpage>Explorar Feminino</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {male.map((man) =>(
        <div key={man.id}>
          <img className='w-productwidth h-productheight rounded-xl font-primary' src={man.imageUrl} alt={man.name} />
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{man.name}</p>
            <p className='font-medium text-base text-center'>R${man.price}</p>
          </div>
        </div>
      ))}
    </section>
    </main>
  </div>
  )
}

export default Male
