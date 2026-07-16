import React from 'react';
import { Eye, Target, CheckCircle2, History, Building2, Trophy, Landmark } from 'lucide-react';

export default function About() {
  const missionPoints = [
    "Deliver superior quality projects",
    "Ensure customer satisfaction",
    "Maintain highest safety standards",
    "Adopt modern technology",
    "Build long-term client relationships"
  ];

  const majorPartners = [
    "Hindustan Zinc Limited",
    "Larsen & Toubro (L&T)",
    "Siemens",
    "Bharat Construction Company",
    "SK Khetan Infraprojects",
    "Sanwariya Multiventures",
    "Aces Infradev Pvt Ltd",
    "Reliant Drilling Pvt Ltd",
    "SR Infra Projects"
  ];

  return (
    <section id="about" className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
            Established 2012
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-900 mt-3 uppercase">
            About PAWANPUTRA ENTERPRISES
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          <p className="text-primary-600 mt-4 leading-relaxed font-medium">
            A trusted name in Civil, Industrial, Electrical and Infrastructure Development, delivering solid engineering feats across Rajasthan.
          </p>
        </div>

        {/* Brand Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Text Description */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display text-2xl font-bold text-primary-900">
              13+ Years of Excellence in Construction & Infrastructure Development
            </h3>
            <p className="text-primary-700 leading-relaxed text-base">
              Established in 2012 in Railmagra, Rajsamand (Rajasthan), <strong>PAWANPUTRA ENTERPRISES</strong> has built a robust reputation as a reliable and quality-driven contractor. Over more than a decade, we have assembled state-of-the-art machinery and a highly trained workforce to execute heavy infrastructure, earthworks, specialized electrical cabling, and pipeline works.
            </p>
            <p className="text-primary-700 leading-relaxed text-base">
              Our engineering versatility and rigid adherence to project deadlines have earned us the trust of India's biggest industrial giants, public sector contracts, and regional developers alike.
            </p>

            {/* Partners/Clients List */}
            <div className="pt-4">
              <h4 className="text-xs font-mono uppercase tracking-wider text-primary-500 font-extrabold mb-3">
                Successfully Executed Projects For:
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {majorPartners.map((partner, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center space-x-2 bg-white px-3.5 py-2.5 rounded-sm border border-primary-200 shadow-xs"
                  >
                    <div className="h-1.5 w-1.5 bg-amber-500 shrink-0" />
                    <span className="text-[11px] sm:text-xs font-bold text-primary-800 tracking-tight">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Graphical/Stats Badge Panel */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-primary-900 text-white p-6 rounded-sm flex flex-col justify-between h-48 shadow-md border-r-2 border-amber-500">
              <History className="w-8 h-8 text-amber-400" />
              <div>
                <span className="text-3xl font-display font-extrabold block">13+</span>
                <span className="text-[10px] text-primary-300 font-mono uppercase tracking-wider">Years of Solid Growth</span>
              </div>
            </div>

            <div className="bg-amber-500 text-primary-950 p-6 rounded-sm flex flex-col justify-between h-48 shadow-md border-r-2 border-primary-950">
              <Building2 className="w-8 h-8 text-primary-950" />
              <div>
                <span className="text-3xl font-display font-extrabold block">100%</span>
                <span className="text-[10px] text-primary-900 font-mono uppercase tracking-wider">Safety & Quality Record</span>
              </div>
            </div>

            <div className="bg-white border border-primary-200 p-6 rounded-sm flex flex-col justify-between h-48 shadow-xs border-r-2 border-amber-500">
              <Trophy className="w-8 h-8 text-amber-500" />
              <div>
                <span className="text-3xl font-display font-extrabold text-primary-900 block">50+</span>
                <span className="text-[10px] text-primary-500 font-mono uppercase tracking-wider">Heavy Machinery Fleet</span>
              </div>
            </div>

            <div className="bg-primary-100 border border-primary-200 p-6 rounded-sm flex flex-col justify-between h-48 shadow-xs border-r-2 border-primary-300">
              <Landmark className="w-8 h-8 text-primary-800" />
              <div>
                <span className="text-3xl font-display font-extrabold text-primary-800 block">100+</span>
                <span className="text-[10px] text-primary-500 font-mono uppercase tracking-wider">Satisfied Client Orgs</span>
              </div>
            </div>
          </div>

        </div>

        {/* Vision & Mission Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision Panel */}
          <div className="bg-primary-900 text-white p-8 rounded-sm border-l-4 border-amber-500 shadow-md relative overflow-hidden group hover:bg-primary-950 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full transition-transform group-hover:scale-110" />
            <div className="bg-amber-500/10 p-3 rounded-sm text-amber-400 inline-block mb-5">
              <Eye className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-amber-500 uppercase tracking-wider mb-3">Our Vision</h4>
            <p className="text-primary-200 leading-relaxed text-sm italic">
              "To become India's most trusted construction and infrastructure company, known across the nation for our superior building quality, complete transparency, technological innovation, and timely project delivery."
            </p>
          </div>

          {/* Mission Panel */}
          <div className="bg-white p-8 rounded-sm border border-primary-200 border-l-4 border-amber-500 shadow-sm relative overflow-hidden group hover:border-amber-500/30 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-bl-full transition-transform group-hover:scale-110" />
            <div className="bg-amber-500/10 p-3 rounded-sm text-amber-600 inline-block mb-5">
              <Target className="w-6 h-6" />
            </div>
            <h4 className="font-display text-lg font-bold text-primary-900 uppercase tracking-wider mb-3">Our Mission</h4>
            <div className="space-y-3">
              {missionPoints.map((point, index) => (
                <div key={index} className="flex items-center space-x-2.5 text-sm">
                  <span className="text-amber-500 font-bold">✔</span>
                  <span className="text-primary-700 font-semibold">{point}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
