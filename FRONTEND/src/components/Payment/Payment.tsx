import React from 'react'
import MenubarLogged from '../Menubar/MenubarLogged';
import Header from '../Header/Header';
import Title from '../Title/Title';

const Payment = () => {
  const userlogged = sessionStorage.getItem('token');
  const GoogleLogged = sessionStorage.getItem('Googletoken');

  return (
    <div>
      {userlogged || GoogleLogged ? <MenubarLogged /> : <Header />}
      <Title className='text-center text-3xl'>Compra realizada com sucesso!</Title>
      <p className='text-center font-medium'>O Club Cloathing não possui fins lucrativos, o projeto foi desenvolvido apenas para estudo e futuras aplicações.</p>
    </div>
  )
}

export default Payment
