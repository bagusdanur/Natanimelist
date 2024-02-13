"use client"
import { Moon, Sun } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';

const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <button className={`flex items-center justify-center p-1 rounded-lg border ${darkMode ? 'bg-color-darkPrimary' : 'bg-color-white'}`} onClick={toggleDarkMode}>
        {darkMode ? <Sun size={34} /> : <Moon size={34} />}
      </button>
    </div>
  );
};

export default DarkMode;