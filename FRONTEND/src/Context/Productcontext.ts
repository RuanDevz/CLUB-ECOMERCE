import { createContext } from "react";
import productsProps from "../types/Product.types";

const ProductContext = createContext<productsProps[]>([])

export default ProductContext