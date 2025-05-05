import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'wouter';
import Hero from '@/components/Hero';
import ProductCard from '@/components/ProductCard';
import CTASection from '@/components/CTASection';
import { allProducts, getProductsByCategory } from '@/lib/products';
import { ArrowRight, Star } from 'lucide-react';

interface ProductSlideshowProps {
  images: string[];
  category: string;
}

const ProductSlideshow = ({ images, category }: ProductSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (images.length > 0) {
      const img = new Image();
      img.src = images[0];
      img.onload = () => setIsLoading(false);
    }
  }, [images]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  return (
    <div
      className="relative w-full h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl mb-8"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label={`${category} product slideshow`}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl" />
      )}
      {images.map((image: string, index: number) => (
        <img
          key={index}
          src={image}
          alt={`${category} product ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          } ${isLoading ? 'hidden' : ''}`}
          loading={index === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index: number) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? 'bg-teal-500 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [location, setLocation] = useLocation();

  const slideshowImages: { [key: string]: string[] } = {
    linens: [
      'https://images.unsplash.com/photo-1616627561839-074385245ff6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80',
      '/images/wow-s1.jpg',
      '/images/bed-linen3.jpg',
      '/images/curtains3.jpg',
    ],
    gifts: [
      '/images/Luxury-Corporate-Gifts.png',
      '/images/leather-corporate-gift-ideas-10.jpg', 
      '/images/CorporateGift1.png', 
      '/images/leather-corporate-gift-ideas-7.jpg'// Branded item
    ],
    eco: [
      '/images/bamboo-shaving-kit.webp',
      '/images/bamboo-tooth-dental-kit.webp',
      '/images/bamboo-straw.jpeg',
      '/images/handmade-bamboo-bottles.webp',
    ],
    leather: [
      '/images/Hotel-Leather-Products.avif', // Leather shoes
      '/images/DifferentTypesOfBags.png', // Leather bag
      '/images/LeatherGifts.png', // Portfolio
      '/images/LeatherDesk.jpg', // Wallet
    ],
    amenities: [
      '/images/hotel-room-amenities.jpg',
      '/images/Amenities2.jpg',
      '/images/HotelAmaneties1.webp',
      '/images/Amenities1.jpg'
    ],
    'os-e': [
      '/images/OS&E1.webp',
      '/images/BasicOSE.jpg',
      '/images/hotelOSE2.jpeg',
      '/images/GuestRoom.jpeg',
    ],
    'ff-e': [
      '/images/HotelFurniture1.jpeg',
      '/images/DecorativeLight.jpeg',
      '/images/HotelArt.avif',
      '/images/HotelUnoiform.png',
      '/images/HotelCarpet.avif',
    ],
  };

  useEffect(() => {
    const currentHash = location.split('#')[1] || '';
    setActiveCategory(currentHash || 'all');

    setTimeout(() => {
      const element = document.getElementById(currentHash);
      if (element) {
        element.classList.add('highlight-section', 'animate-fade-in');
        const headerOffset = 120;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });

        setTimeout(() => {
          element.classList.remove('highlight-section', 'animate-fade-in');
        }, 1500);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);

    setFilteredProducts(getProductsByCategory(currentHash || 'all'));
  }, [location]);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // setLocation(`/products#${category}`);

    document.body.classList.add('category-changing');
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    setTimeout(() => {
      document.body.classList.remove('category-changing');
    }, 500);
  };

  const handleQuickView = (product: any) => {
    // Placeholder for quick view modal
    alert(`Quick View: ${product.title}`);
  };

  return (
    <>
      <Helmet>
        <title>Our Products | Equinox Supplies</title>
        <meta
          name="description"
          content="Discover our premium hospitality supplies, featuring luxurious linens and bespoke corporate and promotional gifts."
        />
      </Helmet>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      <Hero
        title="Premium Hospitality Products"
        subtitle="Explore our curated collections, with a focus on luxurious linens and personalized corporate gifts."
        backgroundImage="/images/Hospitality.jpeg"
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Categories"
        secondaryButtonLink="#categories"
      />

      <section id="categories" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-teal-600 font-semibold mb-2 block text-sm sm:text-base">OUR COLLECTIONS</span>
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
              Exceptional Hospitality Products
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto">
              Discover our premium hospitality supplies, with a special emphasis on luxurious linens and bespoke corporate and promotional gifts.
            </p>
          </div>

          {/* Sticky Category Tabs */}
          <div className="sticky top-0 z-10 bg-gray-50 py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 shadow-sm">
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {['all', 'linens', 'gifts', 'amenities', 'eco', 'leather', 'os-e', 'ff-e'].map((category) => (
                <button
                  key={category}
                  className={`relative py-2 px-4 sm:px-6 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gradient-to-r from-teal-600 to-teal-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-teal-50 hover:text-teal-700'
                  } flex items-center`}
                  onClick={() => handleCategoryChange(category)}
                >
                  {category === 'all'
                    ? 'All Products'
                    : category === 'os-e'
                    ? 'OS&E'
                    : category === 'ff-e'
                    ? 'FF&E'
                    : category === 'gifts'
                    ? 'Corporate Gifts'
                    : category.charAt(0).toUpperCase() + category.slice(1)}
                  {(category === 'linens' || category === 'gifts') && (
                    <Star className="ml-2 h-4 w-4 text-yellow-400" aria-hidden="true" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid with Slideshow */}
          <div className="mt-8 sm:mt-12">
            {activeCategory !== 'all' && slideshowImages[activeCategory] && (
              <ProductSlideshow images={slideshowImages[activeCategory]} category={activeCategory} />
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="transform transition-transform hover:scale-105 duration-300"
                >
                  <ProductCard
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
                  {/* <button
                    className="mt-2 w-full py-2 text-sm text-teal-600 hover:text-teal-800 font-semibold"
                    onClick={() => handleQuickView(product)}
                    aria-label={`Quick view for ${product.title}`}
                  >
                    Quick View
                  </button> */}
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg sm:text-xl text-gray-700">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900">
              Explore Our Premium Categories
            </h2>

            <div className="space-y-16">
              {/* Featured Banner for Linens */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-6 rounded-xl mb-8 text-center">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-2">Featured: Luxurious Linens</h3>
                <p className="text-sm sm:text-base">Experience the pinnacle of comfort with our premium cotton linens.</p>
              </div>

              <div id="linens" className="scroll-mt-24 p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 text-teal-600 flex items-center">
                  <a href="#linens" className="transition-all flex items-center group">
                    Linens
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </h3>
                <ProductSlideshow images={slideshowImages.linens} category="linens" />
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Luxury bed linens define the guest experience in top-tier hotels. Our collection, crafted from the finest cotton with
                  thread counts from 300 to 1000, offers unmatched comfort and elegance.
                </p>
                <p className="text-gray-700 text-sm sm:text-base">
                  Personalize your linens with custom embroidery and designs to reflect your brand’s identity, ensuring a memorable stay for your guests.
                </p>
              </div>

              {/* Featured Banner for Corporate and Promotional Gifts */}
              <div className="bg-gradient-to-r from-teal-600 to-teal-500 text-white p-6 rounded-xl mb-8 text-center">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-2">Featured: Corporate & Promotional Gifts</h3>
                <p className="text-sm sm:text-base">Elevate your brand with our bespoke gift items, perfect for VIPs and corporate clients.</p>
              </div>

              <div id="gifts" className="scroll-mt-24 p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 text-teal-600 flex items-center">
                  <a href="#gifts" className="transition-all flex items-center group">
                    Corporate & Promotional Gifts
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </h3>
                <ProductSlideshow images={slideshowImages.gifts} category="gifts" />
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Our corporate and promotional gifts are designed to leave a lasting impression. From elegant leather portfolios to branded gift boxes, each
                  item is crafted to enhance your hotel’s prestige and delight your guests.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Corporate Gift Items</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>Customized leather portfolios and notebooks</li>
                      <li>Engraved business card holders</li>
                      <li>Premium pen sets with hotel branding</li>
                      <li>Executive desk organizers</li>
                      <li>Personalized gift boxes for VIP guests</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Promotional Merchandise</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>Branded luggage tags and keychains</li>
                      <li>Custom USB drives and tech accessories</li>
                      <li>Eco-friendly tote bags with logo</li>
                      <li>Personalized travel kits</li>
                      <li>Event-specific gift sets</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 p-5 rounded-lg">
                  <h4 className="font-semibold text-teal-700 mb-3">Why Choose Our Gifts?</h4>
                  <ul className="text-gray-700 list-disc pl-5 space-y-2 text-sm sm:text-base">
                    <li><span className="font-medium">Premium Quality:</span> Crafted from high-grade materials for durability and elegance.</li>
                    <li><span className="font-medium">Customization:</span> Tailored designs with your logo, colors, and messaging.</li>
                    <li><span className="font-medium">Versatility:</span> Suitable for corporate events, guest giveaways, and VIP appreciation.</li>
                    <li><span className="font-medium">Brand Impact:</span> Reinforces your hotel’s identity with every gift.</li>
                    <li><span className="font-medium">Fast Turnaround:</span> Efficient production and delivery to meet your deadlines.</li>
                  </ul>
                </div>
              </div>

              <div id="amenities" className="scroll-mt-24 p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 text-teal-600 flex items-center">
                  <a href="#amenities" className="transition-all flex items-center group">
                    Hotel Amenities
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </h3>
                <ProductSlideshow images={slideshowImages.amenities} category="amenities" />
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Our hotel amenities elevate guest experiences with luxury soaps, custom shampoos, and premium bathrobes, tailored to your brand.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Premium Bathroom Amenities</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>Luxury soaps and bath products</li>
                      <li>Custom-formulated shampoos and conditioners</li>
                      <li>Body lotions and moisturizers</li>
                      <li>Hotel-branded packaging</li>
                      <li>Luxurious dispenser systems</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Guest Comfort Items</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>Premium bathrobes and slippers</li>
                      <li>Luxury dental and shaving kits</li>
                      <li>Sleep enhancement products</li>
                      <li>Coffee and tea service kits</li>
                      <li>Custom amenity trays and holders</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="eco" className="scroll-mt-24 p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 text-teal-600 flex items-center">
                  <a href="#eco" className="transition-all flex items-center group">
                    Eco-Friendly Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    
                      fill="currentColor"
                      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </h3>
                <ProductSlideshow images={slideshowImages.eco} category="eco" />
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Our eco-friendly products, including bamboo toothbrushes and jute loofahs, promote sustainability without compromising quality.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Bamboo Toothbrushes & Dental Kits</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>S-curve design for adults and C-curve for children</li>
                      <li>Biodegradable bamboo handle</li>
                      <li>Plant-based bristles</li>
                      <li>Environmentally friendly packaging</li>
                      <li>Custom branding options available</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Natural Bath Accessories</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>Neem combs in various designs</li>
                      <li>Wooden shaving razors</li>
                      <li>Jute loofah for natural exfoliation</li>
                      <li>Bamboo tongue cleaners</li>
                      <li>Bamboo and coconut drinking straws</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="leather" className="scroll-mt-24 p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 text-teal-600 flex items-center">
                  <a href="#leather" className="transition-all flex items-center group">
                    Leather Products
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </h3>
                <ProductSlideshow images={slideshowImages.leather} category="leather" />
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Our leather products, including bags and accessories, are crafted with precision for durability and style.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Leather Accessories</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>Business card holders and wallets</li>
                      <li>Executive desk accessories</li>
                      <li>Branded luggage tags</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-5 rounded-lg">
                    <h4 className="font-semibold text-teal-600 mb-2">Leather Bags & Luggage</h4>
                    <ul className="text-gray-700 list-disc pl-5 space-y-1 text-sm sm:text-base">
                      <li>Travel bags and luggage sets</li>
                      <li>Laptop and document bags</li>
                      <li>Elegant backpacks and shoulder bags</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="os-e" className="scroll-mt-24 p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 text-teal-600 flex items-center">
                  <a href="#os-e" className="transition-all flex items-center group">
                    Operating Supplies and Equipment (OS&E)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </h3>
                <ProductSlideshow images={slideshowImages['os-e']} category="os-e" />
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Our OS&E products, from guestroom essentials to banquet supplies, are designed for durability and functionality.
                </p>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
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

              <div id="ff-e" className="scroll-mt-24 p-6 sm:p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl">
                <h3 className="font-playfair text-2xl sm:text-3xl font-semibold mb-4 text-teal-600 flex items-center">
                  <a href="#ff-e" className="transition-all flex items-center group">
                    Furnishings, Fixtures and Equipment (FF&E)
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 ml-2 opacity-0 group-hover:opacity-100 transition-all translate-x-0 group-hover:translate-x-1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
                        clipRule="evenodd"
                      />
                      <path
                        fillRule="evenodd"
                        d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </h3>
                <ProductSlideshow images={slideshowImages['ff-e']} category="ff-e" />
                <p className="text-gray-700 mb-4 text-sm sm:text-base">
                  Our FF&E offerings, from custom headboards to chandeliers, are tailored to enhance your property’s aesthetic.
                </p>
                <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm sm:text-base">
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
        title="Need Custom Linens or Corporate Gifts?"
        subtitle="Our experts can craft bespoke solutions to elevate your brand and guest experience."
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