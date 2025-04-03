import React from 'react';
import { BarChart3, LineChart, PieChart, TrendingUp } from 'lucide-react';
import { Button } from './ui/button';

const About = () => {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: 'Advanced Analytics',
      description: 'Comprehensive data analysis and visualization tools'
    },
    {
      icon: <LineChart className="h-6 w-6" />,
      title: 'Real-time Monitoring',
      description: 'Live tracking of costs and performance metrics'
    },
    {
      icon: <PieChart className="h-6 w-6" />,
      title: 'Smart Insights',
      description: 'AI-powered recommendations for cost optimization'
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Growth Tracking',
      description: 'Monitor and analyze business growth patterns'
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-sm font-medium text-primary mb-2 block">About Us</span>
          <h2 className="section-title">
            Transforming Business Intelligence with
            <span className="gradient-text block mt-2">CostWise Insights</span>
          </h2>
          <p className="section-subtitle">
            We empower businesses with intelligent cost management solutions and data-driven insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-bold text-gray-900">
              Revolutionizing Cost Management
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our platform combines cutting-edge technology with industry expertise to deliver
              comprehensive cost management solutions. We help businesses optimize their operations,
              reduce expenses, and drive sustainable growth through data-driven decision making.
            </p>
            {/* <div className="flex flex-wrap gap-4">
              <Button className="btn-primary">Learn More</Button>
              <Button variant="outline">View Features</Button>
            </div> */}
          </div>
          <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl transform rotate-3" />
            <div className="relative bg-white p-6 rounded-2xl shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="CostWise Dashboard"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl shadow-soft hover:shadow-hover transition-all animate-slide-up"
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-4 bg-primary/10 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-bold text-primary">98%</div>
              <div className="text-left">
                <div className="text-sm text-gray-600">Average Cost Reduction</div>
                <div className="text-sm font-medium text-gray-900">for Our Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
