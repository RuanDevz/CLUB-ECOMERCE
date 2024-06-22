import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import MenubarLogged from '../../components/Menubar/MenubarLogged';

const Home = () => {

  const userlogged = sessionStorage.getItem('token') || sessionStorage.getItem('Googletoken');

  return (
    <>
      {userlogged ? <MenubarLogged /> : <Header />}
      <Categories />
    </>
  );
};

export default Home;
