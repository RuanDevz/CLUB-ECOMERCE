import React, {useContext, useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import axios from 'axios'
import productsProps from '../../types/Product.types';
import Backpage from '../Backpage/Backpage';
import MenubarLogged from '../../components/Menubar/MenubarLogged';
import Spacer from '../../components/Spacer/Spacer';
import ImageProduct from '../../components/ImageProduct/ImageProduct';
import Product from '../../types/Product.types';
import Context from '../../context/Context';


const Explorer = () => {

 const {products, setProducts, setTotalprice} = useContext(Context)

  const userlogged = sessionStorage.getItem('token')
  const Googlelogged = sessionStorage.getItem('Googletoken')

  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() =>{
    setLoading(true)
    axios.get(`${import.meta.env.VITE_API_URL}/products`)
    .then((response) =>{
      setProducts(response.data)
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
      {userlogged || Googlelogged  ? <MenubarLogged/> : <Header/>}
      <main>
        <Backpage>Explorer</Backpage>
      <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
        {loading ? (
          <Spacer/>
        ):(
          <>
          {products.map((product) =>(
          <div key={product.id}>
            <ImageProduct src={product.imageUrl} alt={product.name} add={() => addProductToContext(product)}/>
            <div className='flex justify-between py-2'>
              <p className='font-medium text-base text-center'>{product.name}</p>
              <p className='font-medium text-base text-center'>R${product.price}</p>
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

export default Explorer
