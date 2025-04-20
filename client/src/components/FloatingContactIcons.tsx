import { Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const FloatingContactIcons = () => {
  const [animateWhatsApp, setAnimateWhatsApp] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  
  // Set up animation interval for WhatsApp icon
  useEffect(() => {
    // Initial delay before showing the message
    const messageTimeout = setTimeout(() => {
      setShowMessage(true);
    }, 3000);
    
    // Animation interval
    const interval = setInterval(() => {
      setAnimateWhatsApp(true);
      setTimeout(() => setAnimateWhatsApp(false), 1000);
    }, 5000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(messageTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
      {/* Email Icon */}
      <a 
        href="mailto:info@equinoxsupplies.com" 
        className="flex items-center justify-center w-12 h-12 bg-teal-500 text-white rounded-full shadow-lg hover:bg-teal-600 transition-all duration-300 hover:scale-110"
        title="Email Us"
        aria-label="Send us an email"
      >
        <Mail className="h-6 w-6" />
      </a>
      
      {/* WhatsApp Icon with Animation */}
      <div className="relative">
        {showMessage && (
          <div className="absolute right-16 bottom-3 bg-white px-4 py-2 rounded-lg shadow-lg text-sm text-gray-700 whitespace-nowrap animate-fade-in">
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-l-8 border-l-white border-b-8 border-b-transparent"></div>
            Message us on WhatsApp!
            <button 
              onClick={() => setShowMessage(false)} 
              className="ml-2 text-gray-400 hover:text-gray-600"
              aria-label="Close message"
            >
              &times;
            </button>
          </div>
        )}
        <a 
          href="https://wa.me/9746541239" 
          target="_blank" 
          rel="noopener noreferrer"
          className={`flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-all duration-300 ${animateWhatsApp ? 'animate-bounce' : ''}`}
          title="Message Us on WhatsApp"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="h-8 w-8" />
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingContactIcons;