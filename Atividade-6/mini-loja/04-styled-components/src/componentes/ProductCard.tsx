import React, { useState } from 'react';
import styled, { css } from 'styled-components';
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

const Card = styled.div`
  max-width: 320px;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: box-shadow 0.2s, transform 0.2s;
  position: relative;
  &:hover {
    box-shadow: 0 4px 16px rgba(0,0,0,0.16);
    transform: translateY(-4px) scale(1.02);
  }
  &:focus {
    outline: 2px solid #7c1ef8;
    outline-offset: 2px;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  background: #eaeaea;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  transition: opacity 0.2s;
`;

const Tag = styled.span<{ promo?: boolean }>`
  position: absolute;
  top: 8px;
  left: 8px;
  background: ${(props) => (props.promo ? '#7c1ef8' : '#ffb300')};
  color: #fff;
  font-size: 0.8rem;
  padding: 2px 10px;
  border-radius: 999px;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #111;
`;

const Title = styled.h2`
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.2;
  max-height: 2.6em;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #111;
`;

const PriceRating = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1rem;
  color: #111;
`;

const Price = styled.span`
  font-weight: bold;
  color: #7c1ef8;
`;

const Rating = styled.span`
  color: #ffb300;
`;

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
    <Card tabIndex={0} aria-label={product.title}>
      <ImgWrapper>
        <Img
          src={product.image}
          alt={product.title}
          loading="lazy"
          width={200}
          height={200}
        />
        <Tag promo={isPromo}>{product.tag}</Tag>
      </ImgWrapper>
      <Info>
        <Title title={product.title}>{product.title}</Title>
        <PriceRating>
          <Price>R$ {product.price.toFixed(2)}</Price>
          <Rating aria-label={`Nota ${product.rating}`}>★ {product.rating}</Rating>
        </PriceRating>
        <Button
          variant="solid"
          loading={loading}
          onClick={handleAdd}
          ariaLabel="Adicionar ao carrinho"
        >
          Adicionar
        </Button>
      </Info>
    </Card>
  );
}