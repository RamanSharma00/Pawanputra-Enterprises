import React from 'react';
import { machineryItems } from '../data';
import * as LucideIcons from 'lucide-react';

export default function Machinery() {
  const getIcon = (name: string) => {
    const IconComponent = (LucideIcons as any)[name];
    if (IconComponent) {
      return <IconComponent className="w-5 h-5 text-amber-500" />;
    }
    return <LucideIcons.Wrench className="w-5 h-5 text-amber-500" />;
  };

  return (
    <section id="machinery" className="py-20 bg-primary-900 text-white relative overflow-hidden">
      {/* Background vector styling */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-400 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-400/20 font-bold">
            Heavy Machinery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-3 uppercase">
            Our Machinery & Valuable Assets
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          <p className="text-primary-300 mt-4 leading-relaxed font-medium">
            Pawanputra Enterprises maintains absolute self-reliance by owning and operating a comprehensive, modern fleet of construction assets.
          </p>
        </div>

        {/* Machinery Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {machineryItems.map((item, index) => (
            <div 
              key={index}
              className="bg-primary-950/60 border border-primary-800 hover:border-amber-500/40 p-6 rounded-sm shadow-xs hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300 group flex flex-col justify-between border-l-4 border-l-primary-800 hover:border-l-amber-500"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {/* Icon wrap */}
                  <div className="bg-primary-900 border border-primary-800 p-2.5 rounded-sm inline-block group-hover:bg-amber-500 group-hover:text-primary-950 transition-colors">
                    {getIcon(item.iconName)}
                  </div>
                  
                  {/* Status Indicator */}
                  <span className="text-[9px] font-mono uppercase bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded-sm font-bold">
                    Owned Asset
                  </span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-bold text-white group-hover:text-amber-400 transition-colors mb-2 uppercase">
                  {item.name}
                </h3>

                <p className="text-primary-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-primary-800/40 flex items-center justify-between text-[10px] font-mono tracking-wide text-primary-400">
                <span>F/Y Registered</span>
                <span className="text-amber-500 font-bold">100% Operational</span>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-primary-950/40 border border-primary-800 p-6 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3">
            <div className="h-2 w-2 bg-emerald-500 animate-pulse shrink-0 rounded-none" />
            <p className="text-xs sm:text-sm text-primary-300 font-medium">
              All machinery is subjected to routine mechanical safety certifications before and after every site deployment.
            </p>
          </div>
          
          <span className="text-[10px] uppercase font-mono tracking-widest text-primary-500 font-bold shrink-0">
            Safety First • Quality Always
          </span>
        </div>

      </div>
    </section>
  );
}
