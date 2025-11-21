import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`max-w-7xl mx-auto px-6 w-full ${className}`}>
      {children}
    </div>
  );
}
