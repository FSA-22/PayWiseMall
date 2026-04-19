import React from 'react';

interface IconButtonProps {
  icon: React.ComponentType<{ size?: number }>;
  variant?: 'light' | 'dark';
}

export const IconButton = ({
  icon: Icon,
  variant = 'light',
}: IconButtonProps) => {
  return (
    <button
      className={`
        p-2 rounded-full transition
        ${
          variant === 'dark'
            ? 'bg-black text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }
      `}
    >
      <Icon size={18} />
    </button>
  );
};
