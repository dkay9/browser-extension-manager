import React from 'react';

export default function ToggleSwitch({ isActive, onToggle }) {
  return (
    <div
      onClick={onToggle}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isActive ? 'bg-red-500' : 'bg-gray-500'
      }`}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
          isActive ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </div>
  );
}
