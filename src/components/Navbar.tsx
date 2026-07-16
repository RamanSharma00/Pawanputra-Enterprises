import React, { useState, useEffect } from 'react';
import { Menu, X, Landmark, Compass, Key, User, FileText, ChevronRight } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  openQuotationModal: () => void;
  setCurrentPortal: (portal: 'none' | 'customer' | 'client') => void;
  currentPortal: 'none' | 'customer' | 'client';
}

export default function Navbar({
  activeTab,
  setActiveTab,
  openQuotationModal,
  setCurrentPortal,
  currentPortal
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'machinery', label: 'Assets' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setIsOpen(false);
    setCurrentPortal('none');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePortalChange = (portal: 'customer' | 'client') => {
    setCurrentPortal(portal);
    setActiveTab('portal');
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-amber-500 shadow-lg ${
        scrolled
          ? 'bg-primary-900 py-2.5'
          : 'bg-primary-900 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => {
              setCurrentPortal('none');
              setActiveTab('about');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <div className="bg-amber-500 p-2 text-primary-950 shadow-md group-hover:scale-105 transition-transform duration-300">
              <Landmark className="w-5.5 h-5.5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-black tracking-tighter leading-none text-white uppercase">
                PAWANPUTRA <span className="text-amber-500">ENTERPRISES</span>
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.18em] font-medium text-primary-300 mt-1 font-sans">
                Industrial • Civil • Electrical • Infrastructure
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold transition-colors ${
                  activeTab === item.id && currentPortal === 'none'
                    ? 'text-amber-400 bg-primary-850/60'
                    : 'text-primary-200 hover:text-amber-400 hover:bg-primary-850/30'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Portal Dropdown or Quick Buttons */}
            <div className="h-5 w-px bg-primary-800 mx-2"></div>

            <button
              onClick={() => handlePortalChange('customer')}
              className={`px-3 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold flex items-center space-x-1.5 transition-colors ${
                currentPortal === 'customer'
                  ? 'text-amber-400 bg-primary-850/60'
                  : 'text-primary-200 hover:text-amber-400'
              }`}
            >
              <User className="w-3.5 h-3.5 text-amber-500" />
              <span>Customer Portal</span>
            </button>

            <button
              onClick={() => handlePortalChange('client')}
              className={`px-3 py-2 rounded-sm text-xs uppercase tracking-wider font-semibold flex items-center space-x-1.5 transition-colors ${
                currentPortal === 'client'
                  ? 'text-amber-400 bg-primary-850/60'
                  : 'text-primary-200 hover:text-amber-400'
              }`}
            >
              <Key className="w-3.5 h-3.5 text-amber-500" />
              <span>Client Login</span>
            </button>
          </nav>

          {/* Desktop CTA Action */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={openQuotationModal}
              className="bg-amber-500 hover:bg-amber-400 text-primary-950 px-4.5 py-2 rounded-sm text-xs font-bold uppercase tracking-wider transition-all flex items-center space-x-1.5"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Get Quotation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={openQuotationModal}
              className="bg-amber-500 text-primary-950 px-3 py-1.5 rounded-sm text-xs font-bold uppercase"
            >
              Quote
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-sm text-primary-200 hover:text-amber-400 hover:bg-primary-850/40 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary-900 border-b-4 border-amber-500 shadow-xl py-4 px-4 space-y-2 animate-fadeIn">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-sm text-sm uppercase tracking-wider font-semibold transition-all flex items-center justify-between ${
                activeTab === item.id && currentPortal === 'none'
                  ? 'text-amber-400 bg-primary-850'
                  : 'text-primary-200 hover:text-amber-400 hover:bg-primary-850'
              }`}
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-primary-500" />
            </button>
          ))}
          <div className="h-px bg-primary-800 my-2 mx-2"></div>
          
          <button
            onClick={() => handlePortalChange('customer')}
            className={`w-full text-left px-4 py-2.5 rounded-sm text-sm uppercase tracking-wider font-semibold flex items-center space-x-2 ${
              currentPortal === 'customer'
                ? 'text-amber-400 bg-primary-850'
                : 'text-primary-200 hover:text-amber-400 hover:bg-primary-850'
            }`}
          >
            <User className="w-4 h-4 text-amber-500" />
            <span>Customer Login Portal</span>
          </button>

          <button
            onClick={() => handlePortalChange('client')}
            className={`w-full text-left px-4 py-2.5 rounded-sm text-sm uppercase tracking-wider font-semibold flex items-center space-x-2 ${
              currentPortal === 'client'
                ? 'text-amber-400 bg-primary-850'
                : 'text-primary-200 hover:text-amber-400 hover:bg-primary-850'
            }`}
          >
            <Key className="w-4 h-4 text-amber-500" />
            <span>Client Dashboard (Staff)</span>
          </button>
        </div>
      )}
    </header>
  );
}
