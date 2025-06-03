import React from 'react';

export default function Card({ logo, name, description, isActive, onToggleActive, onRemove }) {
  return (
    <div className={`p-4 rounded shadow mb-4 border ${isActive ? 'bg-green-100 border-green-400' : 'bg-white border-gray-300'}`}>
      <img src={logo} alt={`${name} logo`} className="w-12 h-12 mb-2" />
      <h2 className="font-semibold text-lg">{name}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <button
        className="mr-2 px-3 py-1 bg-blue-500 text-white rounded"
        onClick={onToggleActive}
      >
        {isActive ? 'Deactivate' : 'Activate'}
      </button>
      <button
        className="px-3 py-1 bg-red-500 text-white rounded"
        onClick={onRemove}
      >
        Remove
      </button>
    </div>
  );
}
