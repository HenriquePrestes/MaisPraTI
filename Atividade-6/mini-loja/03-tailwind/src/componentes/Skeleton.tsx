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
    <main
      className="grid gap-8 p-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      aria-label="Lista de produtos"
    >
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