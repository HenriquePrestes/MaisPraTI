import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode, MdShoppingCart } from 'react-icons/md';


const LOGO = 'Mini-Loja de Donuts';

export default function Navbar({ cartCount = 0 }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <nav className="bg-purple-700 text-white flex items-center justify-between px-4 py-2" aria-label="Main navigation">
      <div className="font-bold text-lg" tabIndex={0} aria-label="MiniLoja logo">{LOGO}</div>
      <div className="flex items-center gap-4">
        <button
          className="rounded-full p-2 bg-purple-900 hover:bg-purple-600 transition-colors"
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? <MdDarkMode size={24} className="" /> : <MdLightMode size={24} />}
        </button>
        <div className="relative flex items-center" aria-label="Itens no carrinho">
          <MdShoppingCart size={24} />
          <span className="absolute -top-2 -right-2 bg-pink-500 text-xs rounded-full px-2 py-0.5" aria-live="polite">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}