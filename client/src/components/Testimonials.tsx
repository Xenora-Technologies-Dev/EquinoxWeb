import { Star, User } from 'lucide-react';

interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  rating: number;
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center mb-4 text-gold-400">
      {[...Array(5)].map((_, index) => (
        <Star 
          key={index}
          className={`h-5 w-5 ${index < rating ? 'fill-current' : ''}`}
        />
      ))}
    </div>
  );
};

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <StarRating rating={testimonial.rating} />
      <p className="text-charcoal-400 mb-6">{testimonial.content}</p>
      <div className="flex items-center">
        <div className="mr-4">
          <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
            <User className="h-6 w-6" />
          </div>
        </div>
        <div>
          <h4 className="font-semibold">{testimonial.author}</h4>
          <p className="text-sm text-charcoal-400">{testimonial.position}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = ({ title, subtitle, testimonials }: TestimonialsProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-medium mb-2 block">TESTIMONIALS</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">{subtitle}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
