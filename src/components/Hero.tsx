import React, { useState } from 'react';
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);
  
  const mainFeatures = [
    'Cost Optimization',
    'Real-time Analytics',
    'Smart Recommendations',
    'Automated Reporting'
  ];

  const allFeatures = [
    // Core Features
    'Cost Optimization',
    'Real-time Analytics',
    'Smart Recommendations',
    'Automated Reporting',
    'Interactive Dashboard',
    'Expense Management',
    'Department Analysis',
    'Budget Analysis',
    'Demo Accounts',
    
    // Documentation
    'Project Proposal',
    'Technical Documentation',
    'User Manual',
    'Requirements Document',
    'Final Project Report',
    
    // Team Features
    'Expert Team Profiles',
    'Role-based Information',
    'Contact Integration',
    
    // UI/UX Features
    'Modern Design',
    'Responsive Layout',
    'Smooth Animations',
    'Accessibility Support'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-slide-up">
            Transform Your Business with
            <span className="gradient-text block mt-2">CostWise Innovators</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Empower your business with intelligent cost management and data-driven insights
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a href="https://comforting-bombolone-92d61b.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="btn-primary group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://github.com/akashkapoordev/CostWise-Innovators" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Features List */}
          <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {mainFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 bg-white/50 backdrop-blur-sm rounded-lg shadow-soft hover:shadow-hover transition-all"
                >
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            
            {/* Show More/Less Button */}
            <Button 
              variant="ghost" 
              className="mt-4 text-primary hover:text-primary/80"
              onClick={() => setShowAllFeatures(!showAllFeatures)}
            >
              {showAllFeatures ? (
                <>
                  Show Less <ChevronUp className="ml-1 h-4 w-4" />
                </>
              ) : (
                <>
                  Show All Features <ChevronDown className="ml-1 h-4 w-4" />
                </>
              )}
            </Button>
            
            {/* All Features Grid */}
            {showAllFeatures && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 animate-fade-in">
                {allFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-2 bg-white/30 backdrop-blur-sm rounded-lg shadow-soft hover:shadow-hover transition-all"
                  >
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-xs font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          {[
            { value: '500+', label: 'Active Users' },
            { value: '98%', label: 'Cost Savings' },
            { value: '24/7', label: 'Support' },
            { value: '50+', label: 'Integrations' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
