import React, {useState, useEffect} from 'react'
import axios from 'axios'
import productsProps from '../../../types/Product.types'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Title from '../../../components/Title/Title';
import Header from '../../../components/Header/Header';
import {Link} from 'react-router-dom'
import Backpage from '../../Backpage/Backpage';

const hats = () => {

    const [hats, setHats] = useState<productsProps[]>([])


    useEffect(() =>{
        axios.get(`${import.meta.env.VITE_API_URL}/products/hats`)
        .then((response) =>{
          setHats(response.data)
        })
      },[])


  return (
    <div>
    <Header/>
    <main>
      <Backpage>Explorar Chapéus</Backpage>
    <section className='max-w-default flex justify-around items-center gap-10 flex-wrap mx-auto'>
      {hats.map((hat) =>(
        <div key={hat.id}>
          <img className='w-productwidth h-productheight rounded-xl font-primary' src={hat.imageUrl} alt={hat.name} />
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

export default hats
