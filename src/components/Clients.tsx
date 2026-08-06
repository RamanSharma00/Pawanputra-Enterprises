import React from 'react';
import { clients } from '../data';
import { Handshake } from 'lucide-react';
import bharatLogo from '../assets/logos/bharat-construction-logo (2).png';
import dayalLogo from '../assets/logos/dayal-engineering-logo (2).png';
import hindustanLogo from '../assets/logos/Hindustan Jinc Limited-logo.png';
import lntLogo from '../assets/logos/larsen-and-toubro-logo.png';
import mahadevLogo from '../assets/logos/mahadev-builders-logo (2).png';
import monomarkLogo from '../assets/logos/monomark-engineering-logo.png';
import reliantLogo from '../assets/logos/reliant-engineering-logo.png';
import skKhetanLogo from '../assets/logos/S.K. Khetan-logo.png';
import siemensLogo from '../assets/logos/siemens-logo.png';
import srIndustriesLogo from '../assets/logos/sr-industries-logo.png';

export default function Clients() {
  return (
    <section id="clients" className="py-16 bg-white border-t border-b border-primary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase font-mono tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
              Trusted Network
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-primary-900 mt-3 uppercase">
              Our Trusted Clients & Partners
            </h2>
          </div>
          
          <div className="flex items-center space-x-2 text-primary-500 text-sm font-mono bg-primary-50 px-4 py-2 rounded-sm border border-primary-200 self-start md:self-auto font-bold">
            <Handshake className="w-4 h-4 text-amber-500" />
            <span>Over 100+ Corporate Contract Partners</span>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="bg-primary-50 border border-primary-200 p-5 rounded-sm flex flex-col justify-between hover:bg-white hover:border-amber-500/30 transition-all duration-300 group shadow-2xs text-center border-l-4 border-l-primary-200 hover:border-l-amber-500"
            >
              {/* Simulated industrial logo */}
              <div className="bg-white h-24 flex items-center justify-center rounded-sm border border-primary-200 p-3">
  <img
    src={client.logo}
    alt={client.name}
    className="max-h-16 max-w-full object-contain mx-auto"
  />
</div>
              

              <div className="mt-4">
                <h3 className="text-xs sm:text-sm font-extrabold text-primary-900 group-hover:text-amber-600 transition-colors truncate uppercase">
                  {client.name}
                </h3>
                <p className="text-[10px] text-primary-400 font-bold font-mono mt-0.5 uppercase truncate">
                  {client.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
