import { getFeaturedProducts } from "@/lib/productsService";
import { ProductCard } from "../product-card/ProductCard";

export async function FeaturedProductsContent() {
  const products = await getFeaturedProducts(6);
  return (
    <>
      {products.map((product, id) => (
        <ProductCard key={product.id} product={product} eager={id === 0} />
      ))}
    </>
  );
}
