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

  useEffect(() => {
    setExtensions(data);
  }, []);

  const handleToggle = (index) => {
    setExtensions(prev =>
      prev.map((ext, i) =>
        i === index ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const handleRemove = (index) => {
    setExtensions(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-0 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-0 p-4">
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          moonIcon={moonIcon}
          sunIcon={sunIcon}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {extensions.map((ext, index) => {
            const logoSrc = logosMap[ext.logo];

            return (
              <Card
                key={index}
                logo={logosMap[ext.logo]}
                name={ext.name}
                description={ext.description}
                isActive={ext.isActive}
                onToggleActive={() => handleToggle(index)}
                onRemove={() => handleRemove(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
