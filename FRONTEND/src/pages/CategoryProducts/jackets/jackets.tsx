import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'
import Context from '../../../Context/Context'
import MenubarLogged from '../../../components/Menubar/MenubarLogged'
import ImageProduct from '../../../components/ImageProduct/ImageProduct'
import Spacer from '../../../components/Spacer/Spacer'

const Jackets = () => {


  const [jackets, setJackets] = useState<productsProps[]>([])

  const Googlelogged = sessionStorage.getItem('Googletoken')
  const userlogged = sessionStorage.getItem('token')

  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() =>{
    setLoading(true)
     axios.get(`${import.meta.env.VITE_API_URL}/products/jackets`)
    .then((response) =>{
      setJackets(response.data)
      setLoading(false)
    })
  },[])

  return (
    <div>
    {userlogged || Googlelogged ? <MenubarLogged/> : <Header/>}
    <main>
      <Backpage>Explorar Jaquetas</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {loading ? (
        <Spacer/>
      ):(
        <>
        {jackets.map((jacket) =>(
        <div key={jacket.id}>
          <ImageProduct src={jacket.imageUrl} alt={jacket.name}/>
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{jacket.name}</p>
            <p className='font-medium text-base text-center'>R${jacket.price}</p>
          </div>
        </div>
      ))}</>
      )}
    </section>
    </main>
  </div>
  )
}

export default Jackets
