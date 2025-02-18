import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const Button = ({ children, onClick, type = 'button', className = '' }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-8 py-3 rounded-full font-semibold text-white bg-gradient-bilanis hover:opacity-90 transition-opacity duration-300 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;