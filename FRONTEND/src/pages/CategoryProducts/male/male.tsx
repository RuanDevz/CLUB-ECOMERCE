import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'
import MenubarLogged from '../../../components/Menubar/MenubarLogged'
import Context from '../../../Context/Context'
import ImageProduct from '../../../components/ImageProduct/ImageProduct'
import Spacer from '../../../components/Spacer/Spacer'

const Male = () => {

  const [male, setMale] = useState<productsProps[]>([])
  const userlogged = sessionStorage.getItem('token')
  const Googlelogged = sessionStorage.getItem('Googletoken')

  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() =>{
    setLoading(true)
    axios.get(`${import.meta.env.VITE_API_URL}/products/male`)
    .then((response) =>{
      setMale(response.data)
      setLoading(false)
    })
  },[])

  return (
    <div>
    {userlogged || Googlelogged ? <MenubarLogged/> : <Header/>}
    <main>
      <Backpage>Explorar Feminino</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {loading ? (
        <Spacer/>
      ):(
        <>
        {male.map((man) =>(
        <div key={man.id}>
          <ImageProduct src={man.imageUrl} alt={man.name} />
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{man.name}</p>
            <p className='font-medium text-base text-center'>R${man.price}</p>
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

export default Male
