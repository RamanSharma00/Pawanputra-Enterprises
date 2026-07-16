import React, { useState, useEffect } from 'react';
import { Compass, Phone, FileText, ChevronLeft, ChevronRight, Play, Users, Calendar, Award } from 'lucide-react';

interface HeroProps {
  onViewProjects: () => void;
  onContactUs: () => void;
  onGetQuotation: () => void;
}

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1920&q=80',
    title: 'Building Strong Foundations',
    subtitle: 'Drone Layout Development',
    badge: '13+ Years of Industrial Excellence'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80',
    title: 'Delivering Premium Quality',
    subtitle: 'Residential Township Construction',
    badge: 'ISO Certified Quality and Safety Standards'
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80',
    title: 'Innovating Infrastructure',
    subtitle: 'Civil and Mining Site Developments',
    badge: 'Large Scale Project Capital Capacity'
  }
];

export default function Hero({ onViewProjects, onContactUs, onGetQuotation }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section id="hero" className="relative h-screen min-h-[600px] w-full overflow-hidden bg-primary-950">
      {/* Slider Backgrounds */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
            index === currentSlide ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
          }`}
        >
          {/* Cover image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Elegant dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 via-primary-950/70 to-primary-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-950 via-transparent to-primary-950/40" />
        </div>
      ))}

      {/* Slide Content */}
      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-16">
          <div className="max-w-3xl">
            {/* Professional badge */}
            <div className="bg-amber-500 text-primary-950 text-[10.5px] font-extrabold px-3.5 py-1.5 inline-block mb-6 uppercase tracking-[0.2em] font-mono shadow-md">
              {slides[currentSlide].badge}
            </div>

            {/* Core Titles */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-5 leading-[1.15]">
              Building Strong Foundations <br />
              for a <span className="text-amber-500">Better Tomorrow</span>
            </h1>

            <p className="text-sm sm:text-base text-primary-200 mb-8 max-w-2xl leading-relaxed">
              PAWANPUTRA ENTERPRISES is a leading Civil, Industrial, Electrical and Infrastructure Construction Company delivering large-scale projects across Rajasthan with a commitment to quality, safety and timely execution.
            </p>

            {/* Actions Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 mb-12">
              <button
                onClick={onViewProjects}
                className="bg-white hover:bg-amber-500 text-primary-950 font-bold px-6 py-3 text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center space-x-2 cursor-pointer shadow-lg"
              >
                <Compass className="w-4 h-4" />
                <span>View Projects</span>
              </button>

              <button
                onClick={onContactUs}
                className="border border-white/40 hover:bg-white hover:text-primary-950 text-white font-bold px-6 py-3 text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Contact Us</span>
              </button>

              <button
                onClick={onGetQuotation}
                className="border border-amber-500/50 text-amber-500 hover:bg-amber-500 hover:text-primary-950 font-bold px-6 py-3 text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <FileText className="w-4 h-4" />
                <span>Get Quotation</span>
              </button>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-lg border-t border-primary-800/60 pt-8 font-mono">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white flex items-baseline">
                  <span>13</span>
                  <span className="text-amber-500 text-xl font-sans ml-0.5">+</span>
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-400 mt-1">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white flex items-baseline">
                  <span>100</span>
                  <span className="text-amber-500 text-xl font-sans ml-0.5">+</span>
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-400 mt-1">
                  Projects Completed
                </div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white flex items-baseline">
                  <span>45</span>
                  <span className="text-amber-500 text-xl font-sans ml-0.5">Cr+</span>
                </div>
                <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary-400 mt-1">
                  Active Value
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Manual Slide Navigation */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-primary-950/40 hover:bg-amber-500 hover:text-primary-950 p-2.5 rounded-full text-white backdrop-blur-sm transition-all focus:outline-none"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-primary-950/40 hover:bg-amber-500 hover:text-primary-950 p-2.5 rounded-full text-white backdrop-blur-sm transition-all focus:outline-none"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Slider Bullets */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'w-8 bg-amber-500' : 'w-2.5 bg-primary-700 hover:bg-primary-500'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
