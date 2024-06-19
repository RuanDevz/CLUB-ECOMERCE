import React from 'react';
import './input.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label className='text-dark font-primary font-semibold text-base' htmlFor={id}>{label}</label>
      <input className='font-primary font-semibold text-dark py-3 px-4' id={id} {...props} />
    </div>
  );
}

export default Input;
