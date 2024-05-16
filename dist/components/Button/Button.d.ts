import React, { ReactNode } from 'react';
interface ButtonProps {
    variant?: 'primary' | 'secondary';
    children: ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
