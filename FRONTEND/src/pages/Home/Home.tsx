import React, { useContext } from 'react';
import Header from '../../components/Header/Header';
import Categories from '../../components/Categories/Categories';
import Context from '../../Context/Context';
import HeaderLogged from '../../components/HeaderLogged/HeaderLogged';

const Home = () => {

  const userlogged = sessionStorage.getItem('token') || sessionStorage.getItem('Googletoken');

  return (
    <>
      {userlogged ? <HeaderLogged /> : <Header />}
      <Categories />
    </>
  );
};

export default Home;
