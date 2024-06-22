import React, { createContext, FC, useState, Dispatch, SetStateAction } from 'react';

// Definição do tipo Product
export interface Product {
  id: number;
  name: string;
  price: number;
}

// Definição do tipo ContextType
export interface ContextType {
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

export default ProductContext;
