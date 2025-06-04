// App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Card from './components/Extension';
import data from './data.json';
import moonIcon from './assets/images/icon-moon.svg';
import sunIcon from './assets/images/icon-sun.svg';

// Dynamically import all SVG logos from assets/images
const imagesContext = require.context('./assets/images', false, /\.svg$/);
const logosMap = imagesContext.keys().reduce((acc, path) => {
  const fileName = path.replace('./', '');
  acc[fileName] = imagesContext(path).default || imagesContext(path);
  return acc;
}, {});

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [extensions, setExtensions] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    setExtensions(data);
  }, []);

  const handleToggle = (index) => {
    setExtensions((prev) =>
      prev.map((ext, i) =>
        i === index ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (index) => {
    setExtensions((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return ext.isActive;
    if (filter === 'Inactive') return !ext.isActive;
  });

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-0 py-4 px-8 md:px-10 lg:px-24">
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          moonIcon={moonIcon}
          sunIcon={sunIcon}
        />

        <div className='flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left mb-6'>
          <h1 className="text-3xl font-bold mt-3 mb-4">Extensions List</h1>

          <div className="flex justify-center gap-4">
            {['All', 'Active', 'Inactive'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === status
                    ? 'bg-red-500 text-white'
                    : 'bg-white dark:bg-neutral-700 text-black dark:text-white'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {filteredExtensions.map((ext, index) => (
            <Card
              key={index}
              logo={logosMap[ext.logo]}
              name={ext.name}
              description={ext.description}
              isActive={ext.isActive}
              onToggleActive={() => handleToggle(index)}
              onRemove={() => handleRemove(index)}
            />
          ))}
        </div>
        <div className='text-center'>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
          Coded by <a className='text-green-300' href="https://github.com/dkay9">Dkay</a>.
        </div>
      </div>
    </div>
  );
}

export default App;
