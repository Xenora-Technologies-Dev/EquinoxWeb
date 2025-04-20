import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
  };

  return (
    <div className={`${className}`}>
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 512 512" 
        className={`${sizeClasses[size]}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="256" cy="256" r="240" fill="white" stroke="#333333" strokeWidth="10" />
        <text 
          x="256" 
          y="150" 
          fontFamily="Arial Black, sans-serif" 
          fontSize="46" 
          fontWeight="bold" 
          textAnchor="middle" 
          fill="#333333"
        >EQUINOX</text>
        <text 
          x="256" 
          y="190" 
          fontFamily="Arial Black, sans-serif" 
          fontSize="46" 
          fontWeight="bold" 
          textAnchor="middle" 
          fill="#333333"
        >SUPPLIES</text>
        
        {/* Stylized A logo mark */}
        <g transform="translate(256, 270) scale(1.2)">
          <path d="M0,-50 L-30,20 L30,20 Z" fill="#2A8B8B" />
          <path d="M0,-50 L30,20 L15,20 L-15,-30 Z" fill="#555555" />
          <path d="M-30,20 L30,20 L0,50 Z" fill="#CCCCCC" />
          {/* Wave effect */}
          <path d="M-40,0 Q-20,-15 0,0 Q20,15 40,0" stroke="white" strokeWidth="3" fill="none" />
        </g>
        
        <text 
          x="256" 
          y="370" 
          fontFamily="Arial, sans-serif" 
          fontSize="24" 
          fontWeight="normal" 
          textAnchor="middle" 
          fill="#2A8B8B"
        >RELIABILITY NO LIMITS</text>
        
        {/* Square dots on sides */}
        <rect x="120" y="256" width="12" height="12" fill="#333333" />
        <rect x="380" y="256" width="12" height="12" fill="#333333" />
      </svg>
    </div>
  );
}

export default Logo;
