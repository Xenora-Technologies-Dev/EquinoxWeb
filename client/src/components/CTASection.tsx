import { Link } from 'wouter';

interface CTASectionProps {
  title: string;
  subtitle: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  backgroundImage: string;
}

const CTASection = ({
  title,
  subtitle,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  backgroundImage
}: CTASectionProps) => {
  return (
    <section className="py-20 bg-charcoal-500 text-white bg-cover bg-center relative" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-charcoal-600 opacity-80"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-lg mb-8 opacity-90">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryButtonLink} className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-8 rounded-md transition-colors text-center">
              {primaryButtonText}
            </Link>
            <Link href={secondaryButtonLink} className="bg-transparent hover:bg-white hover:text-charcoal-500 text-white font-medium py-3 px-8 rounded-md border-2 border-white transition-colors text-center">
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
