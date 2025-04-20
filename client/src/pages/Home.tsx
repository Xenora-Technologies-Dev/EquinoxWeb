import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import AboutSection from '@/components/AboutSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import { featuredProducts } from '@/lib/products';
import { testimonials } from '@/lib/testimonials';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Equinox Supplies | Premium Hospitality Solutions for MENA Region</title>
        <meta name="description" content="Equinox Supplies provides world-class hospitality cotton linen textile products, amenities, and operating supplies across the GCC and MENA region." />
      </Helmet>
      
      <Hero 
        title="Premium Hospitality Solutions for the MENA Region"
        subtitle="Delivering world-class hospitality linen, amenities, and supplies to luxury hotels across the Middle East."
        backgroundImage="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        primaryButtonText="Explore Products"
        primaryButtonLink="/products"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <FeaturedProducts 
        title="Elevate Your Guest Experience"
        subtitle="We supply world-class hospitality products with a focus on quality, sustainability, and exceptional service across the GCC region."
        products={featuredProducts}
      />
      
      <AboutSection />
      
      <WhyChooseUs />
      
      <Testimonials 
        title="What Our Clients Say"
        subtitle="Hear from luxury hotels and resorts across the MENA region who trust Equinox Supplies."
        testimonials={testimonials}
      />
      
      <CTASection 
        title="Ready to Elevate Your Hospitality Experience?"
        subtitle="Partner with Equinox Supplies for premium hospitality products that will delight your guests and enhance your brand."
        primaryButtonText="Contact Us Today"
        primaryButtonLink="/contact"
        secondaryButtonText="Explore Products"
        secondaryButtonLink="/products"
        backgroundImage="https://images.unsplash.com/photo-1549294413-26f195471c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
      />
    </>
  );
};

export default Home;
