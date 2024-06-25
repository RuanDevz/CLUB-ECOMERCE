import React, { useContext, useState } from 'react';
import MenubarLogged from '../Menubar/MenubarLogged';
import Title from '../Title/Title';
import Context from '../../context/Context';
import { FaMinus, FaTimes } from 'react-icons/fa'; 
import { IoMdAdd } from 'react-icons/io';
import { FaXmark } from 'react-icons/fa6';
import { BsBagCheck } from 'react-icons/bs';
import Button from '../Button/Button';

const Checkout = () => {
  const { products, removeCartItem } = useContext(Context);
  const [productQuantities, setProductQuantities] = useState<any>({});

  const totalprice = products.reduce((total, product) => total + product.price * (productQuantities[product.id] || 1), 0);

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
    removeCartItem(productId);
    const newQuantities = { ...productQuantities };
    newQuantities[productId] = 0;
    setProductQuantities(newQuantities);
  };

  return (
    <div>
      <MenubarLogged />
      <div className='flex justify-center'>
        <Title className='text-center'>Checkout</Title>
        <div className='flex flex-col'>
        </div>
      </div>
      {products.map((product) => (
        <div key={product.id} className='flex items-center justify-center gap-3 max-w-[650px] mx-auto'>
          <div>
            <img className='w-52 h-64 rounded-lg my-5' src={product.imageUrl} alt={product.name} />
          </div>
          <div className='w-[600px] flex flex-col gap-4 ml-5'>
            <p className='font-primary font-semibold text-base'>{product.name}</p>
            <div className='flex justify-between '>
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
      <div className='flex justify-start flex-col items-start mt-10 max-w-[650px] mx-auto'>
        <p className='font-bold font-primary text-xl mb-3'>Total: R$ {totalprice}</p>
        <Button className='w-[650px]'>
          <BsBagCheck className='text-2xl font-extrabold'/>
          Finalizar Compra
        </Button>
      </div>
    </div>
  );
};

export default Checkout;