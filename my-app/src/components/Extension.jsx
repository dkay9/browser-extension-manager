import React from 'react';
import ToggleSwitch from './ToggleSwitch';

export default function Card({ logo, name, description, isActive, onToggleActive, onRemove }) {
  return (
        <div className={`p-4 rounded-2xl shadow mb-4 border bg-white dark:bg-neutral-700 `}>
            <div className='flex gap-4'>
                {logo ? (
                <img src={logo} alt={`${name} logo`} className="w-12 h-12 mb-2" />
                ) : (
                <p className="text-red-500 text-sm mb-2">Logo not found</p>
                )}
                <div>
                <h2 className="font-semibold text-lg">{name}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
                </div>
            </div>
            
            <div className='mt-8 flex justify-between items-center'>
                {/* Remove Button */}
                <button
                className="px-3 py-1 bg-transparent border border-gray-400 text-black dark:text-white rounded-2xl"
                onClick={onRemove}
                >
                Remove
                </button>

                {/* Toggle Switch */}
                <ToggleSwitch isActive={isActive} onToggle={onToggleActive} />
            </div>
        </div>
  );
}
