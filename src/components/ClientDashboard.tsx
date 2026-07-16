import React, { useState, useMemo } from 'react';
import { Project } from '../types';
import { allProjects } from '../data';
import { 
  Key, Landmark, Users, ClipboardList, Briefcase, Plus, Check, 
  TrendingUp, MessageSquare, IndianRupee, ShieldAlert, Cpu, 
  Trash2, FileDown, Eye, RefreshCcw
} from 'lucide-react';

interface ClientDashboardProps {
  onSendMessage: (msg: string) => void;
}

export default function ClientDashboard({ onSendMessage }: ClientDashboardProps) {
  // Login/Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [passcode, setPasscode] = useState('');

  // Tabs state
  const [activeTab, setActiveTab] = useState<'sites' | 'leads' | 'staff' | 'billing'>('sites');

  // Interactive Live Project database (local copy of allProjects to simulate adding/deleting)
  const [localProjects, setLocalProjects] = useState<Project[]>(allProjects);

  // New Project Form state
  const [newProj, setNewProj] = useState({
    client: '',
    description: '',
    type: 'Civil Construction',
    valueNumeric: '',
    valueFormatted: '',
    year: '2026-2027',
    status: 'Work In Progress' as any
  });

  // Interactive Leads database
  const [leads, setLeads] = useState<Array<{ id: string, name: string, email: string, phone: string, service: string, date: string, status: string }>>([
    { id: 'LD-4201', name: 'Sanjay Prajapat', email: 'sanjay.praj@gmail.com', phone: '+91 94142 81530', service: 'Electrical Projects', date: '2026-07-08', status: 'Pending Review' },
    { id: 'LD-9241', name: 'Kamlesh Mewara', email: 'kamleshmewara@yahoo.com', phone: '+91 97823 80431', service: 'Civil Construction', date: '2026-07-06', status: 'Contacted' },
    { id: 'LD-1083', name: 'Rana Sangha', email: 'sranasangha@gmail.com', phone: '+91 89469 55587', service: 'Earthwork & Excavation', date: '2026-07-01', status: 'Deal Signed' }
  ]);

  // Interactive Staff/Employee database
  const [staff, setStaff] = useState([
    { id: 'EMP-01', name: 'Anil Sharma', role: 'CEO / Operations Chief', phone: '+91 89469 55587', status: 'Active' },
    { id: 'EMP-02', name: 'Surendra Singh', role: 'Chief Surveyor', phone: '+91 94141 23820', status: 'Active' },
    { id: 'EMP-03', name: 'Gordhan Jat', role: 'Batching Plant Supervisor', phone: '+91 97820 18451', status: 'On Leave' },
    { id: 'EMP-04', name: 'Devendra Vairagi', role: 'Hydra Crane Operator', phone: '+91 81075 92384', status: 'Active' }
  ]);
  const [newEmp, setNewEmp] = useState({ name: '', role: '', phone: '' });

  // Inbound Billing items
  const billingLedger = [
    { invoiceNo: 'INV-PP-0941', client: 'S.K. KHETAN HINDUSTAN ZINC', amount: '₹29,50,00,000', dueDate: '2026-08-15', status: 'Awaiting Milestone' },
    { invoiceNo: 'INV-PP-0820', client: 'SK KHETAN - UltraTech Plant', amount: '₹2,55,00,000', dueDate: '2026-07-30', status: 'Pending Approval' },
    { invoiceNo: 'INV-PP-0701', client: 'SHRI RAJENDRA KUMAR KALAL', amount: '₹6,95,00,000', dueDate: '2026-06-30', status: 'Paid & Settled' }
  ];

  // Auth submits
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() !== '') {
      setIsLoggedIn(true);
      onSendMessage(`Pawanputra internal staff logged into Admin Terminal.`);
    }
  };

  const handleDemoLogin = () => {
    setIsLoggedIn(true);
    onSendMessage("Logged into Client Dashboard with Admin Passcode bypass.");
  };

  // Add Project Submit
  const handleAddProject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newProj.client || !newProj.description || !newProj.valueNumeric) return;
    
    const valNum = parseFloat(newProj.valueNumeric);
    const formattedVal = valNum >= 100 
      ? `₹${(valNum / 100).toFixed(2)} Crore`
      : `₹${valNum.toFixed(2)} Lakh`;

    const projItem: Project = {
      id: Date.now(),
      sNo: localProjects.length + 1,
      client: newProj.client,
      description: newProj.description,
      type: newProj.type,
      valueNumeric: valNum,
      valueFormatted: formattedVal,
      year: newProj.year,
      status: newProj.status
    };

    setLocalProjects([projItem, ...localProjects]);
    setNewProj({
      client: '',
      description: '',
      type: 'Civil Construction',
      valueNumeric: '',
      valueFormatted: '',
      year: '2026-2027',
      status: 'Work In Progress'
    });
    onSendMessage(`Created new project site registry for ${projItem.client}.`);
  };

  // Delete project
  const handleDeleteProject = (id: number) => {
    setLocalProjects(localProjects.filter(p => p.id !== id));
    onSendMessage("Deleted project site from live tracking database.");
  };

  // Add staff
  const handleAddStaff = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmp.name || !newEmp.role) return;
    setStaff([
      ...staff,
      { id: `EMP-0${staff.length + 1}`, name: newEmp.name, role: newEmp.role, phone: newEmp.phone || '+91 89469 55587', status: 'Active' }
    ]);
    setNewEmp({ name: '', role: '', phone: '' });
    onSendMessage(`Added new employee: ${newEmp.name}`);
  };

  // Dashboard Aggregates
  const aggregates = useMemo(() => {
    const totalSites = localProjects.length;
    const wipCount = localProjects.filter(p => p.status === 'Work In Progress' || p.status === 'Running').length;
    const pendingLeads = leads.filter(l => l.status === 'Pending Review').length;
    return { totalSites, wipCount, pendingLeads };
  }, [localProjects, leads]);

  return (
    <div className="bg-white rounded-sm border border-primary-200 border-l-4 border-l-amber-500 shadow-lg p-6 sm:p-8 min-h-[500px]">
      
      {/* SECURE TERMINAL LOGIN ACCESS */}
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto py-8">
          
          <div className="text-center mb-8">
            <div className="bg-primary-900 p-3.5 rounded-sm inline-block text-amber-500 mb-3 shadow-md border border-primary-800">
              <Key className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-primary-900 uppercase">
              Pawanputra Admin Terminal
            </h3>
            <p className="text-primary-600 text-sm mt-2 font-medium">
              Internal back-office authorization portal. Enter administrative passcode.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1.5">
                Staff Passcode
              </label>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-900 hover:bg-primary-950 text-amber-400 font-mono font-bold py-3 rounded-sm shadow-sm flex items-center justify-center space-x-2 cursor-pointer mt-4 uppercase tracking-wider text-xs border border-primary-800"
            >
              <Landmark className="w-4 h-4 text-amber-500" />
              <span>Authorize Terminal</span>
            </button>
          </form>

          {/* Quick login bypass */}
          <div className="mt-6 pt-6 border-t border-primary-100">
            <button
              onClick={handleDemoLogin}
              className="w-full bg-amber-500 hover:bg-amber-600 text-primary-950 text-xs font-mono font-bold py-2.5 rounded-sm transition-colors flex items-center justify-center space-x-2 uppercase tracking-wider"
            >
              <span>🚀 DEV DEMO: Bypass Passcode</span>
            </button>
          </div>

        </div>
      ) : (
        /* BACK-OFFICE SYSTEM LOGGED IN */
        <div>
          
          {/* Admin Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-primary-200 pb-6 mb-8 gap-4">
            <div className="flex items-center space-x-3">
              <div className="bg-primary-900 text-amber-500 p-3 rounded-sm shadow-md font-mono font-extrabold text-sm border border-primary-800">
                PP_ADM
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary-900 flex items-center space-x-2 uppercase">
                  <span>Pawanputra Staff Desk</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-sm font-mono font-bold animate-pulse">
                    ONLINE
                  </span>
                </h3>
                <p className="text-xs text-primary-500 font-semibold font-mono tracking-wide">
                  Station: Railmagra Head Office | Operator: Anil Sharma (CEO)
                </p>
              </div>
            </div>

            {/* Terminal Reset */}
            <button
              onClick={() => { setIsLoggedIn(false); setPasscode(''); }}
              className="text-xs font-mono font-bold text-primary-600 bg-primary-50 border border-primary-200 px-3.5 py-2 rounded-sm hover:bg-rose-50 hover:text-rose-600 hover:border-rose-300 transition-all self-start md:self-auto"
            >
              Close Live Session
            </button>
          </div>

          {/* Aggregate Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8 text-xs font-mono">
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-primary-500 block uppercase tracking-wider font-bold">Project Site Layouts</span>
                <span className="text-xl font-bold text-primary-900 mt-1 block">{aggregates.totalSites} active</span>
              </div>
              <Briefcase className="w-8 h-8 text-primary-400 opacity-20" />
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-amber-600 block uppercase tracking-wider font-bold">WIP Active Deploy</span>
                <span className="text-xl font-bold text-amber-900 mt-1 block">{aggregates.wipCount} running</span>
              </div>
              <Cpu className="w-8 h-8 text-amber-500 opacity-20" />
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-emerald-600 block uppercase tracking-wider font-bold">Inbound Quotations / Leads</span>
                <span className="text-xl font-bold text-emerald-950 mt-1 block">{aggregates.pendingLeads} pending</span>
              </div>
              <MessageSquare className="w-8 h-8 text-emerald-500 opacity-20" />
            </div>
          </div>

          {/* Sub Navigation Menus */}
          <div className="flex flex-wrap border-b border-primary-100 mb-8 gap-1 font-mono text-xs font-semibold">
            <button
              onClick={() => setActiveTab('sites')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'sites'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>Project Register</span>
            </button>

            <button
              onClick={() => setActiveTab('leads')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'leads'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inbound Leads</span>
            </button>

            <button
              onClick={() => setActiveTab('staff')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'staff'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Staff Ledger</span>
            </button>

            <button
              onClick={() => setActiveTab('billing')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'billing'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <IndianRupee className="w-4 h-4" />
              <span>Billing & Invoices</span>
            </button>
          </div>

          {/* TAB 1: SITES AND PROJECT REGISTER (ADD / REMOVE) */}
          {activeTab === 'sites' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form Input Site */}
              <form onSubmit={handleAddProject} className="lg:col-span-5 bg-primary-50 p-6 rounded-2xl border border-primary-200 space-y-4">
                <h4 className="font-display text-base font-bold text-primary-900 mb-4">
                  Add New Site Registry
                </h4>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Client Name / Employer
                  </label>
                  <input
                    type="text"
                    required
                    value={newProj.client}
                    onChange={(e) => setNewProj({ ...newProj, client: e.target.value })}
                    placeholder="E.g. Hindustan Zinc SK Mines"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Description of Work
                  </label>
                  <input
                    type="text"
                    required
                    value={newProj.description}
                    onChange={(e) => setNewProj({ ...newProj, description: e.target.value })}
                    placeholder="E.g. Civil Boundary wall running jobs..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Construction Service Area
                  </label>
                  <select
                    value={newProj.type}
                    onChange={(e) => setNewProj({ ...newProj, type: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
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

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                      Value (Lakhs)
                    </label>
                    <input
                      type="number"
                      required
                      value={newProj.valueNumeric}
                      onChange={(e) => setNewProj({ ...newProj, valueNumeric: e.target.value })}
                      placeholder="E.g. 250 for 2.5 Crore"
                      className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                      Financial Year
                    </label>
                    <select
                      value={newProj.year}
                      onChange={(e) => setNewProj({ ...newProj, year: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                    >
                      <option value="2026-2027">2026-2027</option>
                      <option value="2025-2026">2025-2026</option>
                      <option value="2024-2025">2024-2025</option>
                      <option value="2023-2024">2023-2024</option>
                      <option value="2022-2023">2022-2023</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Operational Status
                  </label>
                  <select
                    value={newProj.status}
                    onChange={(e) => setNewProj({ ...newProj, status: e.target.value as any })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  >
                    <option value="Work In Progress">Work In Progress</option>
                    <option value="Completed">Completed</option>
                    <option value="Supply">Supply Asset</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-primary-950 font-mono font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow-xs"
                >
                  Publish to Site Register
                </button>
              </form>

              {/* Sites active listing */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-display text-base font-bold text-primary-900">
                    Live Active Projects Listing
                  </h4>
                  <span className="text-[10px] font-mono text-primary-400">
                    Total Published: {localProjects.length}
                  </span>
                </div>

                <div className="divide-y divide-primary-100 max-h-[460px] overflow-y-auto border border-primary-200 rounded-xl pr-1.5">
                  {localProjects.map((proj) => (
                    <div key={proj.id} className="p-4 flex items-start justify-between hover:bg-primary-50/50 transition-colors font-mono text-xs text-primary-800">
                      <div>
                        <span className="font-bold text-primary-950 block text-xs sm:text-sm font-display mb-0.5">
                          {proj.client}
                        </span>
                        <p className="text-primary-600 font-medium leading-relaxed mb-1">{proj.description}</p>
                        <div className="flex flex-wrap gap-2 text-[10px] font-bold mt-1.5">
                          <span className="bg-primary-100 text-primary-800 px-2 py-0.5 rounded">F/Y {proj.year}</span>
                          <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded">{proj.valueFormatted}</span>
                          <span className={`px-2 py-0.5 rounded uppercase ${
                            proj.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
                          }`}>{proj.status}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => handleDeleteProject(proj.id)}
                        className="text-rose-500 hover:text-rose-700 p-2 ml-4 shrink-0"
                        title="Delete Site"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: INBOUND LEADS MANAGER */}
          {activeTab === 'leads' && (
            <div className="space-y-6">
              <h4 className="font-display text-lg font-bold text-primary-900 mb-1">
                Inbound Inquiries & Lead Processing
              </h4>
              <p className="text-primary-500 text-xs font-mono mb-4">
                Incoming queries submitted on the website contact or quote forms by prospects.
              </p>

              <div className="border border-primary-200 rounded-2xl overflow-hidden font-mono text-xs">
                <div className="bg-primary-50 border-b border-primary-200 px-4 py-3 font-bold text-[10px] uppercase tracking-wider text-primary-500">
                  Leads and Inquiries Log
                </div>
                
                <div className="divide-y divide-primary-100">
                  {leads.map((lead) => (
                    <div key={lead.id} className="p-4 flex flex-col md:flex-row md:items-center justify-between hover:bg-primary-50/40 transition-colors gap-4">
                      <div>
                        <span className="font-bold text-primary-900 block text-sm">{lead.name}</span>
                        <span className="text-[10px] text-primary-500 block mt-0.5">
                          Email: {lead.email} | Phone: {lead.phone} | Service: {lead.service}
                        </span>
                        <span className="text-[9px] text-primary-400 block font-bold mt-1.5 uppercase">
                          ID: {lead.id} | Received: {lead.date}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3 self-end md:self-auto">
                        <select
                          value={lead.status}
                          onChange={(e) => {
                            const updated = leads.map(l => l.id === lead.id ? { ...l, status: e.target.value } : l);
                            setLeads(updated);
                            onSendMessage(`Updated status of lead ${lead.id} to "${e.target.value}"`);
                          }}
                          className="bg-white border border-primary-200 text-xs font-semibold rounded-lg px-2 py-1 text-primary-800 focus:outline-none"
                        >
                          <option value="Pending Review">Pending Review</option>
                          <option value="Contacted">Contacted</option>
                          <option value="Deal Signed">Deal Signed</option>
                        </select>

                        <button
                          onClick={() => setLeads(leads.filter(l => l.id !== lead.id))}
                          className="text-rose-500 hover:text-rose-700 p-1.5"
                          title="Remove inquiry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: STAFF ROSTER LEDGER */}
          {activeTab === 'staff' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Add Staff form */}
              <form onSubmit={handleAddStaff} className="lg:col-span-5 bg-primary-50 p-6 rounded-2xl border border-primary-200 space-y-4">
                <h4 className="font-display text-base font-bold text-primary-900 mb-4">
                  Add New Staff Member
                </h4>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Employee Name
                  </label>
                  <input
                    type="text"
                    required
                    value={newEmp.name}
                    onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
                    placeholder="E.g. Surendra Jat"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Role Designation
                  </label>
                  <input
                    type="text"
                    required
                    value={newEmp.role}
                    onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })}
                    placeholder="E.g. Site Supervisor"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Emergency Phone
                  </label>
                  <input
                    type="text"
                    value={newEmp.phone}
                    onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })}
                    placeholder="E.g. +91 94142 81530"
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-900 text-white font-mono font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow-xs"
                >
                  Register Staff Record
                </button>
              </form>

              {/* Staff ledger */}
              <div className="lg:col-span-7 space-y-4 font-mono text-xs">
                <h4 className="font-display text-base font-bold text-primary-900">
                  Registered Personnel Ledger
                </h4>
                
                <div className="border border-primary-200 rounded-2xl overflow-hidden">
                  <div className="divide-y divide-primary-100">
                    {staff.map((emp) => (
                      <div key={emp.id} className="p-4 flex items-center justify-between hover:bg-primary-50/40 transition-colors">
                        <div>
                          <span className="font-bold text-primary-900 block text-sm">{emp.name}</span>
                          <span className="text-[10px] text-primary-400 block mt-0.5">
                            ID: {emp.id} | Role: {emp.role} | Contact: {emp.phone}
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                            emp.status === 'Active' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                          }`}>
                            {emp.status}
                          </span>

                          <button 
                            onClick={() => setStaff(staff.filter(s => s.id !== emp.id))}
                            className="text-rose-500 hover:text-rose-700 p-1.5"
                            title="Delete staff"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4: BILLING & INVOICES SYSTEM */}
          {activeTab === 'billing' && (
            <div className="space-y-6">
              <h4 className="font-display text-lg font-bold text-primary-900">
                Billing Milestones and Invoices Ledger
              </h4>
              <p className="text-primary-500 text-xs font-mono">
                Track active client contract financial compliance, outstanding debts, and issued tax invoices.
              </p>

              <div className="border border-primary-200 rounded-2xl overflow-hidden font-mono text-xs">
                <div className="bg-primary-50 border-b border-primary-200 px-4 py-3 font-bold text-[10px] uppercase tracking-wider text-primary-500">
                  Issued Invoice Receipts
                </div>
                
                <div className="divide-y divide-primary-100">
                  {billingLedger.map((bill) => (
                    <div key={bill.invoiceNo} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-primary-50/40 transition-colors gap-2">
                      <div>
                        <span className="font-bold text-primary-900 block">{bill.client}</span>
                        <span className="text-[10px] text-primary-400 block mt-0.5">
                          Invoice ID: {bill.invoiceNo} | Due Date: {bill.dueDate}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 self-end sm:self-auto">
                        <span className="font-bold text-primary-950 text-sm">{bill.amount}</span>
                        
                        <span className={`px-2 py-0.5 rounded text-[9px] font-bold uppercase ${
                          bill.status === 'Paid & Settled' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          {bill.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}
