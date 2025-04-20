import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import CTASection from '@/components/CTASection';
import { CheckCircle, Award, Globe, Leaf, RefreshCw } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Equinox Supplies</title>
        <meta name="description" content="Learn about Equinox Supplies, your trusted partner in premium hospitality supplies across the MENA region." />
      </Helmet>
      
      <Hero 
        title="About Equinox Supplies"
        subtitle="Your reliable partner for premium hospitality supplies across the MENA region."
        backgroundImage="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
        primaryButtonText="Our Products"
        primaryButtonLink="/products"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <p className="text-lg text-charcoal-400 mb-6">
              Equinox Supplies was established with a clear vision: to provide world-class hospitality supplies to the growing luxury hotel market in the Middle East and North Africa. We recognized the need for a supplier who truly understands the unique requirements and cultural nuances of the region.
            </p>
            <p className="text-lg text-charcoal-400 mb-6">
              We liaison with the sole objective to supply world class Hospitality Cotton Linen Textile Products. As part of our service, we offer Design, Development and Manufacture by taking up the role of a Full service vendor.
            </p>
            <p className="text-lg text-charcoal-400 mb-10">
              Each step of product development is carried out with utmost care, from sourcing the materials required to the moment the final product is ready for delivery, we ensure that at every stage of development there is a constant consistency of quality monitoring. Indisputable client satisfaction is our ultimate goal and more than a client and supplier relationship, we value an equal partnership and a long term sustainable business model.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Our Mission</h3>
                <p className="text-charcoal-400">
                  To provide exceptional quality hospitality supplies that enhance guest experiences, while building lasting partnerships with our clients based on reliability, innovation, and service excellence.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">Our Vision</h3>
                <p className="text-charcoal-400">
                  To be the leading hospitality supplies provider in the MENA region, recognized for our commitment to quality, sustainability, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-teal-500 mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-charcoal-400">
                We are committed to delivering products of the highest quality that meet or exceed international standards and the expectations of luxury hospitality establishments.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-teal-500 mb-4">
                <CheckCircle className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Reliability</h3>
              <p className="text-charcoal-400">
                Our clients can depend on us for consistent quality, on-time delivery, and responsive service. We believe reliability is the foundation of lasting business relationships.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-teal-500 mb-4">
                <Globe className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Regional Expertise</h3>
              <p className="text-charcoal-400">
                Our deep understanding of the MENA hospitality market allows us to provide tailored solutions that respect local customs and exceed regional standards.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-teal-500 mb-4">
                <Leaf className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-charcoal-400">
                We are committed to environmentally responsible practices, offering eco-friendly product lines and continuously improving our sustainability efforts.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-teal-500 mb-4">
                <RefreshCw className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-charcoal-400">
                We constantly explore new materials, designs, and products to help our clients stay at the forefront of hospitality excellence and guest satisfaction.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-teal-500 mb-4">
                <Award className="h-10 w-10" />
              </div>
              <h3 className="font-playfair text-xl font-semibold mb-3">Partnership</h3>
              <p className="text-charcoal-400">
                We view our clients as partners in success. We work collaboratively to understand unique needs and develop customized solutions that help achieve business goals.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      
      <CTASection 
        title="Partner With Us For Excellence"
        subtitle="Join the leading hotels across the MENA region who trust Equinox Supplies for their premium hospitality needs."
        primaryButtonText="Contact Our Team"
        primaryButtonLink="/contact"
        secondaryButtonText="View Products"
        secondaryButtonLink="/products"
        backgroundImage="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
      />
    </>
  );
};

export default About;
