import React, { useState, useMemo } from 'react';
import { majorProjects, allProjects } from '../data';
import { Project } from '../types';
import { Search, Filter, SortAsc, SortDesc, DollarSign, Briefcase, Calendar, CheckCircle, Clock } from 'lucide-react';

export default function Projects() {
  // Search and Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedYear, setSelectedYear] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [sortBy, setSortBy] = useState<'value-desc' | 'value-asc' | 'year-desc'>('value-desc');

  // Dynamically compile available years and categories for dropdowns
  const availableYears = useMemo(() => {
    const years = new Set(allProjects.map(p => p.year));
    return ['All', ...Array.from(years).sort().reverse()];
  }, []);

  const availableStatuses = ['All', 'Completed', 'Work In Progress', 'Supply'];

  // Filter and sort core logic
  const filteredProjects = useMemo(() => {
    let result = [...allProjects];

    // Search term matching
    if (searchTerm.trim() !== '') {
      const term = searchTerm.toLowerCase();
      result = result.filter(
        p =>
          p.client.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term) ||
          p.type.toLowerCase().includes(term)
      );
    }

    // Year matching
    if (selectedYear !== 'All') {
      result = result.filter(p => p.year === selectedYear);
    }

    // Status matching
    if (selectedStatus !== 'All') {
      if (selectedStatus === 'Work In Progress') {
        result = result.filter(p => p.status === 'Work In Progress' || p.status === 'Running');
      } else {
        result = result.filter(p => p.status === selectedStatus);
      }
    }

    // Sort matching
    result.sort((a, b) => {
      if (sortBy === 'value-desc') {
        return b.valueNumeric - a.valueNumeric;
      }
      if (sortBy === 'value-asc') {
        return a.valueNumeric - b.valueNumeric;
      }
      // Default: sort by year (lexicographically descending)
      return b.year.localeCompare(a.year);
    });

    return result;
  }, [searchTerm, selectedYear, selectedStatus, sortBy]);

  // Aggregate stats of filtered selection
  const stats = useMemo(() => {
    const total = filteredProjects.length;
    const completed = filteredProjects.filter(p => p.status === 'Completed').length;
    const wip = filteredProjects.filter(p => p.status === 'Work In Progress' || p.status === 'Running').length;
    return { total, completed, wip };
  }, [filteredProjects]);

  return (
    <section id="projects" className="py-20 bg-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase font-mono tracking-widest text-amber-600 bg-amber-500/10 px-3 py-1 rounded-sm border border-amber-500/20 font-bold">
            Project Track Record
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-primary-900 mt-3 uppercase">
            Our Major Projects & Contracts
          </h2>
          <div className="h-1 w-20 bg-amber-500 mx-auto mt-4" />
          <p className="text-primary-600 mt-4 leading-relaxed font-medium">
            From heavy structural works for Hindustan Zinc Limited to government projects. View our core achievements ordered by value.
          </p>
        </div>

        {/* 1. HIGHLIGHTED MAJOR PROJECTS GRID (Ordered from Highest to Lowest Value) */}
        <div className="mb-16">
          <div className="flex items-center space-x-2.5 mb-6">
            <div className="h-3 w-3 bg-amber-500" />
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-primary-900 uppercase tracking-tight">
              Key Project Highlights (Highest Value to Lowest)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {majorProjects.map((project) => (
              <div 
                key={project.id}
                className="bg-white rounded-sm border border-primary-200 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group border-r-4 border-r-amber-500"
              >
                <div className="p-6">
                  {/* Card Header Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold bg-primary-50 px-2 py-1 rounded-sm">
                      Contract #{project.sNo}
                    </span>
                    <span className={`text-[9px] uppercase font-mono font-bold px-2 py-0.5 rounded-sm flex items-center space-x-1 ${
                      project.status === 'Completed'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-amber-50 text-amber-700 border border-amber-200'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full mr-1.5 ${
                        project.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`} />
                      {project.status}
                    </span>
                  </div>

                  <h4 className="font-display text-base font-bold text-primary-900 group-hover:text-amber-600 transition-colors mb-2 uppercase">
                    {project.client}
                  </h4>
                  
                  <p className="text-primary-600 text-xs sm:text-sm mb-4 leading-relaxed font-medium">
                    {project.description}
                  </p>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  {/* Visual Cost Badge */}
                  <div className="bg-primary-50 rounded-sm p-4 border border-primary-200 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-mono tracking-wider text-primary-500 font-bold block">
                        Project Value
                      </span>
                      <span className="text-lg font-display font-extrabold text-primary-900 block mt-0.5">
                        {project.valueFormatted}
                      </span>
                    </div>
                    
                    <div className="text-right">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-primary-500 font-bold block">
                        Year
                      </span>
                      <span className="text-xs font-mono font-semibold text-primary-800 mt-1 block">
                        {project.year}
                      </span>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        {/* 2. INTERACTIVE HISTORICAL PROJECT DATABASE EXPLORER */}
        <div id="full-database-explorer" className="bg-white rounded-sm border border-primary-200 border-l-4 border-l-amber-500 shadow-md p-6 sm:p-8">
          
          <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-primary-200 pb-6 mb-8 gap-4">
            <div>
              <h3 className="font-display text-lg sm:text-xl font-extrabold text-primary-900 uppercase tracking-tight">
                Pawanputra Achievements Ledger
              </h3>
              <p className="text-primary-500 text-xs sm:text-sm mt-1 font-medium">
                Explore our full, chronological ledger of executed contracts across Rajasthan from 2018 to 2027.
              </p>
            </div>

            {/* In-LEDGER aggregates */}
            <div className="flex items-center space-x-4 bg-primary-50 px-4 py-2 rounded-sm border border-primary-200 self-start md:self-auto text-xs font-mono font-bold">
              <div className="flex items-center space-x-1 text-primary-600">
                <Briefcase className="w-3.5 h-3.5 text-amber-500" />
                <span>Found: <strong>{stats.total}</strong></span>
              </div>
              <div className="h-3 w-px bg-primary-300"></div>
              <div className="flex items-center space-x-1 text-emerald-700">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Completed: <strong>{stats.completed}</strong></span>
              </div>
              <div className="h-3 w-px bg-primary-300"></div>
              <div className="flex items-center space-x-1 text-amber-700">
                <Clock className="w-3.5 h-3.5" />
                <span>WIP: <strong>{stats.wip}</strong></span>
              </div>
            </div>
          </div>

          {/* Filters Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-primary-400 w-4.5 h-4.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search Client, Work, Type..."
                className="w-full pl-10 pr-4 py-2.5 rounded-sm bg-primary-50 border border-primary-200 text-primary-900 placeholder-primary-400 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-semibold"
              />
            </div>

            {/* Year Selector */}
            <div className="relative">
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-sm bg-primary-50 border border-primary-200 text-primary-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-semibold appearance-none cursor-pointer"
              >
                <option value="All">Filter by Year: All Years</option>
                {availableYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            {/* Status Selector */}
            <div className="relative">
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-sm bg-primary-50 border border-primary-200 text-primary-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-semibold appearance-none cursor-pointer"
              >
                <option value="All">Filter by Status: All Statuses</option>
                {availableStatuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>

            {/* Sort Selector */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="w-full px-3.5 py-2.5 rounded-sm bg-primary-50 border border-primary-200 text-primary-900 text-sm focus:outline-none focus:border-amber-500 focus:bg-white transition-all font-semibold appearance-none cursor-pointer"
              >
                <option value="value-desc">Sort: Value (High to Low)</option>
                <option value="value-asc">Sort: Value (Low to High)</option>
                <option value="year-desc">Sort: Chronological (Newest)</option>
              </select>
            </div>

          </div>

          {/* Database Responsive Table/List View */}
          <div className="overflow-x-auto border border-primary-200 rounded-sm">
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center text-primary-400">
                <p className="text-base font-semibold">No project records found matching filters.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedYear('All');
                    setSelectedStatus('All');
                    setSortBy('value-desc');
                  }}
                  className="mt-3 text-amber-600 text-xs font-mono font-bold hover:underline"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-primary-50 border-b border-primary-200 font-mono text-[11px] uppercase text-primary-500 font-bold tracking-wider">
                    <th className="py-4 px-5 w-16">Sr.</th>
                    <th className="py-4 px-4 min-w-[200px]">Client / Employer Org</th>
                    <th className="py-4 px-4 min-w-[260px]">Work Name & Description</th>
                    <th className="py-4 px-4 w-32">Status</th>
                    <th className="py-4 px-4 w-32 text-right">Value (Approx)</th>
                    <th className="py-4 px-5 w-32 text-right">F/Y Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-primary-100 text-xs sm:text-sm font-medium">
                  {filteredProjects.map((p, index) => (
                    <tr key={p.id} className="hover:bg-primary-50/50 transition-colors">
                      <td className="py-3.5 px-5 font-mono text-primary-400">
                        {index + 1}
                      </td>
                      <td className="py-3.5 px-4 font-display font-bold text-primary-900">
                        {p.client}
                      </td>
                      <td className="py-3.5 px-4 text-primary-600 leading-normal">
                        {p.description}
                      </td>
                      <td className="py-3.5 px-4">
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-sm text-[10px] font-mono font-semibold uppercase ${
                          p.status === 'Completed' || p.status === 'Complete'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : p.status === 'Work In Progress' || p.status === 'Running' || p.status === 'Work in progress'
                            ? 'bg-amber-50 text-amber-700 border border-amber-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}>
                          {p.status}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-primary-900">
                        {p.valueFormatted}
                      </td>
                      <td className="py-3.5 px-5 text-right font-mono text-primary-500">
                        {p.year}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
