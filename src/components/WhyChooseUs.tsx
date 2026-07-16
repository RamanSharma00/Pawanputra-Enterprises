import React from 'react';
import { whyChooseUs } from '../data';
import { Check, ShieldCheck, Zap, Award, FlameKindling, Landmark } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
            Our Edge
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-900 mt-3 uppercase">
            Why Choose PAWANPUTRA ENTERPRISES
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          <p className="text-primary-600 mt-4 leading-relaxed font-medium">
            Delivering the best in materials, scheduling, engineering compliance, and transparent financial execution.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyChooseUs.map((item, index) => (
            <div 
              key={index}
              className="bg-white border border-primary-200 p-6 rounded-sm shadow-xs hover:shadow-md hover:border-amber-500/30 transition-all duration-300 flex flex-col justify-between h-48 group border-r-4 border-r-amber-500"
            >
              <div>
                {/* Custom index badge */}
                <span className="text-xs font-mono font-bold text-amber-600 bg-amber-500/10 px-2 py-0.5 rounded-sm border border-amber-500/20">
                  0{index + 1}
                </span>

                <h3 className="font-display text-base font-bold text-primary-900 group-hover:text-amber-600 transition-colors mt-3 mb-2 uppercase">
                  {item.title}
                </h3>

                <p className="text-primary-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Verified check */}
              <div className="text-right">
                <span className="inline-flex items-center space-x-1.5 text-[10px] font-mono text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-sm font-bold">
                  <Check className="w-3 h-3" />
                  <span>Verified</span>
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
