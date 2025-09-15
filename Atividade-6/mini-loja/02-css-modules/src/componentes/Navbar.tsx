import React, { useEffect, useState } from 'react';
import { MdDarkMode, MdLightMode, MdShoppingCart } from 'react-icons/md';
import styles from './Navbar.module.css';

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
    <nav className={styles.navbar} aria-label="Main navigation">
      <div className={styles.logo} tabIndex={0} aria-label="MiniLoja logo">{LOGO}</div>
      <div className={styles.actions}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? <MdDarkMode size={24} className={styles.iconDark} /> : <MdLightMode size={24} />}
        </button>
        <div className={styles.cart} aria-label="Itens no carrinho">
          <MdShoppingCart size={24} />
          <span className={styles.badge} aria-live="polite">{cartCount}</span>
        </div>
      </div>
    </nav>
  );
}