import { Link } from 'wouter';
import Logo from './ui/logo';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-charcoal-500 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="bg-white p-2 rounded-md inline-block mb-6">
              <Logo size="lg" />
            </div>
            <p className="text-gray-300 mb-6">
              Providing world-class hospitality supplies across the MENA region with a commitment to quality and excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/contact#quote" className="text-gray-300 hover:text-white transition-colors">Request a Quote</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Products</h4>
            <ul className="space-y-3">
              <li><Link href="/products#linens" className="text-gray-300 hover:text-white transition-colors">Linens</Link></li>
              <li><Link href="/products#leather" className="text-gray-300 hover:text-white transition-colors">Leather Products</Link></li>
              <li><Link href="/products#amenities" className="text-gray-300 hover:text-white transition-colors">Hotel Amenities</Link></li>
              <li><Link href="/products#eco" className="text-gray-300 hover:text-white transition-colors">Eco-Friendly Products</Link></li>
              <li><Link href="/products#os-e" className="text-gray-300 hover:text-white transition-colors">OS&E</Link></li>
              <li><Link href="/products#ff-e" className="text-gray-300 hover:text-white transition-colors">FF&E</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-semibold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="text-teal-500 mr-3 mt-1">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="text-gray-300">West Bay, Doha, Qatar</span>
              </li>
              <li className="flex items-start">
                <div className="text-teal-500 mr-3 mt-1">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="text-gray-300">+974 6541239</span>
              </li>
              <li className="flex items-start">
                <div className="text-teal-500 mr-3 mt-1">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="text-gray-300">info@equinoxsupplies.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Equinox Supplies. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
