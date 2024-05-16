import React, { ReactNode } from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children:ReactNode
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary' }) => (
  <button className={`btn ${variant}`}>{children}</button>
);

export default Button;
