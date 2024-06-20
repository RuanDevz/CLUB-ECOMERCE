import { createContext, Dispatch, SetStateAction } from "react";
import ContextType from "../types/ContextType";

const Context = createContext<ContextType>({
  value: "",
  setValue: () => {},
  error: "",
  setError: () => {},
  msgsuccess: "",
  setMsgsuccess: () => {}
});

export default Context;
