import { Router as WouterRouter, Switch, Route, useLocation } from 'wouter'; // Import Wouter components
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import FloatingContactIcons from '@/components/FloatingContactIcons';
import PageTransition from '@/components/PageTransition';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Products from '@/pages/Products';
import Contact from '@/pages/Contact';
import { useEffect } from 'react';

// Scroll restoration functionality
const ScrollToTop = () => {
  const [location] = useLocation(); // Using Wouter's useLocation

  useEffect(() => {
    // Only scroll to top if not a hash navigation
    if (!location.includes('#')) {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};

function RouterComponent() {
  return (
    <div className="font-raleway text-charcoal-500 bg-white">
      <ScrollToTop />
      <Navigation />
      <PageTransition>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={Products} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </PageTransition>
      <FloatingContactIcons />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* Wrap routes in Wouter's Router context */}
        <WouterRouter>
          <RouterComponent />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
