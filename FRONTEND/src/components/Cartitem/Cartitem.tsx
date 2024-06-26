import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Context from '../../context/Context';
const Cartitem = () => {


    const {showCartItem, setShowCartItem,products} = useContext(Context);
    const quantity = products.length

    const handlecartitem = () =>{
        setShowCartItem(!showCartItem);
      }

  return (
    <div>
          <FaCartShopping onClick={handlecartitem} className="text-white z-50 text-xl lg:text-2xl absolute mr-10 cursor-pointer"/>
        <span className="text-base text-white z-50">{quantity}</span>
    </div>
  )
}

export default Cartitem
