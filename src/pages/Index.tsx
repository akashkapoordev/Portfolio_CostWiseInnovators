import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Documentation from '@/components/Documentation';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="fixed inset-0 z-[-1] bg-gradient-to-br from-white via-blue-50/30 to-white pointer-events-none"></div>
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Documentation />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
