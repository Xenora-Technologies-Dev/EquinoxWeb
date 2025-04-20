import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Equinox Supplies</title>
        <meta name="description" content="Get in touch with Equinox Supplies for premium hospitality supplies and solutions across the MENA region." />
      </Helmet>
      
      <Hero 
        title="Contact Equinox Supplies"
        subtitle="Get in touch with our team to discuss your hospitality supply needs."
        backgroundImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        primaryButtonText="Send Message"
        primaryButtonLink="#contact"
        secondaryButtonText="Office Location"
        secondaryButtonLink="#location"
      />
      
      <ContactForm />
    </>
  );
};

export default Contact;
