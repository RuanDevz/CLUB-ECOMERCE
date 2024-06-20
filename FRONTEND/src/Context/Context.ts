// src/Context/Context.ts
import { createContext} from "react";
import ContextType from "../types/ContextType";

const Context = createContext<ContextType>({
  value: "",
  setValue: () => {},
  error: "",
  setError: () => {},
  msgsuccess: "",
  setMsgsuccess: () => {},
  accessToken: "",
  setAccessToken: () => {}
});

export default Context;
