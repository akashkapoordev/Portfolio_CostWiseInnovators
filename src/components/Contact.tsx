
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-costwise-light">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-slide-up">
          <h2 className="section-title">Get In Touch</h2>
          <p className="text-lg text-gray-600">
            Have questions about our project or interested in collaboration? Reach out to our team.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="font-bold text-2xl text-costwise-dark mb-6">Send Us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-gray-50" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <Input id="email" type="email" placeholder="john@example.com" className="bg-gray-50" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" className="bg-gray-50" />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea id="message" placeholder="Write your message here..." className="bg-gray-50 min-h-[120px]" />
                </div>
                
                <Button className="bg-costwise-primary hover:bg-costwise-primary/90 text-white w-full py-6">
                  Send Message <Send size={16} className="ml-2" />
                </Button>
              </form>
            </div>
          </div>
          
          <div className="animate-slide-up delay-100">
            <div className="bg-costwise-dark text-white p-8 rounded-xl h-full">
              <h3 className="font-bold text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-costwise-primary/20 p-3 rounded-full">
                    <MapPin className="text-costwise-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Our Location</h4>
                    <p className="text-gray-300 mt-1">
                      4000 Victoria Park Ave<br />
                      Toronto, ON M2H 3P4 
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-costwise-primary/20 p-3 rounded-full">
                    <Mail className="text-costwise-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Email Us</h4>
                    <a href="mailto:contact@costwiseinsights.com" className="text-gray-300 hover:text-costwise-secondary transition-colors mt-1 block">
                      contact@costwiseinsights.com
                    </a>
                    <a href="mailto:support@costwiseinsights.com" className="text-gray-300 hover:text-costwise-secondary transition-colors mt-1 block">
                      support@costwiseinsights.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-costwise-primary/20 p-3 rounded-full">
                    <Phone className="text-costwise-secondary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Call Us</h4>
                    <a href="tel:+12345678901" className="text-gray-300 hover:text-costwise-secondary transition-colors mt-1 block">
                      +1 (234) 567-8901
                    </a>
                    <a href="tel:+12345678902" className="text-gray-300 hover:text-costwise-secondary transition-colors mt-1 block">
                      +1 (234) 567-8902
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-700">
                <h4 className="font-semibold text-lg mb-4">Office Hours</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="text-gray-300">Monday - Friday:</div>
                  <div>9:00 AM - 6:00 PM</div>
                  <div className="text-gray-300">Saturday:</div>
                  <div>10:00 AM - 4:00 PM</div>
                  <div className="text-gray-300">Sunday:</div>
                  <div>Closed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
