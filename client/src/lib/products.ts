export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
  details?: string[];
  features?: string[];
  materials?: string[];
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Linens',
    description: 'Luxury bed linens with high thread count fabrics and exceptional finish for a truly indulgent guest experience.',
    image: '/images/bed-linen1.jpg',
    category: 'linens',
    link: '/products#linens',
    features: [
      'Cotton with thread counts from 300-1000',
      'Custom embroidery available',
      'Hypoallergenic options',
      'Stain-resistant treatments'
    ]
  },
  {
    id: '2',
    title: 'Custom Leather Products',
    description: 'Hand-crafted leather products from wallets to luggage, designed to enhance your brand\'s prestige.',
    image: '/images/Leather-Wallets-Manufacturer.jpg',
    category: 'leather',
    link: '/products#leather',
    materials: [
      'Premium full-grain leather',
      'Vegetable-tanned options',
      'Customizable with brand logos',
      'Eco-conscious alternatives available'
    ]
  },
  {
    id: '3',
    title: 'Eco-Friendly Amenities',
    description: 'Sustainable toiletries and guest amenities crafted from bamboo and other eco-friendly materials.',
    image: '/images/handmade-bamboo-bottles.webp',
    category: 'eco',
    link: '/products#eco',
    details: [
      'Bamboo toothbrushes and dental kits',
      'Biodegradable packaging',
      'Organic ingredients',
      'Zero-waste options'
    ]
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: '4',
    title: 'Premium Bed Linens',
    description: 'High-thread count cotton sheets, duvet covers, and pillowcases with exceptional finish quality.',
    image: 'https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'linens',
    link: '/products#linens',
    materials: [
      'Premium cotton with 300-1000 thread count',
      'Sateen or percale weave options',
      'Customizable with hotel logo embroidery',
      'Available in white and multiple color options'
    ]
  },
  {
    id: '5',
    title: 'Hotel Bathrobes & Towels',
    description: 'Plush bathrobes and premium towel sets that offer guests exceptional comfort and absorbency.',
    image: '/images/HotelTowels.jpg',
    category: 'linens',
    link: '/products#linens',
    features: [
      'Cotton towels in multiple weights',
      'Waffle, terry, or velour bathrobes',
      'Custom embroidery for branding',
      'Quick-drying technology'
    ]
  },
  {
    id: '6',
    title: 'Leather Corporate Gifts',
    description: 'Premium leather products perfect for corporate gifting and VIP guest amenities.',
    image: '/images/leather-corporate-gift-ideas-1.jpg',
    category: 'leather',
    link: '/products#leather',
    details: [
      'Custom leather portfolios and folders',
      'Executive desk accessories',
      'Branded luggage tags and travel accessories',
      'Presentation boxes available'
    ]
  },
  {
    id: '7',
    title: 'Leather Luggage & Bags',
    description: 'Handcrafted leather luggage, laptop bags, and travel accessories with elegant finishes and durability.',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'leather',
    link: '/products#leather',
    materials: [
      'Full-grain and top-grain leather options',
      'Water-resistant treatments available',
      'Branded hardware and custom lining',
      'Monogramming service for personalization'
    ]
  },
  {
    id: '8',
    title: 'Premium Toiletry Sets',
    description: 'Luxury soap, shampoo, conditioner, and body wash sets in elegant packaging for guest bathrooms.',
    image: 'https://images.unsplash.com/photo-1567721913486-6585f069b332?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'amenities',
    link: '/products#amenities',
    details: [
      'Signature scents developed exclusively for hotels',
      'Customizable packaging with hotel branding',
      'Gentle formulas suitable for all skin types',
      'Available in bottles, tubes, or dispensers'
    ]
  },
  {
    id: '9',
    title: 'Bamboo Dental Kits',
    description: 'Eco-friendly dental kits featuring bamboo toothbrushes and biodegradable packaging.',
    image: '/images/bamboo-teeth-dental-kit.webp',
    category: 'eco',
    link: '/products#eco',
    features: [
      'S-curve and C-curve bamboo toothbrushes',
      'Plant-based bristles',
      'Recyclable or biodegradable packaging',
      'Optional organic toothpaste'
    ]
  },
  {
    id: '10',
    title: 'Natural Loofah & Bath Products',
    description: 'Eco-conscious bath and shower accessories made from natural materials like jute and loofah.',
    image: '/images/vetiver-loofah.jpeg',
    category: 'eco',
    link: '/products#eco',
    materials: [
      'Natural jute loofah',
      'Bamboo soap dishes and holders',
      'Coconut and bamboo drinking straws',
      'Organic cotton wraps'
    ]
  },
  {
    id: '11',
    title: 'Guest Room OS&E',
    description: 'Premium hangers, kettles, safe boxes, and other essential guest room operating supplies.',
    image: '/images/oSEsupplies.jpeg',
    category: 'os-e',
    link: '/products#os-e',
    details: [
      'Anti-theft wooden hangers with hotel branding',
      'Digital safe boxes with user-friendly interfaces',
      'Premium in-room kettles and coffee makers',
      'Custom waste bins and bathroom accessories'
    ]
  },
  {
    id: '12',
    title: 'Food & Beverage Equipment',
    description: 'High-quality tableware, utensils, and serving accessories for restaurants, banquets, and room service.',
    image: '/images/coffee-machine.webp',
    category: 'os-e',
    link: '/products#os-e',
    features: [
      'Premium stainless steel flatware',
      'Fine china with customizable patterns',
      'Crystal glassware for bars and restaurants',
      'Specialized buffet display and service items'
    ]
  },
  {
    id: '13',
    title: 'Luxury Furniture',
    description: 'Elegant chairs, tables, and case goods for guest rooms, lobbies, and meeting spaces.',
    image: 'https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'ff-e',
    link: '/products#ff-e',
    materials: [
      'Hardwood and sustainable timber',
      'Premium upholstery fabrics',
      'Stone and marble options',
      'Custom finishes to match hotel aesthetics'
    ]
  },
  {
    id: '14',
    title: 'Decorative Lighting',
    description: 'Designer lamps, chandeliers, and lighting fixtures to create the perfect ambiance.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'ff-e',
    link: '/products#ff-e',
    features: [
      'Bespoke chandelier designs',
      'Energy-efficient LED options',
      'Smart lighting systems with controls',
      'Custom finishes in brass, chrome, or matte black'
    ]
  },
  {
    id: '15',
    title: 'Bamboo Amenity Accessories',
    description: 'Sustainable bamboo amenity accessories including trays, organizers, and bathroom items.',
    image: '/images/BambooAmanity.jpeg',
    category: 'eco',
    link: '/products#eco',
    details: [
      'Bamboo amenity trays and organizers',
      'Eco-friendly bathroom accessories',
      'Bamboo water cups and tumblers',
      'Custom engraving available'
    ]
  },
  {
    id: '16',
    title: 'Custom Hotel Uniforms',
    description: 'Tailor-made uniforms for hotel staff that combine comfort, durability, and brand identity.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'ff-e',
    link: '/products#ff-e',
    features: [
      'Custom designs for all hotel departments',
      'Breathable, durable fabrics',
      'Branded elements and embroidery',
      'Consistent style across all positions'
    ]
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') {
    return allProducts;
  }
  return allProducts.filter(product => product.category === category);
};
