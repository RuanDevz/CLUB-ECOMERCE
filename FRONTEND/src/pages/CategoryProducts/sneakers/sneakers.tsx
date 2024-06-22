import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'
import Context from '../../../Context/Context'
import MenubarLogged from '../../../components/Menubar/MenubarLogged'
import ImageProduct from '../../../components/ImageProduct/ImageProduct'
import Spacer from '../../../components/Spacer/Spacer'

const Sneakers = () => {

  const [sneakers, setSneakers] = useState<productsProps[]>([])
  
  const userlogged = sessionStorage.getItem('token')
  const GoogleLogged = sessionStorage.getItem('Googletoken')

  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() =>{
    setLoading(true)
    axios.get(`${import.meta.env.VITE_API_URL}/products/sneakers`)
    .then((response) =>{
      setSneakers(response.data)
      setLoading(false)
    })
  },[])

  return (
    <div>
      {userlogged || GoogleLogged ? <MenubarLogged/> : <Header/>}
    <main>
      <Backpage>Explorar Tênis</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {loading ? (
        <Spacer/>
      ):(
        <>
         {sneakers.map((sneaker) =>(
        <div key={sneaker.id}>
          <ImageProduct src={sneaker.imageUrl} alt={sneaker.name}/>
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{sneaker.name}</p>
            <p className='font-medium text-base text-center'>R${sneaker.price}</p>
          </div>
        </div>
      ))}
        </>
      )}
    </section>
    </main>
  </div>
  )
}

export default Sneakers
