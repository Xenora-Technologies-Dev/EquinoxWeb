import { Award, Globe, Handshake, Leaf } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature = ({ icon, title, description }: FeatureProps) => (
  <div className="flex items-start">
    <div className="bg-teal-500 p-2 rounded-md text-white mr-4 flex-shrink-0">
      {icon}
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-sm text-charcoal-400">{description}</p>
    </div>
  </div>
);

const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Luxury Hotel Room" 
              className="rounded-lg shadow-xl"
              loading="lazy"
            />
          </div>
          <div className="lg:w-1/2">
            <span className="text-teal-500 font-medium mb-2 block">ABOUT EQUINOX SUPPLIES</span>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">Your Partner in Hospitality Excellence</h2>
            <p className="text-charcoal-400 mb-6">
              We liaison with the sole objective to supply world class Hospitality Cotton Linen Textile Products. 
              As part of our service, we offer Design, Development and Manufacture by taking up the role of a Full service vendor.
            </p>
            <p className="text-charcoal-400 mb-6">
              We sell across the GCC by being at the forefront in the supply of Hotel Linens; amenities, toiletries, 
              eco-friendly disposables, promotional items, pure leather products and specialized products (naturally made 
              disposable and long use products) besides Operating Supplies and Equipment (OS & E).
            </p>
            <p className="text-charcoal-400 mb-8">
              At the heart of our operations, we remain passionate and committed to be your perfect business partner.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Feature 
                icon={<Award className="h-5 w-5" />} 
                title="Premium Quality" 
                description="World-class products with exceptional finish" 
              />
              <Feature 
                icon={<Globe className="h-5 w-5" />} 
                title="Middle East Focus" 
                description="Specialized service across GCC region" 
              />
              <Feature 
                icon={<Handshake className="h-5 w-5" />} 
                title="Partnership Approach" 
                description="Long-term sustainable relationships" 
              />
              <Feature 
                icon={<Leaf className="h-5 w-5" />} 
                title="Eco-Friendly Options" 
                description="Sustainable and environmentally conscious" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
