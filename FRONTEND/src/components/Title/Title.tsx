import React, { PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren<{
  className?: string;
}>;

const Title = ({ children, className }: TitleProps) => {
  return (
    <div>
      <h1 className={`text-dark text-2xl py-10 font-primary font-extrabold ${className}`}>
        {children}
      </h1>
    </div>
  );
};

export default Title;
