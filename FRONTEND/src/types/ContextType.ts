
import { Dispatch, SetStateAction } from "react";

interface ContextType {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
    error: string;
    setError: Dispatch<SetStateAction<string>>;
    msgsuccess: string,
    setMsgsuccess: Dispatch<SetStateAction<string>>
  }
  
  export default ContextType;
  