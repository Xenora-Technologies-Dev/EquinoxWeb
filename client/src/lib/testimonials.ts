export interface Testimonial {
  id: string;
  content: string;
  author: string;
  position: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    content: '"Equinox Supplies has consistently delivered premium quality linens that our guests frequently compliment. Their attention to detail and commitment to excellence make them an ideal partner for our luxury property."',
    author: 'Sarah Al-Mansouri',
    position: 'Purchasing Manager, Luxury Hotel Group',
    rating: 5
  },
  {
    id: '2',
    content: '"The eco-friendly amenities from Equinox have helped us meet our sustainability goals while maintaining the luxury experience our guests expect. Their innovative products have set us apart in the market."',
    author: 'Mohammed Al-Harbi',
    position: 'Operations Director, Resort & Spa',
    rating: 5
  },
  {
    id: '3',
    content: '"The custom leather products we ordered were exceptionally crafted and have become a signature element of our brand. Guests often inquire about where they can purchase similar items for themselves."',
    author: 'Fatima Al-Suwaidi',
    position: 'Brand Manager, Boutique Hotel Chain',
    rating: 5
  }
];
