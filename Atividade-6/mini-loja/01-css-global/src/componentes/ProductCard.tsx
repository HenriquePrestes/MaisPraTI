import React, { useState } from 'react';
import Button from './Button';

type Product = {
	id: number;
	title: string;
	price: number;
	rating: number;
	tag: string;
	image: string;
};

type Props = {
	product: Product;
	onAddToCart?: (product: Product) => void;
};

export default function ProdutoCarrinho({ product, onAddToCart }: Props) {
	const [loading, setLoading] = useState(false);

	const handleAdd = async () => {
		setLoading(true);
		await new Promise((r) => setTimeout(r, 800)); 
		setLoading(false);
		if (onAddToCart) onAddToCart(product);
	};

	return (
		<div className="product-card" tabIndex={0} aria-label={product.title}>
			<div className="product-card__img-wrapper">
				<img
					src={product.image}
					alt={product.title}
					loading="lazy"
					className="product-card__img"
					width={200}
					height={200}
				/>
				<span className={`product-card__tag product-card__tag--${product.tag.toLowerCase()}`}>{product.tag}</span>
			</div>
			<div className="product-card__info">
				<h2 className="product-card__title" title={product.title}>{product.title}</h2>
				<div className="product-card__price-rating">
					<span className="product-card__price">R$ {product.price.toFixed(2)}</span>
					<span className="product-card__rating" aria-label={`Nota ${product.rating}`}>★ {product.rating}</span>
				</div>
				<Button
					variant="solid"
					loading={loading}
					onClick={handleAdd}
					ariaLabel="Adicionar ao carrinho"
				>
					Adicionar
				</Button>
			</div>
		</div>
	);
}

export function Corpo({ onAddToCart }: { onAddToCart: (product: any) => void }) {
	return (
		<div>
			<h1>Corpo do Componente</h1>
			
		</div>
	);
}
