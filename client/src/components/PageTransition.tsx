import { ReactNode, useEffect, useState } from 'react';
import { useLocation } from 'wouter';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const [location] = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('fadeIn');

  useEffect(() => {
    if (location !== displayLocation) {
      setTransitionStage('fadeOut');
      
      // Scroll to top when changing pages (not just hash changes)
      if (!location.includes('#') || location.split('#')[0] !== displayLocation.split('#')[0]) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [location, displayLocation]);

  useEffect(() => {
    if (transitionStage === 'fadeOut') {
      const timer = setTimeout(() => {
        setDisplayLocation(location);
        setTransitionStage('fadeIn');
      }, 300); // This should match the CSS transition time
      
      return () => clearTimeout(timer);
    }
  }, [transitionStage, location]);

  return (
    <div 
      className={`page-transition ${transitionStage}`}
      style={{
        transition: 'opacity 300ms ease-in-out',
        opacity: transitionStage === 'fadeIn' ? 1 : 0
      }}
    >
      {children}
    </div>
  );
};

export default PageTransition;