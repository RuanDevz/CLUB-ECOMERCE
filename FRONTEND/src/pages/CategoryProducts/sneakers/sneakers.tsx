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

const Sneakers = () => {

  const [sneakers, setSneakers] = useState<productsProps[]>([])

  const {products, setProducts, setTotalprice} = useContext(Context)
  
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

  const addProductToContext = (product: Product) => {
    if (products.some(p => p.id === product.id)) {
        alert('Este produto já foi adicionado ao carrinho.');
        return;
    }
    const newProducts = [...products, product];
    setProducts(newProducts);
    setTotalprice(prevTotal => prevTotal + product.price);
};

  return (
    <div>
      {userlogged || GoogleLogged ? <MenubarLogged/> : <Header/>}
    <main>
      <Backpage>Explorar Tênis</Backpage>
    <section className='flex justify-center lg:max-w-default lg:flex lg:justify-around items-center gap-10 flex-wrap mx-auto'>
      {loading ? (
        <Spacer/>
      ):(
        <>
         {sneakers.map((sneaker) =>(
        <div key={sneaker.id}>
           <ImageProduct src={sneaker.imageUrl} alt={sneaker.name} add={() => addProductToContext(sneaker)} />
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
