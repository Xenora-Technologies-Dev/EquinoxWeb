import { Link } from 'wouter';
import { ReactNode } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  icon?: ReactNode;
  category?: string;
}

const ProductCard = ({ 
  title, 
  description, 
  image, 
  link, 
  linkText, 
  icon,
  category 
}: ProductCardProps) => {
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md" data-category={category}>
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-3">{title}</h3>
        <p className="text-charcoal-400 mb-4">{description}</p>
        <Link 
          href={link} 
          className="text-teal-500 hover:text-teal-600 font-medium inline-flex items-center"
        >
          {linkText} {icon}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
