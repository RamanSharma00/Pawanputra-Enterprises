import React from 'react';
import { teamMembers } from '../data';
import { Shield, Award, Users, Mail, PhoneCall } from 'lucide-react';

export default function Team() {
  const getLeaderIcon = (type: string) => {
    switch (type) {
      case 'pagadi':
        return <Award className="w-5 h-5 text-amber-500" />;
      case 'suit':
        return <Shield className="w-5 h-5 text-amber-500" />;
      case 'white_shirt':
        return <Users className="w-5 h-5 text-amber-500" />;
      default:
        return <Award className="w-5 h-5 text-amber-500" />;
    }
  };

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
            Leadership Team
          </span>

          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-900 mt-3 uppercase">
            Management Team
          </h2>

          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />

          <p className="text-primary-600 mt-4 leading-relaxed font-medium">
            The visionary entrepreneurs driving Pawanputra Enterprises toward a modern, quality-first future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
           <div
  key={index}
  className="bg-primary-50 rounded-sm border border-primary-200 overflow-hidden shadow-xs hover:shadow-md hover:border-amber-500/30 transition-all duration-300 flex flex-col"
>
  <div className="h-80 bg-primary-100 flex items-center justify-center">
   <div className="h-96 overflow-hidden">
  <img
    src={member.imageUrl}
    alt={member.name}
    className="w-full h-full object-cover object-center"
  />
</div>
  </div>

  <div className="p-8 flex-1 flex flex-col justify-between">

              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs uppercase font-mono tracking-wider text-amber-600 font-bold flex items-center space-x-1">
                      {getLeaderIcon(member.avatarType)}
                      <span className="ml-1.5">{member.role}</span>
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-primary-900 mb-4 uppercase">
                    {member.name}
                  </h3>

                  <p className="text-primary-700 text-sm leading-relaxed mb-6 font-medium">
                    {member.description}
                  </p>
                </div>

                <div className="pt-5 border-t border-primary-200/60 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <a
                      href="mailto:pawanputra53@gmail.com"
                      className="p-2.5 bg-white rounded-sm text-primary-600 border border-primary-200"
                    >
                      <Mail className="w-4 h-4" />
                    </a>

                    <a
                      href="tel:+918946955587"
                      className="p-2.5 bg-white rounded-sm text-primary-600 border border-primary-200"
                    >
                      <PhoneCall className="w-4 h-4" />
                    </a>
                  </div>

                  <span className="text-[10px] uppercase font-mono text-primary-400 font-bold tracking-wider">
                    Pawanputra Ltd
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}