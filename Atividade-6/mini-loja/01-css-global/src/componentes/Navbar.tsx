import React, { useEffect, useState } from 'react';


const LOGO = 'MiniLoja';

export default function Navbar({ cartCount = 0 }) {
	const [theme, setTheme] = useState(() => {
		return localStorage.getItem('theme') || 'light';
	});

	useEffect(() => {
		document.body.className = theme;
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
	};

	return (
		<nav className="navbar" aria-label="Main navigation">
			<div className="navbar__logo" tabIndex={0} aria-label="MiniLoja logo">{LOGO}</div>
			<button
				className="navbar__theme-toggle"
				onClick={toggleTheme}
				aria-label={theme === 'light' ? 'Ativar modo escuro' : 'Ativar modo claro'}
				aria-pressed={theme === 'dark'}
			>
				{theme === 'light' ? '🌞' : '🌙'}
			</button>
			<div className="navbar__cart" aria-label="Itens no carrinho">
				<span role="img" aria-label="Carrinho">🛒</span>
				<span className="navbar__badge" aria-live="polite">{cartCount}</span>
			</div>
		</nav>
	);
}
