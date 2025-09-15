// @ts-ignore
import products from './products';
import ProdutoCarrinho from './ProductCard';
import styles from './ProductCard.module.css';

type Product = {
  id: number;
  title: string;
  price: number;
  rating: number;
  tag: string;
  image: string;
};

export default function Corpo({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  return (
    <main className={styles.productGrid} aria-label="Lista de produtos">
  {products.map((product: Product) => (
    <ProdutoCarrinho
      key={product.id}
      product={product}
      onAddToCart={onAddToCart}
    />
  ))}
</main>
  );
}