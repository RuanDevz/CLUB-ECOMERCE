import React from 'react';
import './input.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div>
      <label className='text-dark font-primary font-semibold text-base' htmlFor={label}>{label}</label>
      <input className='font-primary font-semibold text-dark py-3 px-4' id={label} {...props} />
    </div>
  );
}

export default Input;
