import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdLightMode, MdShoppingCart } from 'react-icons/md';

const LOGO = 'Mini-Loja de Donuts';

const Nav = styled.nav`
  background: #7c1ef8;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  width: 96.5vw;
  position: relative;
`;

const Logo = styled.div`
  font-weight: bold;
  font-size: 1.25rem;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const ThemeButton = styled.button`
  border-radius: 999px;
  padding: 0.5rem;
  background: #23232b;
  color: #fff;
  border: none;
  transition: background 0.2s;
  cursor: pointer;
  &:hover {
    background: #7c1ef8;
  }
`;

const Cart = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Badge = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ec4899;
  color: #fff;
  font-size: 0.75rem;
  border-radius: 999px;
  padding: 2px 8px;
`;

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
    <Nav aria-label="Main navigation">
      <Logo tabIndex={0} aria-label="MiniLoja logo">{LOGO}</Logo>
      <Actions>
        <ThemeButton
          onClick={toggleTheme}
          aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
          aria-pressed={theme === 'dark'}
        >
          {theme === 'light' ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
        </ThemeButton>
        <Cart aria-label="Itens no carrinho">
          <MdShoppingCart size={24} />
          <Badge aria-live="polite">{cartCount}</Badge>
        </Cart>
      </Actions>
    </Nav>
  );
}