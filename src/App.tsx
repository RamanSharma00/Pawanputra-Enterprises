import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import Services from './components/Services';
import Projects from './components/Projects';
import Gallery from './components/Gallery';
import Machinery from './components/Machinery';
import WhyChooseUs from './components/WhyChooseUs';
import Clients from './components/Clients';
import UserDashboard from './components/UserDashboard';
import ClientDashboard from './components/ClientDashboard';
import Contact from './components/Contact';
import Footer from './components/Footer';

import { 
  Compass, Phone, FileText, ChevronUp, Bell, MessageSquare, 
  X, Check, Terminal, ShieldAlert 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [currentPortal, setCurrentPortal] = useState<'none' | 'customer' | 'client'>('none');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Floating live desk notification states
  const [notifications, setNotifications] = useState<string[]>([
    "Welcome to Pawanputra Enterprises! Browse our Class-A projects.",
    "Bidding open for F/Y 2026-2027 Government infrastructure developments."
  ]);
  const [activeNotification, setActiveNotification] = useState<string | null>(null);

  useEffect(() => {
    // Scroll top trigger
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Periodically show helpful notifications
    if (notifications.length > 0) {
      const interval = setTimeout(() => {
        const next = notifications[0];
        setActiveNotification(next);
        setNotifications((prev) => prev.slice(1));
      }, 3500);
      return () => clearTimeout(interval);
    }
  }, [notifications]);

  // Handler for dynamic message logging
  const handleLogMessage = (msg: string) => {
    setActiveNotification(msg);
  };

  // Nav actions
  const handleViewProjects = () => {
    setCurrentPortal('none');
    setActiveTab('projects');
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    setCurrentPortal('none');
    setActiveTab('contact');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOpenQuotation = () => {
    // Instantly transition to Customer Portal and activate the cost calculator
    setCurrentPortal('customer');
    setActiveTab('portal');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    handleLogMessage("Activated dynamic cost calculator. Enter your SqFt values.");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary-950 font-sans text-primary-900 flex flex-col justify-between">
      
      {/* Navigation Layer */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openQuotationModal={handleOpenQuotation}
        setCurrentPortal={setCurrentPortal}
        currentPortal={currentPortal}
      />

      {/* Main Content Areas */}
      <main className="flex-grow">
        {currentPortal === 'none' ? (
          /* PRIMARY CORPORATE LANDING LANDSCAPE */
          <div className="animate-fadeIn">
            <Hero
              onViewProjects={handleViewProjects}
              onContactUs={handleContactUs}
              onGetQuotation={handleOpenQuotation}
            />
            <About />
            <Team />
            <Services />
            <Projects />
            <Gallery />
            <Machinery />
            <WhyChooseUs />
            <Clients />
            <Contact />
          </div>
        ) : (
          /* PORTAL VIEWPORT (Customer or Admin) */
          <div className="pt-28 pb-20 bg-primary-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Back to Site navigation banner */}
              <div className="bg-primary-900 text-white px-6 py-4 rounded-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-md border border-primary-800 border-l-4 border-l-amber-500">
                <div className="flex items-center space-x-2">
                  <span className="text-amber-400 font-mono text-xs font-bold bg-amber-500/10 px-2.5 py-1 rounded-sm border border-amber-500/20">
                    {currentPortal === 'customer' ? "Client Session" : "Staff Session"}
                  </span>
                  <span className="text-sm font-semibold tracking-tight text-primary-100 uppercase">
                    {currentPortal === 'customer' 
                      ? "Currently tracking active sites & dynamic quotes." 
                      : "Administrative ledgers & inbound bids dashboard."}
                  </span>
                </div>

                <button
                  onClick={() => { setCurrentPortal('none'); setActiveTab('about'); }}
                  className="bg-white hover:bg-amber-500 hover:text-primary-950 text-primary-950 text-xs font-bold px-4 py-2 rounded-sm transition-all self-start sm:self-auto cursor-pointer shadow-xs uppercase tracking-wider"
                >
                  ← Back to Corporate Website
                </button>
              </div>

              {/* Render Selected Dashboard */}
              {currentPortal === 'customer' ? (
                <UserDashboard onSendMessage={handleLogMessage} />
              ) : (
                <ClientDashboard onSendMessage={handleLogMessage} />
              )}

            </div>
          </div>
        )}
      </main>

      {/* Corporate Footnote */}
      <Footer />

      {/* FLOATING ACTION UTILITIES */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-3 items-end">
        
        {/* Dynamic floating live desk notification popup */}
        {activeNotification && (
          <div className="bg-primary-900 border border-primary-700 text-white rounded-sm border-l-4 border-l-amber-500 shadow-xl p-4 max-w-sm flex items-start space-x-3.5 backdrop-blur-md animate-slideIn select-none">
            <div className="bg-amber-500/10 p-2 rounded-sm text-amber-500 mt-0.5 shrink-0 border border-amber-500/20">
              <Bell className="w-4 h-4 animate-bounce" />
            </div>
            
            <div className="flex-1">
              <span className="text-[9px] font-mono text-amber-400 font-bold uppercase tracking-widest block mb-0.5">
                PP Operations Desk
              </span>
              <p className="text-xs text-primary-100 leading-normal font-medium">
                {activeNotification}
              </p>
            </div>

            <button 
              onClick={() => setActiveNotification(null)}
              className="text-primary-400 hover:text-white transition-colors p-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <div className="flex space-x-2">
          {/* Scroll To Top button */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              className="bg-primary-900 hover:bg-amber-500 text-white hover:text-primary-950 p-3 rounded-sm shadow-lg border border-primary-700 hover:border-transparent transition-all hover:scale-105 active:scale-95 focus:outline-none"
              title="Scroll to Top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          )}

          {/* Quick Helpline Hotline shortcut */}
          <a
            href="tel:+918946955587"
            className="bg-amber-500 hover:bg-amber-600 text-primary-950 p-3 rounded-sm shadow-lg transition-all hover:scale-105 active:scale-95 flex items-center justify-center border border-amber-400"
            title="Call Office Hotline"
          >
            <Phone className="w-5 h-5" />
          </a>
        </div>

      </div>

    </div>
  );
}
