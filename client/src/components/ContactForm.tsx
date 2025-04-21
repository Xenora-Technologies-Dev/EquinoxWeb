import { useState } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { MapPin, Phone, Mail } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      subject: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: FormValues) => {
      // When deployed to Netlify, this will call the Netlify function
      const response = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }
      
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you soon.",
      });
      form.reset();
      setIsSubmitted(true);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormValues) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-medium mb-2 block">GET IN TOUCH</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">Contact Equinox Supplies</h2>
          <p className="text-lg text-charcoal-400 max-w-3xl mx-auto">
            Reach out to discuss how we can elevate your hospitality experience with our premium products.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            {isSubmitted ? (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <h3 className="font-playfair text-2xl font-semibold mb-4">Thank You!</h3>
                <p className="text-charcoal-400 mb-6">
                  Your message has been received. One of our representatives will get in touch with you shortly.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  className="bg-teal-500 hover:bg-teal-600"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-charcoal-500 font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="Your name" 
                                {...field} 
                                className="px-4 py-3 border border-gray-300 rounded-md focus:border-teal-500" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-charcoal-500 font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="your@email.com" 
                                type="email" 
                                {...field} 
                                className="px-4 py-3 border border-gray-300 rounded-md focus:border-teal-500" 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal-500 font-medium">Company Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your company" 
                              {...field} 
                              className="px-4 py-3 border border-gray-300 rounded-md focus:border-teal-500" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal-500 font-medium">Subject</FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="px-4 py-3 border border-gray-300 rounded-md focus:border-teal-500">
                                <SelectValue placeholder="Select a subject" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="product-inquiry">Product Inquiry</SelectItem>
                              <SelectItem value="custom-order">Custom Order Request</SelectItem>
                              <SelectItem value="quotation">Request for Quotation</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-charcoal-500 font-medium">Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Your message here..." 
                              rows={4} 
                              {...field} 
                              className="px-4 py-3 border border-gray-300 rounded-md focus:border-teal-500 resize-none" 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                      disabled={contactMutation.isPending}
                    >
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </div>
            )}
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-lg shadow-md h-full">
              <h3 className="font-playfair text-2xl font-semibold mb-6" id="quote">Our Office</h3>
              
              <div className="mb-8">
                <div className="flex items-start mb-4">
                  <div className="text-teal-500 mr-4 mt-1">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-charcoal-400">PO Box 3007, Doha, Qatar</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className="text-teal-500 mr-4 mt-1">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-charcoal-400">+974 3125 6838</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-teal-500 mr-4 mt-1">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-charcoal-400">info@equinoxsupplies.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h4 className="font-semibold mb-4">Business Hours</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-charcoal-400">Monday - Thursday:</div>
                  <div>8:00 AM - 6:00 PM</div>
                  <div className="text-charcoal-400">Friday:</div>
                  <div>8:00 AM - 12:00 PM</div>
                  <div className="text-charcoal-400">Saturday - Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
              
              {/* Google Map integration can be added here */}
              <div className="h-48 bg-gray-100 rounded-lg mb-8 overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28942.76851357899!2d51.51340389999999!3d25.3206982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c5040c199af9%3A0xdb0a0919f3784fec!2sWest%20Bay%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1663055413932!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Equinox Supplies Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
