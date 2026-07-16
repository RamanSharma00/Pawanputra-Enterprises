import React, { useState } from 'react';
import { Mail, Phone, MapPin, Landmark, ShieldCheck, Clock, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: 'Civil Construction', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-900 mt-3 uppercase">
            Contact Pawanputra Office
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          <p className="text-primary-600 mt-4 leading-relaxed font-medium">
            Contact our directors or submit an immediate online project bid request.
          </p>
        </div>

        {/* Form and Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Details & Credentials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Cards */}
            <div className="bg-white rounded-sm p-6 border border-primary-200 shadow-2xs space-y-5 border-r-4 border-r-amber-500">
              <h3 className="font-display text-base font-extrabold text-primary-900 border-b border-primary-100 pb-3 mb-4 uppercase tracking-tight">
                Office Information
              </h3>

              <div className="flex items-start space-x-3.5">
                <div className="bg-amber-500/10 p-2.5 rounded-sm text-amber-600 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-primary-400 uppercase tracking-wider block">
                    Registered Location
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-primary-800 leading-relaxed mt-0.5">
                    Railmagra, District: Rajsamand (Rajasthan), Pin: 313329
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-amber-500/10 p-2.5 rounded-sm text-amber-600 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-primary-400 uppercase tracking-wider block">
                    Direct Hotlines (Call Office)
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-primary-800 mt-0.5 leading-loose">
                    <a href="tel:+918946955587" className="hover:text-amber-600">+91 89469 55587</a> <br className="sm:hidden" />
                    <span className="hidden sm:inline mx-2 text-primary-300">|</span> 
                    <a href="tel:+919782380431" className="hover:text-amber-600">+91 97823 80431</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3.5">
                <div className="bg-amber-500/10 p-2.5 rounded-sm text-amber-600 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-primary-400 uppercase tracking-wider block">
                    Electronic Mail
                  </span>
                  <a 
                    href="mailto:pawanputra53@gmail.com"
                    className="text-xs sm:text-sm font-bold text-amber-600 hover:underline mt-0.5 block"
                  >
                    pawanputra53@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Legal Credentials and Tax compliance */}
            <div className="bg-primary-900 text-white rounded-sm p-6 border border-primary-800 shadow-md border-l-4 border-l-amber-500">
              <h3 className="font-display text-sm font-extrabold text-amber-400 border-b border-primary-800 pb-3 mb-4 flex items-center space-x-2 uppercase tracking-wider">
                <ShieldCheck className="w-5 h-5 text-amber-500" />
                <span>GSTIN & Company Compliance</span>
              </h3>

              <div className="space-y-3.5 font-mono text-xs text-primary-300">
                <div className="flex justify-between border-b border-primary-800/60 pb-2">
                  <span className="text-primary-400">Firm Registration:</span>
                  <span className="font-bold text-white">Year 2012</span>
                </div>
                
                <div className="flex justify-between border-b border-primary-800/60 pb-2">
                  <span className="text-primary-400">State / Location Code:</span>
                  <span className="font-bold text-white">Rajasthan State (08)</span>
                </div>

                <div className="flex justify-between border-b border-primary-800/60 pb-2">
                  <span className="text-primary-400">Tax Auditing Category:</span>
                  <span className="font-bold text-white">Industrial Civil Works</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-primary-400">Operational Capacity:</span>
                  <span className="font-bold text-emerald-400 uppercase">Class-A Government Certified</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form / Submit */}
          <div className="lg:col-span-7">
            
            {isSubmitted ? (
              <div className="bg-white rounded-sm border border-primary-200 border-l-4 border-l-amber-500 p-12 text-center shadow-xs flex flex-col items-center justify-center min-h-[420px] animate-fadeIn">
                <div className="bg-emerald-100 p-4 rounded-sm text-emerald-600 mb-4">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="font-display text-2xl font-bold text-primary-900">
                  Bid Inquiry Received Successfully!
                </h3>
                <p className="text-primary-600 mt-2 max-w-md mx-auto leading-relaxed text-sm">
                  Thank you for contacting Pawanputra Enterprises. Our Managing Director <strong>Shambhu Pipla</strong> and CEO <strong>Anil Sharma</strong> will review your specifications and contact you on <strong>{formData.phone}</strong> shortly.
                </p>
                
                <button
                  onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', service: 'Civil Construction', message: '' }); }}
                  className="mt-6 text-xs font-mono font-bold text-amber-600 hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-sm border border-primary-200 border-l-4 border-l-amber-500 p-8 shadow-xs space-y-4">
                <h3 className="font-display text-lg font-bold text-primary-900 mb-2 uppercase tracking-tight">
                  Send Immediate Online Inquiry
                </h3>
                <p className="text-primary-500 text-xs sm:text-sm mb-6 font-semibold">
                  Fill out our brief bidding project form below and receive an official call-back with quotation specs within 1 business day.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                      Your Name / Designation
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="E.g. Mr. Sanjay Prajapat"
                      className="w-full px-4 py-2.5 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                      Contact Phone (Verified)
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="E.g. +91 94140 XXXXX"
                      className="w-full px-4 py-2.5 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="E.g. contact@clientcorp.com"
                      className="w-full px-4 py-2.5 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                      Required Civil Segment
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-sm border border-primary-200 text-sm font-medium focus:outline-none focus:border-amber-500"
                    >
                      <option value="Road & Highway Construction">Road & Highway Construction</option>
                      <option value="Civil Construction">Civil Construction</option>
                      <option value="Earthwork & Excavation">Earthwork & Excavation</option>
                      <option value="Electrical Projects">Electrical Projects</option>
                      <option value="Water Supply Systems">Water Supply Systems</option>
                      <option value="Fire Fighting Systems">Fire Fighting Systems</option>
                      <option value="Industrial Infrastructure">Industrial Infrastructure</option>
                      <option value="Project Consultancy">Project Consultancy</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Describe Project Work scope & Site Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide estimated area (SqFt), location coordinates, scheduling timelines..."
                    className="w-full px-4 py-3 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-primary-950 hover:text-white text-primary-950 font-extrabold py-3.5 rounded-sm shadow-md transition-colors flex items-center justify-center space-x-2 cursor-pointer uppercase tracking-wider text-xs"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Bid Proposal</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
