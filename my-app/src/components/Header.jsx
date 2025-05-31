import React from "react";
import logo from '../assets/images/logo.svg';
// import moonIcon from '../assets/images/icon-moon.svg'
// import sunIcon from '../assets/images/icon-sun.svg'


export default function Header({ darkMode, toggleDarkMode, moonIcon, sunIcon }) {
    return (
        <>
            <header className="flex justify-between bg-white dark:bg-neutral-700 w-full px-6 py-4 rounded-md" style={{boxShadow: '0 0 5px rgba(0, 0, 0, 0.15)' }}>
                <img src={ logo } alt="Logo" />
                <button
                    onClick={toggleDarkMode}
                    className="bg-neutral-300 dark:bg-neutral-600 w-10 h-10 flex items-center justify-center rounded-md"
                >
                    <img
                    src={darkMode ? sunIcon : moonIcon}
                    alt={darkMode ? "Sun Icon" : "Moon Icon"}
                    className="w-5 h-5"
                    />
                </button>
            </header>
        </>
    )
}
