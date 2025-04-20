import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Custom CSS for overall styling
const style = document.createElement('style');
style.textContent = `
  :root {
    --teal-500: #2A8B8B;
    --teal-600: #217878;
    --teal-700: #186565;
    --gold-300: #E6C76E;
    --gold-400: #D4AF37;
    --gold-500: #C4A030;
    --charcoal-400: #555555;
    --charcoal-500: #333333;
    --charcoal-600: #222222;
  }

  html {
    scroll-behavior: smooth;
  }
  
  .font-playfair {
    font-family: 'Playfair Display', serif;
  }
  
  .font-raleway {
    font-family: 'Raleway', sans-serif;
  }
  
  .text-shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .hero-overlay {
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  }
  
  .product-card {
    transition: all 0.3s ease;
  }
  
  .product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
