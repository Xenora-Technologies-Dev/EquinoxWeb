import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import { allProducts, getProductsByCategory } from '@/lib/products';
import { ArrowRight } from 'lucide-react';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [hash, setHash] = useState('');
  
  useEffect(() => {
    // Get hash from URL and remove the #
    const currentHash = window.location.hash.replace('#', '');
    if (currentHash) {
      setHash(currentHash);
      setActiveCategory(currentHash);
    }
    
    // Filter products based on active category
    setFilteredProducts(getProductsByCategory(activeCategory));
  }, [activeCategory]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Update URL hash
    window.history.pushState(null, '', `#${category}`);
  };
  
  return (
    <>
      <Helmet>
        <title>Our Products | Equinox Supplies</title>
        <meta name="description" content="Explore our wide range of premium hospitality supplies including linens, leather products, amenities, and more." />
      </Helmet>
      
      <Hero 
        title="Our Premium Hospitality Products"
        subtitle="Discover world-class supplies designed to elevate the guest experience in luxury hotels."
        backgroundImage="https://images.unsplash.com/photo-1551518919-7e8aaae7e393?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Categories"
        secondaryButtonLink="#categories"
      />
      
      <section id="categories" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-teal-500 font-medium mb-2 block">OUR COLLECTIONS</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Exceptional Hospitality Products</h2>
            <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">
              Explore our wide range of premium hospitality supplies, designed to elevate the guest experience in luxury hotels across the Middle East.
            </p>
          </div>
          
          {/* Product Categories Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button 
                className={`py-2 px-6 rounded-full ${activeCategory === 'all' ? 'bg-teal-500 text-white' : 'bg-white text-charcoal-500 hover:bg-teal-500 hover:text-white'} transition-colors font-medium`}
                onClick={() => handleCategoryChange('all')}
              >
                All Products
              </button>
              <button 
                className={`py-2 px-6 rounded-full ${activeCategory === 'linens' ? 'bg-teal-500 text-white' : 'bg-white text-charcoal-500 hover:bg-teal-500 hover:text-white'} transition-colors font-medium`}
                onClick={() => handleCategoryChange('linens')}
              >
                Linens
              </button>
              <button 
                className={`py-2 px-6 rounded-full ${activeCategory === 'leather' ? 'bg-teal-500 text-white' : 'bg-white text-charcoal-500 hover:bg-teal-500 hover:text-white'} transition-colors font-medium`}
                onClick={() => handleCategoryChange('leather')}
              >
                Leather Products
              </button>
              <button 
                className={`py-2 px-6 rounded-full ${activeCategory === 'amenities' ? 'bg-teal-500 text-white' : 'bg-white text-charcoal-500 hover:bg-teal-500 hover:text-white'} transition-colors font-medium`}
                onClick={() => handleCategoryChange('amenities')}
              >
                Amenities
              </button>
              <button 
                className={`py-2 px-6 rounded-full ${activeCategory === 'eco' ? 'bg-teal-500 text-white' : 'bg-white text-charcoal-500 hover:bg-teal-500 hover:text-white'} transition-colors font-medium`}
                onClick={() => handleCategoryChange('eco')}
              >
                Eco-Friendly
              </button>
              <button 
                className={`py-2 px-6 rounded-full ${activeCategory === 'os-e' ? 'bg-teal-500 text-white' : 'bg-white text-charcoal-500 hover:bg-teal-500 hover:text-white'} transition-colors font-medium`}
                onClick={() => handleCategoryChange('os-e')}
              >
                OS&E
              </button>
              <button 
                className={`py-2 px-6 rounded-full ${activeCategory === 'ff-e' ? 'bg-teal-500 text-white' : 'bg-white text-charcoal-500 hover:bg-teal-500 hover:text-white'} transition-colors font-medium`}
                onClick={() => handleCategoryChange('ff-e')}
              >
                FF&E
              </button>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                link={`/contact#quote?product=${product.title}`}
                linkText="Request Details"
                icon={<ArrowRight className="ml-2 h-4 w-4" />}
                category={product.category}
              />
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-charcoal-400">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl font-bold mb-8 text-center">Product Categories Overview</h2>
            
            <div className="space-y-12">
              <div id="linens" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Linens</h3>
                <p className="text-charcoal-400 mb-4">
                  Luxury bed linens is the hallmark of any good hotel. Equinox Supplies is specialized in white hotel bedding with a quality finish, 
                  creating a luxurious feel favoured by the most prestigious establishments. Our bed linen collection includes pillowcases, duvet covers, 
                  flat sheets, fitted sheets, duvets, pillow protectors, cushions & pillows and curtains etc.
                </p>
                <p className="text-charcoal-400">
                  Our linens are crafted from the finest Egyptian and Turkish cotton, with thread counts ranging from 300 to 1000 to suit various hotel categories 
                  and preferences. We offer personalized embroidery and custom designs to align with your hotel's unique brand identity.
                </p>
              </div>
              
              <div id="leather" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Leather Products</h3>
                <p className="text-charcoal-400 mb-4">
                  We work towards a common mission of development of custom designed leather products such as bags, belts, shoes, wallets, laptop bags, 
                  gym-bags etc for our clients to meet their standards of life with confidence. As one of the leading customised leather products suppliers 
                  in the GCC, we standout with handmade leather craftsmanship that has already captured the hearts of our customers.
                </p>
                <p className="text-charcoal-400">
                  Our artisans use premium full-grain and top-grain leather sourced ethically, ensuring durability and luxurious aesthetics. 
                  Each piece can be customized with hotel logos, patterns, and even guest names for a truly personalized experience.
                </p>
              </div>
              
              <div id="amenities" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Hotel Amenities</h3>
                <p className="text-charcoal-400 mb-4">
                  With the arrival of several new hotel brands, competition from short-term rentals, and new technologies, it's easy to get overwhelmed 
                  when trying to make your hotel stand out in the eyes of hotel guests. Renovating your property is expensive and time consuming but 
                  hotel amenities are an easy and high impact way to stand out in your competitive set. Equinox Supplies is well equipped to take up such 
                  challenges with our high quality products.
                </p>
                <p className="text-charcoal-400">
                  Our Amenities products portfolio covers variety of items ranging from toiletries, personal care, coffee kit, bathrobes, and tissues and so on.
                  We partner with luxury cosmetic brands to create bespoke formulations that speak to the discerning tastes of your guests while embodying your hotel's identity.
                </p>
              </div>
              
              <div id="eco" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Eco-Friendly Products</h3>
                <p className="text-charcoal-400 mb-4">
                  With a keen insight into the well being of our environment, Our eco-friendly products have been designed to reduce unnecessary waste 
                  with the use of degradable materials and recycled packaging.
                </p>
                <p className="text-charcoal-400">
                  Equinox Supplies offers a wide range of eco-friendly amenities such as bamboo made dental kit, shaving kit, combs etc. 
                  Our eco-friendly products are hand crafted with specialized technical acumen. We are sure that these products will meet your customer 
                  satisfaction with sustainability.
                </p>
              </div>
              
              <div id="os-e" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Operating Supplies and Equipment (OS&E)</h3>
                <p className="text-charcoal-400 mb-4">
                  Our goal is to build long lasting relationships with our esteemed customers, and to remain as leaders in OS&E. 
                  We offer exceptional value, and understand the customer needs. We conduct business with integrity and honesty, 
                  demonstrating a passion with exceptional commitment to the beloved customers and to the market.
                </p>
                <p className="text-charcoal-400 mb-4">
                  We offer wide range to OS&E products such as:
                </p>
                <ul className="list-disc pl-6 text-charcoal-400 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>Guestrooms (hangers, kettle, bins, safe box etc)</li>
                  <li>Apartments (includes tableware, utensils etc)</li>
                  <li>Meetings Conference and banquets</li>
                  <li>Food and beverage (includes tableware, utensils etc)</li>
                  <li>Buffet (includes display, mobile tables, chafers etc)</li>
                  <li>Front of house (includes trolleys, bins, show polishers etc)</li>
                  <li>Public washrooms (includes bins tissue box covers etc)</li>
                  <li>Room service (includes trolleys etc)</li>
                  <li>Spa (including massage tables, training equipment)</li>
                </ul>
              </div>
              
              <div id="ff-e" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Furnishings, Fixtures and Equipment (FF&E)</h3>
                <p className="text-charcoal-400 mb-4">
                  We also offer high quality, wide range of FF&E products for our customers as per their requirements and it can also be customised 
                  to your wishes.
                </p>
                <ul className="list-disc pl-6 text-charcoal-400 grid grid-cols-1 md:grid-cols-2 gap-2">
                  <li>Case goods (bedroom headboard, side table, coffee table)</li>
                  <li>Loose furniture (eg Chairs Tables)</li>
                  <li>Decorative Lighting</li>
                  <li>Chandeliers</li>
                  <li>Mirrors</li>
                  <li>Artwork</li>
                  <li>Curtains</li>
                  <li>Blinds</li>
                  <li>Bed covers</li>
                  <li>Carpet and rugs</li>
                  <li>Beds</li>
                  <li>Signage</li>
                  <li>Plants</li>
                  <li>Hotel Uniforms (Tailor made as per the needs)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Need Custom Products for Your Property?"
        subtitle="Our team of experts can help you create bespoke solutions tailored to your brand and guest expectations."
        primaryButtonText="Request a Quote"
        primaryButtonLink="/contact#quote"
        secondaryButtonText="Contact Sales Team"
        secondaryButtonLink="/contact"
        backgroundImage="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
      />
    </>
  );
};

export default Products;
