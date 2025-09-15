import styles from './ProductCard.module.css';
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
    <div className={styles.card} tabIndex={0} aria-label={product.title}>
      <div className={styles.imgWrapper}>
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className={styles.img}
          width={200}
          height={200}
        />
        <span className={isPromo ? `${styles.tag} ${styles.tagPromo}` : styles.tag}>{product.tag}</span>
      </div>
      <div className={styles.info}>
        <h2 className={styles.title} title={product.title}>{product.title}</h2>
        <div className={styles.priceRating}>
          <span className={styles.price}>R$ {product.price.toFixed(2)}</span>
          <span className={styles.rating} aria-label={`Nota ${product.rating}`}>★ {product.rating}</span>
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