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
}

const Context = createContext<ContextType>({
  products: [],
  setProducts: () => {},
  accessToken: "", 
  setAccessToken: () => {},
});

export default Context;
