import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import Logo from '@/components/ui/logo';
import { Menu, X, ChevronDown, ChevronUp, Phone, MapPin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Navigation = () => {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  
  // Close mobile menu when changing locations
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Top Information Bar */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-2 hidden md:block">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:+97431256838" className="flex items-center text-sm hover:text-teal-100 transition-colors">
                <Phone className="h-4 w-4 mr-1" />
                <span>+974 3125 6838</span>
              </a>
              <a href="https://wa.me/97431256838" target="_blank" rel="noopener noreferrer" className="flex items-center text-sm hover:text-teal-100 transition-colors">
                <FaWhatsapp className="h-4 w-4 mr-1" />
                <span>WhatsApp</span>
              </a>
              <a href="mailto:info@equinoxsupplies.com" className="flex items-center text-sm hover:text-teal-100 transition-colors">
                <Mail className="h-4 w-4 mr-1" />
                <span>info@equinoxsupplies.com</span>
              </a>
            </div>
            <div className="flex items-center">
              <span className="flex items-center text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                <span>PO Box 3007, Doha, Qatar</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    
      <header className="bg-white sticky top-0 shadow-md z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <Logo size="lg" className="mr-3" />
              </Link>
            </div>
            
            {/* Desktop Navigation - Menubar Style */}
            <nav className="hidden md:flex items-center">
              <ul className="flex space-x-1">
                <li>
                  <Link href="/" className={`nav-link font-medium px-4 py-2 block hover:bg-teal-50 hover:text-teal-600 rounded transition-colors ${location === '/' ? 'text-teal-600 bg-teal-50' : ''}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={`nav-link font-medium px-4 py-2 block hover:bg-teal-50 hover:text-teal-600 rounded transition-colors ${location === '/about' ? 'text-teal-600 bg-teal-50' : ''}`}>
                    About Us
                  </Link>
                </li>
                <li className="relative group">
                  <Link href="/products" className={`nav-link font-medium px-4 py-2 flex items-center hover:bg-teal-50 hover:text-teal-600 rounded transition-colors ${location === '/products' ? 'text-teal-600 bg-teal-50' : ''}`}>
                    Products <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                  <div className="absolute left-0 top-full mt-1 bg-white shadow-lg rounded-md py-2 min-w-[200px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-[-10px]">
                    <Link href="/products#linens" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Linens
                    </Link>
                    <Link href="/products#leather" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Leather Products
                    </Link>
                    <Link href="/products#amenities" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Hotel Amenities
                    </Link>
                    <Link href="/products#eco" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Eco-Friendly Products
                    </Link>
                    <Link href="/products#os-e" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      OS&E
                    </Link>
                    <Link href="/products#ff-e" className="block px-4 py-2 hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      FF&E
                    </Link>
                  </div>
                </li>
                <li>
                  <Link href="/contact" className={`nav-link font-medium px-4 py-2 block hover:bg-teal-50 hover:text-teal-600 rounded transition-colors ${location === '/contact' ? 'text-teal-600 bg-teal-50' : ''}`}>
                    Contact Us
                  </Link>
                </li>
              </ul>
              
              <Link href="/contact#quote" className="bg-teal-500 text-white ml-4 px-5 py-2 rounded-md hover:bg-teal-600 transition-colors">
                Request Quote
              </Link>
            </nav>
            
            {/* Mobile Navigation Toggle */}
            <div className="md:hidden flex items-center">
              <a href="tel:+97431256838" className="mr-4 text-teal-600">
                <Phone className="h-5 w-5" />
              </a>
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
            className={`md:hidden bg-white absolute left-0 right-0 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}
          >
            <div className="px-4 py-3">
              {/* Contact information in mobile menu */}
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-teal-600 mr-2" />
                  <span className="text-sm text-gray-700">PO Box 3007, Doha, Qatar</span>
                </div>
                <div className="flex items-center mb-2">
                  <Phone className="h-4 w-4 text-teal-600 mr-2" />
                  <a href="tel:+97431256838" className="text-sm text-gray-700">+974 3125 6838</a>
                </div>
                <div className="flex items-center mb-2">
                  <FaWhatsapp className="h-4 w-4 text-teal-600 mr-2" />
                  <a href="https://wa.me/97431256838" className="text-sm text-gray-700">WhatsApp</a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 text-teal-600 mr-2" />
                  <a href="mailto:info@equinoxsupplies.com" className="text-sm text-gray-700 break-all">info@equinoxsupplies.com</a>
                </div>
              </div>
              
              {/* Navigation in mobile menu */}
              <div className="space-y-0 divide-y divide-gray-100">
                <Link href="/" className="block font-medium hover:text-teal-600 hover:bg-teal-50 rounded px-3 py-3 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="block font-medium hover:text-teal-600 hover:bg-teal-50 rounded px-3 py-3 transition-colors">
                  About Us
                </Link>
                <div className="py-1">
                  <div className="flex justify-between items-center px-3 py-2 hover:text-teal-600 hover:bg-teal-50 rounded">
                    <Link href="/products" className="font-medium block py-1 flex-grow">
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
                  <div className={`mt-1 ml-3 space-y-1 ${isProductDropdownOpen ? 'block' : 'hidden'}`}>
                    <Link href="/products#linens" className="block py-2 px-4 rounded hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Linens
                    </Link>
                    <Link href="/products#leather" className="block py-2 px-4 rounded hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Leather Products
                    </Link>
                    <Link href="/products#amenities" className="block py-2 px-4 rounded hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Hotel Amenities
                    </Link>
                    <Link href="/products#eco" className="block py-2 px-4 rounded hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      Eco-Friendly Products
                    </Link>
                    <Link href="/products#os-e" className="block py-2 px-4 rounded hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      OS&E
                    </Link>
                    <Link href="/products#ff-e" className="block py-2 px-4 rounded hover:bg-teal-50 hover:text-teal-600 transition-colors">
                      FF&E
                    </Link>
                  </div>
                </div>
                <Link href="/contact" className="block font-medium hover:text-teal-600 hover:bg-teal-50 rounded px-3 py-3 transition-colors">
                  Contact Us
                </Link>
                <div className="pt-3 pb-3">
                  <Link href="/contact#quote" className="block bg-teal-500 text-white px-5 py-3 rounded-md hover:bg-teal-600 transition-colors text-center">
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
