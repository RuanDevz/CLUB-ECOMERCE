import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import productsProps from '../../types/Product.types';
import Backpage from '../Backpage/Backpage';


const Explorer = () => {

  const [products, setProducts] = useState<productsProps[]>([])


  useEffect(() =>{
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
    .then((response) =>{
      setProducts(response.data)
    })
  },[])

  return (
    <div>
      <Header/>
      <main>
        <Backpage>Explorer</Backpage>
      <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
        {products.map((product) =>(
          <div key={product.id}>
            <img className='w-productwidth h-productheight rounded-xl font-primary' src={product.imageUrl} alt={product.name} />
            <div className='flex justify-between py-2'>
              <p className='font-medium text-base text-center'>{product.name}</p>
              <p className='font-medium text-base text-center'>R${product.price}</p>
            </div>
          </div>
        ))}
      </section>
      </main>
    </div>
  )
}

export default Explorer
