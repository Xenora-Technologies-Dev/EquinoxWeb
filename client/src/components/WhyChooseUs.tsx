import { Star, Settings, Globe, Truck } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="text-center">
    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
      <div className="text-teal-500 text-2xl">
        {icon}
      </div>
    </div>
    <h3 className="font-playfair text-xl font-semibold mb-3">{title}</h3>
    <p className="opacity-90">{description}</p>
  </div>
);

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-teal-500 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Why Choose Equinox Supplies</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            Experience our commitment to excellence that makes us the preferred hospitality supplier in the MENA region.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Feature 
            icon={<Star className="h-6 w-6" />} 
            title="Premium Quality" 
            description="Each product undergoes rigorous quality control to ensure exceptional standards." 
          />
          
          <Feature 
            icon={<Settings className="h-6 w-6" />} 
            title="Customization" 
            description="Tailor-made solutions to match your brand identity and specific requirements." 
          />
          
          <Feature 
            icon={<Globe className="h-6 w-6" />} 
            title="MENA Expertise" 
            description="Deep understanding of Middle Eastern hospitality needs and market preferences." 
          />
          
          <Feature 
            icon={<Truck className="h-6 w-6" />} 
            title="Reliable Delivery" 
            description="Efficient supply chain management ensuring timely deliveries across the GCC." 
          />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
