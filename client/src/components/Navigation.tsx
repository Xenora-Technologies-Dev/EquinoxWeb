import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import Logo from '@/components/ui/logo';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';

const Navigation = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  
  // Close mobile menu when changing locations
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header className="bg-white sticky top-0 shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Logo size="lg" className="mr-3" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className={`nav-link font-medium hover:text-teal-500 transition-colors relative ${location === '/' ? 'after:absolute after:w-full after:h-0.5 after:bg-teal-500 after:left-0 after:bottom-[-4px]' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link font-medium hover:text-teal-500 transition-colors relative ${location === '/about' ? 'after:absolute after:w-full after:h-0.5 after:bg-teal-500 after:left-0 after:bottom-[-4px]' : ''}`}>
              About Us
            </Link>
            
            <div className="relative group">
              <Link href="/products" className={`nav-link font-medium hover:text-teal-500 transition-colors flex items-center relative ${location === '/products' ? 'after:absolute after:w-full after:h-0.5 after:bg-teal-500 after:left-0 after:bottom-[-4px]' : ''}`}>
                Products <ChevronDown className="h-4 w-4 ml-1" />
              </Link>
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-[-10px]">
                <Link href="/products#linens" className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-500 transition-colors">
                  Linens
                </Link>
                <Link href="/products#leather" className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-500 transition-colors">
                  Leather Products
                </Link>
                <Link href="/products#amenities" className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-500 transition-colors">
                  Hotel Amenities
                </Link>
                <Link href="/products#eco" className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-500 transition-colors">
                  Eco-Friendly Products
                </Link>
                <Link href="/products#os-e" className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-500 transition-colors">
                  OS&E
                </Link>
                <Link href="/products#ff-e" className="block px-4 py-2 hover:bg-gray-100 hover:text-teal-500 transition-colors">
                  FF&E
                </Link>
              </div>
            </div>
            
            <Link href="/contact" className={`nav-link font-medium hover:text-teal-500 transition-colors relative ${location === '/contact' ? 'after:absolute after:w-full after:h-0.5 after:bg-teal-500 after:left-0 after:bottom-[-4px]' : ''}`}>
              Contact Us
            </Link>
            
            <Link href="/contact#quote" className="bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-colors">
              Request Quote
            </Link>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-500 focus:outline-none"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <div 
          className={`md:hidden bg-white absolute left-0 right-0 shadow-md z-50 transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        >
          <div className="px-4 py-3 space-y-3">
            <Link href="/" className="block font-medium hover:text-teal-500 transition-colors py-2">
              Home
            </Link>
            <Link href="/about" className="block font-medium hover:text-teal-500 transition-colors py-2">
              About Us
            </Link>
            <div className="py-2">
              <div className="flex justify-between items-center">
                <Link href="/products" className="font-medium hover:text-teal-500 transition-colors">
                  Products
                </Link>
                <button 
                  onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                  className="focus:outline-none"
                  aria-label={isProductDropdownOpen ? "Close products menu" : "Open products menu"}
                >
                  {isProductDropdownOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
              <div className={`pl-4 mt-2 space-y-2 ${isProductDropdownOpen ? 'block' : 'hidden'}`}>
                <Link href="/products#linens" className="block py-1 hover:text-teal-500 transition-colors">
                  Linens
                </Link>
                <Link href="/products#leather" className="block py-1 hover:text-teal-500 transition-colors">
                  Leather Products
                </Link>
                <Link href="/products#amenities" className="block py-1 hover:text-teal-500 transition-colors">
                  Hotel Amenities
                </Link>
                <Link href="/products#eco" className="block py-1 hover:text-teal-500 transition-colors">
                  Eco-Friendly Products
                </Link>
                <Link href="/products#os-e" className="block py-1 hover:text-teal-500 transition-colors">
                  OS&E
                </Link>
                <Link href="/products#ff-e" className="block py-1 hover:text-teal-500 transition-colors">
                  FF&E
                </Link>
              </div>
            </div>
            <Link href="/contact" className="block font-medium hover:text-teal-500 transition-colors py-2">
              Contact Us
            </Link>
            <Link href="/contact#quote" className="block bg-teal-500 text-white px-5 py-2 rounded-md hover:bg-teal-600 transition-colors text-center mt-4">
              Request Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
