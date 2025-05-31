import React, { useState } from 'react';
import Header from './components/Header';
import moonIcon from './assets/images/icon-moon.svg';
import sunIcon from './assets/images/icon-sun.svg';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen p-4 bg-neutral-200 dark:bg-neutral-900 text-neutral-900 dark:text-neutral-0">
        <Header
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          moonIcon={moonIcon}
          sunIcon={sunIcon}
        />
        {/* Other components */}
      </div>
    </div>
  );
}

export default App;
