export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  link: string;
}

export const featuredProducts: Product[] = [
  {
    id: '1',
    title: 'Premium Linens',
    description: 'Luxury bed linens with high thread count fabrics and exceptional finish for a truly indulgent guest experience.',
    image: 'https://images.unsplash.com/photo-1445991842772-097fea258e7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'linens',
    link: '/products#linens'
  },
  {
    id: '2',
    title: 'Custom Leather Products',
    description: 'Hand-crafted leather products from wallets to luggage, designed to enhance your brand\'s prestige.',
    image: 'https://images.unsplash.com/photo-1539207169231-e5547a8a08ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'leather',
    link: '/products#leather'
  },
  {
    id: '3',
    title: 'Luxury Amenities',
    description: 'Premium toiletries and guest amenities that provide the perfect finishing touch to the guest experience.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'amenities',
    link: '/products#amenities'
  }
];

export const allProducts: Product[] = [
  ...featuredProducts,
  {
    id: '4',
    title: 'Luxury Bed Linens',
    description: 'High-thread count cotton sheets, duvet covers, and pillowcases with exceptional finish quality.',
    image: 'https://images.unsplash.com/photo-1525025500848-f00b7d362abc?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'linens',
    link: '/products#linens'
  },
  {
    id: '5',
    title: 'Premium Pillows & Cushions',
    description: 'Luxury pillows, cushions, and pillow protectors for maximum comfort and durability.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'linens',
    link: '/products#linens'
  },
  {
    id: '6',
    title: 'Bespoke Leather Accessories',
    description: 'Handcrafted leather wallets, cardholders, and key pouches customized with your hotel branding.',
    image: 'https://images.unsplash.com/photo-1549036085-38b4d889f5bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'leather',
    link: '/products#leather'
  },
  {
    id: '7',
    title: 'Premium Toiletries',
    description: 'Luxury soap, shampoo, conditioner, and body wash sets in elegant packaging.',
    image: 'https://images.unsplash.com/photo-1563401202632-7d926d51a4f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'amenities',
    link: '/products#amenities'
  },
  {
    id: '8',
    title: 'Eco-Friendly Amenities',
    description: 'Biodegradable toiletries, bamboo dental kits, and reusable containers for sustainable luxury.',
    image: 'https://images.unsplash.com/photo-1564419320461-6870880221ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'eco',
    link: '/products#eco'
  },
  {
    id: '9',
    title: 'Guest Room OS&E',
    description: 'Premium hangers, kettles, safe boxes, and other essential guest room operating supplies.',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'os-e',
    link: '/products#os-e'
  },
  {
    id: '10',
    title: 'Food & Beverage Supplies',
    description: 'High-quality tableware, utensils, and serving accessories for restaurants and banquets.',
    image: 'https://images.unsplash.com/photo-1622633721982-9f9e07dd4759?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'os-e',
    link: '/products#os-e'
  },
  {
    id: '11',
    title: 'Luxury Furniture',
    description: 'Elegant chairs, tables, and case goods for guest rooms, lobbies, and meeting spaces.',
    image: 'https://images.unsplash.com/photo-1540638349517-3abd5afc5847?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'ff-e',
    link: '/products#ff-e'
  },
  {
    id: '12',
    title: 'Decorative Lighting',
    description: 'Designer lamps, chandeliers, and lighting fixtures to create the perfect ambiance.',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
    category: 'ff-e',
    link: '/products#ff-e'
  }
];

export const getProductsByCategory = (category: string) => {
  if (category === 'all') {
    return allProducts;
  }
  return allProducts.filter(product => product.category === category);
};
