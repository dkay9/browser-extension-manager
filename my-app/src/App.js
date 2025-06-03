import React, { useState } from 'react';
import Header from './components/Header';
import Card from './components/Extension';
import data from './data.json';

import moonIcon from './assets/images/icon-moon.svg';
import sunIcon from './assets/images/icon-sun.svg';

// Auto-import all SVG logos from the assets/images directory
const imagesContext = require.context('./assets/images', false, /\.svg$/);
const logosMap = imagesContext.keys().reduce((acc, path) => {
  const fileName = path.replace('./', '');
  acc[fileName] = imagesContext(path).default;
  return acc;
}, {});

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [cards, setCards] = useState(
    data.map((ext) => ({
      ...ext,
      logo: logosMap[ext.logo.replace('./assets/images/', '')],
    }))
  );

  const handleToggleActive = (index) => {
    const updated = [...cards];
    updated[index].isActive = !updated[index].isActive;
    setCards(updated);
  };

  const handleRemove = (index) => {
    const updated = [...cards];
    updated.splice(index, 1);
    setCards(updated);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-0 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-0 p-6">
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          moonIcon={moonIcon}
          sunIcon={sunIcon}
        />
        
        {/* Render all cards */}
        <div className="mt-6">
          {cards.map((card, index) => (
            <Card
              key={index}
              logo={card.logo}
              name={card.name}
              description={card.description}
              isActive={card.isActive}
              onToggleActive={() => handleToggleActive(index)}
              onRemove={() => handleRemove(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
