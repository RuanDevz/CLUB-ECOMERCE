import React, {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import productsProps from '../../../types/Product.types'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Title from '../../../components/Title/Title';
import Header from '../../../components/Header/Header';
import {Link} from 'react-router-dom'
import Backpage from '../../Backpage/Backpage';
import Context from '../../../Context/Context';
import HeaderLogged from '../../../components/HeaderLogged/HeaderLogged';
import ImageProduct from '../../../components/ImageProduct/ImageProduct';

const Hats = () => {

    const [hats, setHats] = useState<productsProps[]>([])

    const userlogged = sessionStorage.getItem('token')
    const GoogleLogged = sessionStorage.getItem('Googletoken')


    useEffect(() =>{
        axios.get(`${import.meta.env.VITE_API_URL}/products/hats`)
        .then((response) =>{
          setHats(response.data)
        })
      },[])


  return (
    <div>
    {userlogged || GoogleLogged ? <HeaderLogged/> : <Header/>}
    <main>
      <Backpage>Explorar Chapéus</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {hats.map((hat) =>(
        <div key={hat.id}>
          <ImageProduct src={hat.imageUrl} alt={hat.name}/>
          <div className='flex justify-between py-2'>
            <p className='font-medium text-base text-center'>{hat.name}</p>
            <p className='font-medium text-base text-center'>R${hat.price}</p>
          </div>
        </div>
      ))}
    </section>
    </main>
  </div>
  )
}

export default Hats
