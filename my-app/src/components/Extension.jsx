import React, { useState } from 'react';

export default function Card({ id, onRemove }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`p-4 rounded-lg shadow-md mb-4 transition ${isActive ? 'bg-green-100 border-green-400' : 'bg-white border-gray-300'} border`}>
      <h2 className="text-lg font-semibold mb-2">
        Card {id} - {isActive ? 'Active' : 'Inactive'}
      </h2>
      <div className="flex gap-2">
        <button
          onClick={() => setIsActive(prev => !prev)}
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Toggle Active
        </button>
        <button
          onClick={() => onRemove(id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
