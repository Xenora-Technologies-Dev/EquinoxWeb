import { Link } from 'wouter';

interface HeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
}

const Hero = ({
  title,
  subtitle,
  backgroundImage,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink
}: HeroProps) => {
  return (
    <section className="relative h-[600px] md:h-[700px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white z-10">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-shadow">
            {title}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-shadow">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={primaryButtonLink} className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-6 rounded-md transition-colors text-center">
              {primaryButtonText}
            </Link>
            <Link href={secondaryButtonLink} className="bg-transparent hover:bg-white hover:text-teal-500 text-white font-medium py-3 px-6 rounded-md border-2 border-white transition-colors text-center">
              {secondaryButtonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
