import React from 'react';
import { Compass, Landmark, Phone, Mail, Award, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8 border-t border-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-primary-800/60 pb-12">
          
          {/* Logo & Slogan Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-500 text-primary-950 p-2 rounded-sm font-mono font-extrabold text-sm shadow-md">
                PP
              </div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-white uppercase">
                Pawanputra
              </span>
            </div>

            <p className="text-primary-300 text-xs sm:text-sm leading-relaxed max-w-xs">
              Building India's Future with Quality, Integrity & Innovation. Over 13+ years of experience in heavy infrastructure, civil contracts, and plant installations.
            </p>
            
            <div className="flex items-center space-x-2 text-[10px] font-mono text-amber-500 uppercase font-bold bg-amber-500/5 px-3 py-1.5 rounded-sm border border-amber-500/20 w-fit">
              <Award className="w-3.5 h-3.5" />
              <span>Rajasthan Grade-A Contractor</span>
            </div>
          </div>

          {/* Core Areas / Links */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
              Contract Segments
            </h4>
            <ul className="space-y-2.5 text-xs text-primary-300 font-medium">
              <li><span className="hover:text-amber-400 transition-colors">Roads & Highway Paving</span></li>
              <li><span className="hover:text-amber-400 transition-colors">Industrial Civil Formwork</span></li>
              <li><span className="hover:text-amber-400 transition-colors">Electrical Substations & Cabling</span></li>
              <li><span className="hover:text-amber-400 transition-colors">Hydraulics & Water Pipeline</span></li>
            </ul>
          </div>

          {/* Quick Navigations */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
              Quick Navigations
            </h4>
            <ul className="space-y-2.5 text-xs text-primary-300 font-medium">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Company</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Services Catalog</a></li>
              <li><a href="#projects" className="hover:text-amber-400 transition-colors">Chronological Ledger</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Lightbox Gallery</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Inquire/Bid proposal</a></li>
            </ul>
          </div>

          {/* Headquarters Info */}
          <div className="space-y-4 text-xs text-primary-300">
            <h4 className="font-display font-bold text-sm uppercase tracking-wider text-amber-400">
              Headquarters Office
            </h4>
            
            <div className="space-y-3 font-mono">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>Railmagra, District: Rajsamand (Rajasthan), Pin: 313329</span>
              </div>

              <div className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>+91 89469 55587 <br /> +91 97823 80431</span>
              </div>

              <div className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="break-all">pawanputra53@gmail.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal credits and declaration */}
        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] font-mono text-primary-500 gap-4">
          <p>© {currentYear} PAWANPUTRA ENTERPRISES. All Rights Reserved.</p>
          <p className="flex items-center space-x-1 text-primary-400 font-semibold uppercase">
            <Landmark className="w-3.5 h-3.5 text-amber-500" />
            <span>ISO 9001:2015 & OHSAS 18001:2007 Certified</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
