import React, { useContext, useState } from 'react';
import MenubarLogged from '../Menubar/MenubarLogged';
import Title from '../Title/Title';
import Context from '../../context/Context';
import { FaXmark } from 'react-icons/fa6';
import { BsBagCheck } from 'react-icons/bs';
import Button from '../Button/Button';
import { CircularProgress } from '@nextui-org/react';
import { useLocation, useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { products, removeCartItem } = useContext(Context);
  const location = useLocation();
  const { productQuantities } = location.state;
  const navigate = useNavigate()

  const [totalprice, setTotalPrice] = useState(() => {
    return products.reduce((total, product) => total + product.price * (productQuantities[product.id] || 1), 0);
  });

  const handleRemove = (productId: number) => {
    removeCartItem(productId);
    const newQuantities = { ...productQuantities };
    newQuantities[productId] = 0;
  };

  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      console.log('Compra finalizada!');
      navigate('/payment')
    }, 2200)
  };

  return (
    <div>
      <MenubarLogged />
      <div className='flex justify-center flex-row-reverse'>
        <Title className='text-center'>Checkout</Title>
      </div>
      <div className='h-[550px] overflow-y-auto'>
        {products.map((product) => (
          <div key={product.id} className='max-w-[350px] lg:flex items-center justify-center gap-3 lg:max-w-[650px] mx-auto'>
            <div className='flex justify-center lg:block'>
              <img className='w-52 h-64 rounded-lg my-5' src={product.imageUrl} alt={product.name} />
            </div>
            <div className='lg:w-[600px] flex flex-col gap-4 ml-5'>
              <p className='text-center lg:font-primary font-semibold text-base lg:text-left'>{product.name}</p>
              <div className='lg:flex justify-between '>
                <p className='text-center lg:font-primary font-semibold text-base text-pricecolor'>R${product.price}</p>
                <FaXmark onClick={() => handleRemove(product.id)} className='hidden lg:text-xl lg:flex cursor-pointer mr-5' />
              </div>
              <div className='flex justify-center items-center gap-3 lg:justify-start'>
                <span className='lg:text-xl text-dark font-semibold'>Quantidade: {productQuantities[product.id]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center lg:flex lg:justify-start flex-col lg:items-start mt-10 max-w-[650px] mx-auto'>
        <p className='font-bold font-primary text-xl mb-3'>Total: R$ {totalprice}</p>
        <Button onClick={handleCheckout} className='w-[350px] lg:w-[650px]'>
          {isLoading ? <CircularProgress /> : <><BsBagCheck className='text-2xl font-extrabold' /> Finalizar compra</>}
        </Button>
      </div>
    </div>
  );
};

export default Checkout;
