import React, { FC, useState, createContext, Dispatch, SetStateAction } from 'react';
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

interface Product {
  id: number;
  name: string;
  price: number;
}

interface ContextType {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
  msgsuccess: string;
  setMsgsuccess: Dispatch<SetStateAction<string>>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
}

// Criação do contexto
const ProductContext = createContext<ContextType>({
  value: "",
  setValue: () => {},
  error: "",
  setError: () => {},
  msgsuccess: "",
  setMsgsuccess: () => {},
  accessToken: "",
  setAccessToken: () => {},
  products: [],
  setProducts: () => {},
});

const App: FC = () => {
  // Estados locais
  const [value, setValue] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [msgsuccess, setMsgsuccess] = useState<string>('');
  const [accessToken, setAccessToken] = useState<string>('');
  const [products, setProducts] = useState<Product[]>([]);

  // Valor do contexto
  const contextValue: ContextType = {
    value,
    setValue,
    error,
    setError,
    msgsuccess,
    setMsgsuccess,
    accessToken,
    setAccessToken,
    products,
    setProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
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
