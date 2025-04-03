
import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-costwise-dark text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">CostWise Innovators</h3>
            <p className="mb-4 text-gray-300">
              Empowering businesses with actionable cost management insights and financial optimization strategies.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a></li>
              <li><a href="#documentation" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-heading text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <MapPin size={20} className="text-costwise-secondary" />
                <span className="text-gray-300"> 4000 Victoria Park Ave
                Toronto, ON M2H 3P4 </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-costwise-secondary" />
                <a href="mailto:contact@costwiseinsights.com" className="text-gray-300 hover:text-white transition-colors">
                  contact@costwiseinsights.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-costwise-secondary" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <p className="text-center text-gray-400 text-sm">
            &copy; {currentYear} CostWise Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
