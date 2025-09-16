import React from 'react';
import styled from 'styled-components';
import products from './products';
import ProdutoCarrinho from './ProductCard';

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  tag: string;
  image: string;
};

const ProductGrid = styled.main`
  display: grid;
  gap: 2rem;
  padding: 2rem;
  grid-template-columns: 1fr;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default function Corpo({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  return (
    <ProductGrid aria-label="Lista de produtos">
      {products.map((product: Product) => (
        <ProdutoCarrinho
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </ProductGrid>
  );
}