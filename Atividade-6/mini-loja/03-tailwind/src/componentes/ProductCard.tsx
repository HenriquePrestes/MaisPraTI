import React, { useState } from 'react';

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

export default function ProductCard({ product, onAddToCart }: Props) {
  const isPromo = product.tag.toLowerCase() === 'promo';
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800)); 
    setLoading(false);
    if (onAddToCart) onAddToCart(product);
  };

  return (
    <div className="max-w-xs w-full m-auto bg-white rounded-xl shadow-md p-4 flex flex-col gap-4 transition hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500" tabIndex={0} aria-label={product.title}>
      <div className="relative w-full aspect-square bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="w-full h-full object-cover rounded-xl transition-opacity"
          width={200}
          height={200}
        />
        <span className={`absolute top-2 left-2 px-3 py-1 text-xs font-bold rounded-full shadow ${isPromo ? 'bg-purple-700 text-white' : 'bg-yellow-400 text-white'}`}>{product.tag}</span>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-semibold leading-tight line-clamp-2" title={product.title}>{product.title}</h2>
        <div className="flex items-center gap-4 text-base">
          <span className="font-bold text-purple-700">R$ {product.price.toFixed(2)}</span>
          <span className="text-yellow-400" aria-label={`Nota ${product.rating}`}>★ {product.rating}</span>
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
import Button from './Button';