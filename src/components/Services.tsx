import React from 'react';
import { services } from '../data';
import * as LucideIcons from 'lucide-react';

export default function Services() {
  // Safe icon helper to dynamically resolve Lucide icons
  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-6 h-6 text-amber-500" />;
    }
    return <LucideIcons.Wrench className="w-6 h-6 text-amber-500" />;
  };

  return (
    <section id="services" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-400/20 font-bold">
            What We Do
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-3 uppercase">
            Our Core Services
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          <p className="text-primary-300 mt-4 leading-relaxed">
            From design and site leveling to major highway development, heavy electrical setups, and mine-site structures.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-primary-950/55 hover:bg-primary-950 border border-primary-800 hover:border-amber-500/30 p-6 rounded-sm shadow-xs hover:shadow-lg transition-all duration-300 group flex flex-col justify-between h-72 border-l-4 border-l-primary-800 hover:border-l-amber-500"
            >
              <div>
                {/* Icon square */}
                <div className="bg-primary-900 border border-primary-800 p-2.5 rounded-sm inline-block mb-5 group-hover:bg-amber-500 group-hover:text-primary-950 group-hover:scale-105 transition-all duration-300">
                  <div className="group-hover:text-primary-950 transition-colors">
                    {getIcon(service.iconName)}
                  </div>
                </div>

                <h3 className="font-display text-base font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
                  {service.name}
                </h3>

                <p className="text-primary-300 text-xs leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Service details anchor */}
              <div className="pt-4 border-t border-primary-800/40 flex items-center justify-between text-[10px] font-mono tracking-wide uppercase text-amber-500">
                <span>Pawanputra Engg</span>
                <span className="opacity-0 group-hover:opacity-100 transition-opacity">✔ Active Service</span>
              </div>

            </div>
          ))}
        </div>

        {/* Extra bottom details banner */}
        <div className="mt-16 bg-gradient-to-r from-amber-500 to-amber-600 p-8 rounded-sm text-primary-950 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left">
            <h4 className="font-display text-xl sm:text-2xl font-extrabold tracking-tight uppercase">
              Looking for a custom heavy infrastructure solution?
            </h4>
            <p className="text-primary-950/90 text-xs sm:text-sm mt-1.5 font-bold">
              We own and operate our batching plants, Hydra cranes, and complete transit concrete mixtures. Let's discuss your requirements.
            </p>
          </div>
          <a
            href="#contact"
            className="bg-primary-950 hover:bg-primary-900 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm shadow-md transition-transform shrink-0"
          >
            Inquire Now
          </a>
        </div>

      </div>
    </section>
  );
}
