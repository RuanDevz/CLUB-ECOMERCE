import { createContext, Dispatch, SetStateAction } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ContextType {
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  accessToken: string;
  setAccessToken: Dispatch<SetStateAction<string>>;
  totalprice: number;
  setTotalprice: Dispatch<SetStateAction<number>>;
  removeCartItem: (id: number) => void;
  showCartItem: boolean;
  setShowCartItem: Dispatch<SetStateAction<boolean>>;
  totalItems: number
}

const Context = createContext<ContextType>({
  products: [],
  setProducts: () => {},
  accessToken: "", 
  setAccessToken: () => {},
  totalprice: 0,
  setTotalprice: () => {},
  removeCartItem: () => {},
  showCartItem: false,
  setShowCartItem: () => {} ,
  totalItems: 0
});

export default Context;
