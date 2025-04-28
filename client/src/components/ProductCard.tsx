import { Link } from 'wouter';
import { ReactNode, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkText: string;
  icon?: ReactNode;
  category?: string;
  details?: string[];
  features?: string[];
  materials?: string[];
}

const ProductCard = ({ 
  title, 
  description, 
  image, 
  link, 
  linkText, 
  icon,
  category, 
  details,
  features,
  materials
}: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  const hasExtraInfo = details?.length || features?.length || materials?.length;
  
  return (
    <div className="product-card bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300" data-category={category}>
      <div className="h-56 overflow-hidden relative group">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {category && (
          <div className="absolute top-3 right-3 bg-teal-500 text-white text-xs px-2 py-1 rounded capitalize">
            {category.replace('-', ' ')}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-3">{title}</h3>
        <p className="text-charcoal-500 mb-4 line-clamp-3">{description}</p>
        
        {hasExtraInfo && (
          <div className="mb-4">
            <button 
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-teal-600 text-sm hover:text-teal-700 transition-colors"
            >
              {expanded ? (
                <>
                  <ChevronUp className="h-4 w-4 mr-1" /> Hide details
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4 mr-1" /> Show details
                </>
              )}
            </button>
            
            {expanded && (
              <div className="mt-3 pt-3 border-t border-gray-100 text-sm">
                {materials && materials.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-teal-700 mb-1">Materials</h4>
                    <ul className="list-disc pl-5 text-charcoal-500 space-y-1">
                      {materials.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {features && features.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-teal-700 mb-1">Features</h4>
                    <ul className="list-disc pl-5 text-charcoal-500 space-y-1">
                      {features.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {details && details.length > 0 && (
                  <div className="mb-3">
                    <h4 className="font-semibold text-teal-700 mb-1">Details</h4>
                    <ul className="list-disc pl-5 text-charcoal-500 space-y-1">
                      {details.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
        
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
