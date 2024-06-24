import React, { useContext, useEffect, useState } from 'react'
import Header from '../../../components/Header/Header'
import Backpage from '../../Backpage/Backpage'
import productsProps from '../../../types/Product.types'
import axios from 'axios'
import Context from '../../../context/Context'
import MenubarLogged from '../../../components/Menubar/MenubarLogged'
import ImageProduct from '../../../components/ImageProduct/ImageProduct'
import Spacer from '../../../components/Spacer/Spacer'
import Product from '../../../types/Product.types'

const Female = () => {

  const [female, setFemale] = useState<productsProps[]>([])

  const userlogged = sessionStorage.getItem('token')
  const Googlelogged = sessionStorage.getItem('Googletoken')
  console.log(userlogged)

  const {products, setProducts, setTotalprice } = useContext(Context)

  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() =>{
    setLoading(true)
    axios.get(`${import.meta.env.VITE_API_URL}/products/female`)
    .then((response) =>{
      setFemale(response.data)
      setLoading(false)
    })
    
  },[])

  const addProductToContext = (product: Product) => {
    const newProducts = [...products, product];
    setProducts(newProducts);
    console.log(newProducts)
    setTotalprice(product.price)
};


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
        {female.map((girl) =>(
        <div key={girl.id}>
         <ImageProduct src={girl.imageUrl} alt={girl.name} add={() => addProductToContext(girl)}/>
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{girl.name}</p>
            <p className='font-medium text-base text-center'>R${girl.price}</p>
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

export default Female
