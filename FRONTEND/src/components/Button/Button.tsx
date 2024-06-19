import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <div>
      <button
        className={`flex items-center justify-center gap-5 bg-dark text-light rounded-lg py-3 px-4 text-base font-bold w-96 hover:bg-hoverbutton ${className}`}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
