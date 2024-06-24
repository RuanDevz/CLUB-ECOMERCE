import React, { useContext } from 'react';
import './input.css';
import Context from '../../context/Context';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  hasError?: boolean; 
};

const Input: React.FC<InputProps> = ({ label, hasError, ...props }) => {

  return (
    <div className='mb-4'>
      {label && (
        <label className='text-dark font-primary font-semibold text-base  block' htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={`w-full py-3 px-4 rounded-lg shadow-md font-primary font-semibold text-dark ${
          hasError ? 'border-2 border-error placeholder-error focus:outline-none' : 'border-none focus:outline-none'
        }`}
        id={label}
        {...props}
      />
    </div>
  );
}

export default Input;
