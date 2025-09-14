// @ts-ignore
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

export default function Corpo({ onAddToCart }: { onAddToCart: (product: Product) => void }) {
  return (
    <main className="product-grid" aria-label="Lista de produtos">
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