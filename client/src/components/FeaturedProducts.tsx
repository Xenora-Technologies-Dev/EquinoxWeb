import { Link } from 'wouter';
import ProductCard from './ProductCard';
import { ArrowRight } from 'lucide-react';

interface FeaturedProduct {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

interface FeaturedProductsProps {
  title: string;
  subtitle: string;
  products: FeaturedProduct[];
}

const FeaturedProducts = ({ title, subtitle, products }: FeaturedProductsProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              title={product.title}
              description={product.description}
              image={product.image}
              link={product.link}
              linkText="Explore Collection"
              icon={<ArrowRight className="ml-2 h-4 w-4" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
