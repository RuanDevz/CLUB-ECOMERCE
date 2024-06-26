import React, { useContext } from 'react';
import MenubarLogged from '../Menubar/MenubarLogged';
import Header from '../Header/Header';
import Title from '../Title/Title';
import Context from '../../context/Context';

const Payment = () => {
  const userlogged = sessionStorage.getItem('token');
  const GoogleLogged = sessionStorage.getItem('Googletoken');

  const { products } = useContext(Context);
  console.log(products);

  function gerarNumeroAleatorio(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const Generateid = () => {
    let min = 100000;
    let max = 999999;
    return gerarNumeroAleatorio(min, max);
  }

  const IdOrder = Generateid();

  const calcularTotal = () => {
    let total = 0;
    products.forEach(product => {
      total += product.price;
    });
    return total.toFixed(2)
  }

  console.log(IdOrder);

  return (
    <div>
      {userlogged || GoogleLogged ? <MenubarLogged /> : <Header />}
      <Title className='text-center text-3xl pt-20'>Compra realizada com sucesso!</Title>
      <div className='text-center'>
        <p className='font-medium mb-4'>O Club Clothing não possui fins lucrativos, o projeto foi desenvolvido apenas para estudo e futuras aplicações.</p>

        <div className='mt-20'>
          <p className='font-medium mb-4'>Detalhes da sua compra:</p>
          <p className='py-3'>ID DA COMPRA: <strong>#{IdOrder}</strong></p>
          <ul className='list-disc text-center'>
            {products.map((details, index) => (
              <li key={details.id} className='py-3'>Item {index + 1} - {details.name} <strong>R$ {details.price}</strong></li>
            ))}
          </ul>
          <p className='font-medium mt-4'>Total da compra: <strong>R$ {calcularTotal()}</strong></p>
        </div>

        <div className='mt-20'>
          <a href='/' className='text-blue-500 hover:underline'>Voltar para a página inicial</a>
        </div>
      </div>

      <footer className='text-center mt-8 text-sm text-gray-600 '>
        <p>Para mais informações, entre em contato conosco através de <a href='mailto:contato@clubclothing.com'>contato@clubclothing.com</a></p>
      </footer>
    </div>
  );
}

export default Payment;
