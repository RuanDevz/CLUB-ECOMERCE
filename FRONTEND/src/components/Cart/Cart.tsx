import React, { useContext, useState, useEffect, useRef } from 'react';
import Button from '../Button/Button';
import { BsBagCheck } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';
import { FaXmark } from 'react-icons/fa6';
import { IoMdAdd } from 'react-icons/io';
import Context from '../../context/Context';
import { useNavigate } from 'react-router-dom';
import './cart.css';

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
  const UserLogged = sessionStorage.getItem('token');
  const GoogleLogeed = sessionStorage.getItem('Googletoken');

  const { products, removeCartItem, showCartItem, setShowCartItem } = useContext(Context);
  const [productQuantities, setProductQuantities] = useState<ProductQuantities>({});
  const [totalItems, setTotalItems] = useState<number>(0);
  const cartRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const initialQuantities: ProductQuantities = {};
    products.forEach(product => {
      if (!initialQuantities[product.id]) {
        initialQuantities[product.id] = 1;
      }
    });
    setProductQuantities(initialQuantities);
  }, [products, setShowCartItem]);

  useEffect(() => {
    // Calcular a quantidade total de itens no carrinho
    let total = 0;
    Object.values(productQuantities).forEach(quantity => {
      total += quantity;
    });
    setTotalItems(total);
  }, [productQuantities]);

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

  const handlecartitem = (event: any) => {
    if (event.target.id === 'modalcart') {
      setShowCartItem(false);
    }
  };

  const GotoCheckout = () => {
    if(products.length <= 0){
      return alert('Você precisa adicionar itens ao carrinho')
    }
    if (UserLogged || GoogleLogeed) {
      navigate('/checkout', { state: { productQuantities } });
      setShowCartItem(false);
    } else {
      alert('Você precisa estar logado para comprar');
      navigate('/login');
      setShowCartItem(false);
    }
  };

  return (
    <>
      <div onClick={handlecartitem} id='modalcart' className={`fixed h-screen animated transition-all duration-300 ease-in-out w-screen right-0 bottom-0 left-0 top-0 bg-cartbg bg-opacity-10 inset-0 backdrop-blur-sm flex justify-end text-dark mt-20 overflow-x-hidden ${showCartItem ? '' : 'hidden'}`}>
        <div ref={cartRef} className={`h-full bg-white p-5 w-cart overflow-y-scroll`}>
          <p className='mb-4 font-semibold text-2xl'>Seu carrinho</p>
          <div className='h-[410px] 2xl:h-[630px] overflow-y-auto lg:h-[55vh]'>
            {products.map((product) => (
              <div key={product.id} className='flex items-center gap-3'>
                <div>
                  <img className='w-44 h-64 rounded-lg my-5' src={product.imageUrl} alt={product.name} />
                </div>
                <div className='flex flex-col gap-3'>
                  <p className='font-primary font-semibold text-base'>{product.name}</p>
                  <div className='flex justify-between w-52'>
                    <p className='font-primary font-semibold text-base text-pricecolor'>R${product.price}</p>
                    <FaXmark onClick={() => handleRemove(product.id)} className='text-xl cursor-pointer mr-5' />
                  </div>
                  <div className='flex items-center gap-3'>
                    <FaMinus onClick={() => subtractQuantity(product.id)} className='text-xl cursor-pointer' />
                    <span className='text-xl cursor-pointer'>{productQuantities[product.id]}</span>
                    <IoMdAdd onClick={() => addQuantity(product.id)} className='text-xl cursor-pointer' />
                  </div>
                </div>
                
              </div>
            ))}
          </div>
          <div className='flex justify-center items-start flex-col mx-auto  mt-5'>
            <p className='font-bold font-primary text-xl mb-3'>Total: R$ {totalprice}</p>
            <Button onClick={GotoCheckout} className='w-[45vh] lg:w-[400px]'>
              <BsBagCheck className='text-2xl font-extrabold' />
              Ir para o Checkout
            </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
