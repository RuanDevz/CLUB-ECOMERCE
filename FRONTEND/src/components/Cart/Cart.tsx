import React, { useContext, useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { BsBagCheck } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import Context from '../../context/Context';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductQuantities {
  [key: number]: number;
}

const Cart = () => {
  const { products, removeCartItem, showCartItem, setShowCartItem } = useContext(Context);

  const [productQuantities, setProductQuantities] = useState<ProductQuantities>({});
  const cartRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {

    const initialQuantities: ProductQuantities = {};
    products.forEach(product => {
      if (!initialQuantities[product.id]) {
        initialQuantities[product.id] = 1;
      }
    });
    setProductQuantities(initialQuantities);


    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setShowCartItem(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [products, setShowCartItem]);

  const totalprice = products.reduce((total, product) => total + product.price * (productQuantities[product.id] || 0), 0);

  const addQuantity = (productId: number) => {
    const newQuantities = { ...productQuantities };
    if (newQuantities[productId]) {
      newQuantities[productId] += 1; 
    } else {
      newQuantities[productId] = 1;
    }
    setProductQuantities(newQuantities);
  };

  const subtractQuantity = (productId: number) => {
    const newQuantities = { ...productQuantities };
    if (newQuantities[productId] > 0) {
      newQuantities[productId] -= 1;
      setProductQuantities(newQuantities);
    }
  };

  const handleRemove = (productId: number) => {
    removeCartItem(productId);
    const newQuantities = { ...productQuantities };
    newQuantities[productId] = 0;
    setProductQuantities(newQuantities);
  };

  return (
    <>
    <div data-aos="fade-left" className={`fixed h-screen w-screen right-0 bottom-0 left-0 top-0 bg-cartbg flex justify-end transition-all 0.3 ease-in text-dark mt-20 ${showCartItem ? '' : 'hidden'}`}>
      <div ref={cartRef} className='h-full bg-white p-5 w-cart overflow-y-scroll'>
        <p className='mb-4 font-semibold text-2xl'>Seu carrinho</p>
        <div className='h-[500px] overflow-y-auto'>
        {products.map((product) => (
          <div key={product.id} className='flex items-center gap-3'>
            <div>
              <img className='w-44 h-64 rounded-lg my-5' src={product.imageUrl} alt={product.name} />
            </div>
            <div className='flex flex-col gap-3'>
              <p className='font-primary font-semibold text-base'>{product.name}</p>
              <div className='flex justify-between w-52'>
                <p className='font-primary font-semibold text-base text-pricecolor'>R${product.price}</p>
                <FaXmark onClick={() => handleRemove(product.id)} className='text-xl cursor-pointer mr-5'/>
              </div>
              <div className='flex items-center gap-3'>
                <FaMinus onClick={() => subtractQuantity(product.id)} className='text-xl cursor-pointer'/>
                <span className='text-xl cursor-pointer'>{productQuantities[product.id]}</span>
                <IoMdAdd onClick={() => addQuantity(product.id)} className='text-xl cursor-pointer'/>
              </div>
            </div>
          </div>
        ))}
        </div>
      </div>
      <div className='w-96 absolute bottom-0 mb-28 mr-10'>
        <p className='font-bold font-primary text-xl mb-3'>Total: R$ {totalprice}</p>
        <Button className=''>
          <BsBagCheck className='text-2xl font-extrabold'/>
          Ir para o Checkout
        </Button>
      </div>
    </div>
    </>
  );
};

export default Cart;
