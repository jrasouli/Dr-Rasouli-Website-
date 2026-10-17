import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
}

// Kept for any <button> use. Links should use ButtonLink from ./ui so markup stays valid.
const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', fullWidth = false, className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center gap-2 px-6 py-3 border text-base font-semibold rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 disabled:opacity-50';
  const variants = {
    primary: 'border-teal-700 text-white bg-teal-700 hover:bg-teal-800',
    secondary: 'border-teal-700 text-white bg-teal-700 hover:bg-teal-800',
    outline: 'border-navy-800/25 text-navy-800 bg-white hover:border-navy-800 hover:bg-navy-50',
    white: 'border-white text-navy-800 bg-white hover:bg-sand',
  };
  return (
    <button className={`${base} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
