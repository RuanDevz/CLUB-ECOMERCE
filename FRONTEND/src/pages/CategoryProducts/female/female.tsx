import React, { useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'

const Female = () => {

  const [female, setFemale] = useState<productsProps[]>([])


  useEffect(() =>{
    axios.get(`${import.meta.env.VITE_API_URL}/products/female`)
    .then((response) =>{
      setFemale(response.data)
    })
  })


  return (
    <div>
    <Header/>
    <main>
      <Backpage>Explorar Feminino</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {female.map((girl) =>(
        <div key={girl.id}>
          <img className='w-productwidth h-productheight rounded-xl font-primary' src={girl.imageUrl} alt={girl.name} />
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{girl.name}</p>
            <p className='font-medium text-base text-center'>R${girl.price}</p>
          </div>
        </div>
      ))}
    </section>
    </main>
  </div>
  )
}

export default Female
