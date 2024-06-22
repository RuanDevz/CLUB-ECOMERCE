import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import productsProps from '../../../types/Product.types'
import Header from '../../../components/Header/Header';
import Backpage from '../../Backpage/Backpage';
import Context from '../../../Context/Context';
import MenubarLogged from '../../../components/Menubar/MenubarLogged';
import ImageProduct from '../../../components/ImageProduct/ImageProduct';
import Spacer from '../../../components/Spacer/Spacer'

const Hats = () => {

    const [hats, setHats] = useState<productsProps[]>([])

    const [loading, setLoading] = useState<boolean>(false)

    const userlogged = sessionStorage.getItem('token')
    const GoogleLogged = sessionStorage.getItem('Googletoken')


    useEffect(() =>{
      setLoading(true)
        axios.get(`${import.meta.env.VITE_API_URL}/products/hats`)
        .then((response) =>{
          setHats(response.data)
          setLoading(false)
        })
      },[])


  return (
    <div>
    {userlogged || GoogleLogged ? <MenubarLogged/> : <Header/>}
    <main>
      <Backpage>Explorar Chapéus</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {loading ?(
        <Spacer/>
      ):(
        <>
        {hats.map((hat) =>(
        <div key={hat.id}>
          <ImageProduct src={hat.imageUrl} alt={hat.name}/>
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{hat.name}</p>
            <p className='font-medium text-base text-center'>R${hat.price}</p>
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

export default Hats
