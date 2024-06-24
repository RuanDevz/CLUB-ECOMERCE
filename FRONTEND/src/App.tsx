import React, { FC, useState, createContext, Dispatch, SetStateAction, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Explorer from './pages/Explorer/Explorer';
import Chapeus from './pages/CategoryProducts/hats/hats';
import Jaquetas from './pages/CategoryProducts/jackets/jackets';
import Feminino from './pages/CategoryProducts/female/female';
import Masculino from './pages/CategoryProducts/male/male';
import Tenis from './pages/CategoryProducts/sneakers/sneakers';
import DashboardLogged from './components/DashboardLogged/DashboardLogged';
import AOS from 'aos'
import ProductContext from './context/Context';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string
}


const App: FC = () => {

  const [products, setProducts] = useState<Product[]>([])
  const [accessToken, setAccessToken] = useState<string>('')
  const [totalprice, setTotalprice] = useState<number>(0)
  const [showCartItem, setShowCartItem] = useState<boolean>(false);
  

  const removeCartItem = (id: number) => {
    setProducts(products.filter(product => product.id !== id));
  };

  useEffect(() =>{
    AOS.init();
  },[])


  return (
    <ProductContext.Provider value={{
      products, setProducts,
      accessToken, setAccessToken,
      totalprice, setTotalprice,
      removeCartItem,
      showCartItem, setShowCartItem
    }}>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/explorer' element={<Explorer />} />
          <Route path='/hats' element={<Chapeus />} />
          <Route path='/sneakers' element={<Tenis />} />
          <Route path='/jackets' element={<Jaquetas />} />
          <Route path='/male' element={<Masculino />} />
          <Route path='/female' element={<Feminino />} />
          <Route path='/dashboard' element={<DashboardLogged />} />
        </Routes>
      </Router>
      </ProductContext.Provider>
  );
};

export default App;
