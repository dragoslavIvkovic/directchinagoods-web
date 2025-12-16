import React from 'react';
import { cn } from '../../lib/utils'; // Assuming utils exists, or I might need to create it. I'll create it or inline it.

// Wait, I probably don't have lib/utils yet. I'll just use simple className prop for now or create utils.
// Actually, in the package.json I saw clsx and tailwind-merge, so I should create src/lib/utils.ts

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
    
    const variants = {
      primary: "bg-gradient-to-r from-[#00B2FF] to-[#00f0ff] text-white hover:shadow-[0_0_20px_rgba(0,178,255,0.4)] border-none",
      secondary: "bg-[#161a2b] text-white hover:bg-[#1f243a] border border-[#2a3045]",
      outline: "border border-[var(--color-accent-blue)] text-white hover:bg-[var(--color-accent-blue)] hover:text-black",
      ghost: "text-white hover:text-[var(--color-accent-blue)] bg-transparent",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-12 px-6 text-sm",
      lg: "h-14 px-8 text-base",
    };

    // Simple class merging since I haven't created utils yet
    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className || ''}`;

    return (
      <button
        ref={ref}
        className={combinedClasses}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
