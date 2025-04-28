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
      
      // Scroll to the category section if it exists
      setTimeout(() => {
        const element = document.getElementById(currentHash);
        if (element) {
          // Add a visual indication by briefly highlighting the section
          element.classList.add('highlight-section');
          
          // Scroll with offset for header
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Remove highlight after animation completes
          setTimeout(() => {
            element.classList.remove('highlight-section');
          }, 1500);
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // Filter products based on active category
    setFilteredProducts(getProductsByCategory(activeCategory));
  }, [activeCategory]);
  
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Update URL hash
    window.history.pushState(null, '', `#${category}`);
    
    // Add a visual indicator for the transition
    document.body.classList.add('category-changing');
    
    // Scroll to top of products grid with a nice transition
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start'
      });
    }
    
    // Remove visual indicator after transition completes
    setTimeout(() => {
      document.body.classList.remove('category-changing');
    }, 500);
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
                details={product.details}
                features={product.features}
                materials={product.materials}
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
                  We work towards a common mission of development of custom designed leather products for our clients to meet their standards with confidence. 
                  As one of the leading customized leather products suppliers in the GCC, we stand out with handmade leather craftsmanship that has already 
                  captured the hearts of our customers.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-teal-600 mb-2">Corporate Leather Gifts</h4>
                    <ul className="text-charcoal-400 list-disc pl-5 space-y-1">
                      <li>Customized leather portfolios and folders</li>
                      <li>Business card holders and wallets</li>
                      <li>Executive desk accessories</li>
                      <li>Branded luggage tags</li>
                      <li>Elegant presentation boxes for VIP guests</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-teal-600 mb-2">Premium Leather Bags & Luggage</h4>
                    <ul className="text-charcoal-400 list-disc pl-5 space-y-1">
                      <li>Travel bags and luggage sets</li>
                      <li>Laptop and document bags</li>
                      <li>Custom gym and sports bags</li>
                      <li>Elegant backpacks and shoulder bags</li>
                      <li>Special event and conference bags</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-charcoal-400 mb-4">
                  Our artisans use premium full-grain and top-grain leather sourced ethically, ensuring durability and luxurious aesthetics. 
                  Each piece can be customized with hotel logos, patterns, and even guest names for a truly personalized experience.
                </p>
                
                <div className="bg-teal-50 p-5 rounded-lg">
                  <h4 className="font-medium text-teal-700 mb-3">Our Leather Craftsmanship Process</h4>
                  <ol className="list-decimal pl-5 text-charcoal-500 space-y-2">
                    <li><span className="font-medium">Premium Material Selection:</span> We use only the finest quality leather that ages beautifully and stands the test of time.</li>
                    <li><span className="font-medium">Customization:</span> We work closely with clients to incorporate their branding elements and specific requirements.</li>
                    <li><span className="font-medium">Hand-Crafting:</span> Our skilled artisans handcraft each piece with meticulous attention to detail.</li>
                    <li><span className="font-medium">Quality Assurance:</span> Every product undergoes rigorous quality checks before delivery.</li>
                    <li><span className="font-medium">After-Sales Support:</span> We stand behind our products with excellent customer service and maintenance advice.</li>
                  </ol>
                </div>
              </div>
              
              <div id="amenities" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Hotel Amenities</h3>
                <p className="text-charcoal-400 mb-4">
                  With the arrival of several new hotel brands, competition from short-term rentals, and new technologies, it's easy to get overwhelmed 
                  when trying to make your hotel stand out in the eyes of guests. Renovating your property is expensive and time-consuming, but 
                  hotel amenities are an easy and high-impact way to stand out in your competitive set. Equinox Supplies is well equipped to take up such 
                  challenges with our high-quality products.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-teal-600 mb-2">Premium Bathroom Amenities</h4>
                    <ul className="text-charcoal-400 list-disc pl-5 space-y-1">
                      <li>Luxury soaps and bath products</li>
                      <li>Custom-formulated shampoos and conditioners</li>
                      <li>Body lotions and moisturizers</li>
                      <li>Hotel-branded packaging</li>
                      <li>Luxurious dispenser systems</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-teal-600 mb-2">Guest Comfort Items</h4>
                    <ul className="text-charcoal-400 list-disc pl-5 space-y-1">
                      <li>Premium bathrobes and slippers</li>
                      <li>Luxury dental and shaving kits</li>
                      <li>Sleep enhancement products</li>
                      <li>Coffee and tea service kits</li>
                      <li>Custom amenity trays and holders</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-teal-50 to-gray-50 p-6 rounded-lg mb-6">
                  <h4 className="font-medium text-teal-700 mb-3">Why Our Amenities Stand Out</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4">
                      <div className="text-teal-500 mb-3 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                          <path fillRule="evenodd" d="M12 1.5a.75.75 0 01.75.75V4.5a.75.75 0 01-1.5 0V2.25A.75.75 0 0112 1.5zM5.636 4.136a.75.75 0 011.06 0l1.592 1.591a.75.75 0 01-1.061 1.06l-1.591-1.59a.75.75 0 010-1.061zm12.728 0a.75.75 0 010 1.06l-1.591 1.592a.75.75 0 01-1.06-1.061l1.59-1.591a.75.75 0 011.061 0zm-6.816 4.496a.75.75 0 01.82.311l5.228 7.917a.75.75 0 01-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 01-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 01-1.247-.606l.569-9.47a.75.75 0 01.554-.68zM3 10.5a.75.75 0 01.75-.75H6a.75.75 0 010 1.5H3.75A.75.75 0 013 10.5zm14.25 0a.75.75 0 01.75-.75h2.25a.75.75 0 010 1.5H18a.75.75 0 01-.75-.75zm-8.962 3.712a.75.75 0 010 1.061l-1.591 1.591a.75.75 0 11-1.061-1.06l1.591-1.592a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h5 className="font-medium mb-1">Premium Quality</h5>
                      <p className="text-sm text-charcoal-500">Sourced from leading manufacturers with stringent quality controls</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-teal-500 mb-3 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                          <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                          <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                        </svg>
                      </div>
                      <h5 className="font-medium mb-1">Customization</h5>
                      <p className="text-sm text-charcoal-500">Tailored to your brand with custom packaging, scents, and formulations</p>
                    </div>
                    <div className="text-center p-4">
                      <div className="text-teal-500 mb-3 flex justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                          <path fillRule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152.082A9 9 0 1017.25 10.5a.75.75 0 10-1.5 0 7.5 7.5 0 11-1.769-4.858l.463.171a.75.75 0 10.522-1.41l-.464-.172a.75.75 0 00-.497 0A9.74 9.74 0 0012.963 2.286z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M16.5 10.5a.75.75 0 01-.75.75h-3a.75.75 0 010-1.5h3a.75.75 0 01.75.75z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h5 className="font-medium mb-1">Timely Delivery</h5>
                      <p className="text-sm text-charcoal-500">Reliable supply chain ensuring your amenities arrive when needed</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-charcoal-400">
                  Our amenities product portfolio covers a variety of items ranging from toiletries, personal care, coffee kits, bathrobes, and tissues.
                  We partner with luxury cosmetic brands to create bespoke formulations that speak to the discerning tastes of your guests while embodying 
                  your hotel's unique identity. Whether you're looking for economical options or ultra-luxury amenities, we have solutions to meet every 
                  budget and brand standard.
                </p>
              </div>
              
              <div id="eco" className="scroll-mt-24">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-teal-500">Eco-Friendly Products</h3>
                <p className="text-charcoal-400 mb-4">
                  With a keen insight into the wellbeing of our environment, our eco-friendly products have been designed to reduce unnecessary waste 
                  with the use of biodegradable materials and recyclable packaging. We believe in promoting sustainable hospitality practices.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-teal-600 mb-2">Bamboo Toothbrushes & Dental Kits</h4>
                    <ul className="text-charcoal-400 list-disc pl-5 space-y-1">
                      <li>S-curve design for adults and C-curve for children</li>
                      <li>Biodegradable bamboo handle</li>
                      <li>Plant-based bristles</li>
                      <li>Environmentally friendly packaging</li>
                      <li>Custom branding options available</li>
                    </ul>
                  </div>
                  <div className="bg-white p-5 rounded-lg shadow-sm">
                    <h4 className="font-medium text-teal-600 mb-2">Natural Bath Accessories</h4>
                    <ul className="text-charcoal-400 list-disc pl-5 space-y-1">
                      <li>Neem combs in various designs</li>
                      <li>Wooden shaving razors</li>
                      <li>Jute loofah for natural exfoliation</li>
                      <li>Bamboo tongue cleaners</li>
                      <li>Bamboo and coconut drinking straws</li>
                    </ul>
                  </div>
                </div>
                <p className="text-charcoal-400">
                  Equinox Supplies is committed to sustainable hospitality solutions that don't compromise on quality or guest experience. Our eco-friendly 
                  products are crafted with specialized technical expertise to ensure durability and performance while minimizing environmental impact. 
                  By choosing our sustainable products, you're not only enhancing your guest experience but also demonstrating your commitment to environmental responsibility.
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
