import React, { useState, useMemo } from 'react';
import { Project, SupportTicket, OnlineInquiry } from '../types';
import { majorProjects } from '../data';
import { 
  User, Lock, LayoutDashboard, Truck, FileText, CheckCircle, 
  Upload, HelpCircle, FileDown, Plus, CreditCard, DollarSign, 
  Send, AlertCircle, Clock, Trash2, ArrowUpRight, BarChart3
} from 'lucide-react';

interface UserDashboardProps {
  onSendMessage: (msg: string) => void;
}

export default function UserDashboard({ onSendMessage }: UserDashboardProps) {
  // Auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [authForm, setAuthForm] = useState({ username: '', email: '', password: '', fullName: '' });
  const [userProfile, setUserProfile] = useState({ fullName: 'Raman Pipla', email: 'ramanpipla32@gmail.com' });

  // Tab state
  const [activeTab, setActiveTab] = useState<'progress' | 'quotation' | 'documents' | 'tickets' | 'payments'>('progress');

  // Quotation Generator state
  const [quoteInput, setQuoteInput] = useState({
    area: '2500',
    quality: 'Premium (A-Grade)',
    includeElectrical: true,
    includeWater: true,
    includeFire: false,
    remarks: ''
  });
  const [generatedQuote, setGeneratedQuote] = useState<any | null>(null);

  // Document Upload State
  const [documents, setDocuments] = useState<Array<{ id: string, name: string, size: string, date: string, status: string }>>([
    { id: 'DOC-9421', name: 'Land_Registry_Railmagra.pdf', size: '2.4 MB', date: '2026-06-15', status: 'Approved' },
    { id: 'DOC-8153', name: 'Architectural_Duplex_Blueprint.dwg', size: '14.8 MB', date: '2026-06-20', status: 'Under Review' },
    { id: 'DOC-2384', name: 'Soil_Test_Report_Firmness.pdf', size: '1.1 MB', date: '2026-07-02', status: 'Approved' }
  ]);
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [dragActive, setDragActive] = useState(false);

  // Support Tickets State
  const [tickets, setTickets] = useState<SupportTicket[]>([
    { id: 'TKT-1082', subject: 'Inquiry regarding batching plant supply speed', category: 'Site Speed', description: 'Need to increase concrete mixer frequency due to local monsoons.', status: 'In Progress', createdAt: '2026-07-05' },
    { id: 'TKT-2054', subject: 'Tax invoice mismatch for SK Mines cement supply', category: 'Billing', description: 'The GST number on receipt shows a typo in the last digit.', status: 'Resolved', createdAt: '2026-07-01' }
  ]);
  const [newTicket, setNewTicket] = useState({ subject: '', category: 'General Inquiry', description: '' });

  // Auth Submit Handlers
  const handleAuthSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isRegister) {
      setUserProfile({ fullName: authForm.fullName || 'New User', email: authForm.email || 'user@example.com' });
      setIsRegister(false);
      onSendMessage(`Successfully registered account for ${authForm.fullName}!`);
    } else {
      setUserProfile({ fullName: authForm.username || 'Raman Pipla', email: authForm.email || 'ramanpipla32@gmail.com' });
      setIsLoggedIn(true);
      onSendMessage(`Successfully logged in as ${authForm.username || 'Raman Pipla'}`);
    }
  };

  const handleDemoLogin = () => {
    setUserProfile({ fullName: 'Raman Pipla', email: 'ramanpipla32@gmail.com' });
    setIsLoggedIn(true);
    onSendMessage("Logged into Customer Portal using Developer Account.");
  };

  // Live Quotation Calculator
  const handleCalculateQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const areaNum = parseFloat(quoteInput.area) || 0;
    let baseRate = 1400; // Rate per sqft
    if (quoteInput.quality === 'Premium (A-Grade)') baseRate = 1800;
    if (quoteInput.quality === 'Luxury (Ultra-Grade)') baseRate = 2400;

    const baseCost = areaNum * baseRate;
    let electricalCost = quoteInput.includeElectrical ? areaNum * 120 : 0;
    let waterCost = quoteInput.includeWater ? areaNum * 95 : 0;
    let fireCost = quoteInput.includeFire ? areaNum * 150 : 0;

    const totalCost = baseCost + electricalCost + waterCost + fireCost;
    const gstCost = totalCost * 0.18; // 18% Construction GST
    const grandTotal = totalCost + gstCost;

    setGeneratedQuote({
      quoteNumber: `PP-Q-${Math.floor(10000 + Math.random() * 90000)}`,
      date: '2026-07-10',
      baseCost,
      electricalCost,
      waterCost,
      fireCost,
      netTotal: totalCost,
      gst: gstCost,
      grandTotal,
      ...quoteInput
    });
    onSendMessage("Generated construction cost quotation.");
  };

  // Support Ticket Submissions
  const handleCreateTicket = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTicket.subject || !newTicket.description) return;
    const tkt: SupportTicket = {
      id: `TKT-${Math.floor(1000 + Math.random() * 9000)}`,
      subject: newTicket.subject,
      category: newTicket.category,
      description: newTicket.description,
      status: 'Open',
      createdAt: '2026-07-10'
    };
    setTickets([tkt, ...tickets]);
    setNewTicket({ subject: '', category: 'General Inquiry', description: '' });
    onSendMessage(`Submitted support ticket: "${tkt.subject}"`);
  };

  // Mock upload interaction
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    simulateUpload(file.name, file.size);
  };

  const simulateUpload = (fileName: string, bytesSize: number = 2400000) => {
    setUploadProgress(10);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null) return null;
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            const formattedSize = (bytesSize / (1024 * 1024)).toFixed(1) + ' MB';
            setDocuments([
              { id: `DOC-${Math.floor(1000 + Math.random() * 9000)}`, name: fileName, size: formattedSize, date: '2026-07-10', status: 'Pending Review' },
              ...documents
            ]);
            setUploadProgress(null);
          }, 300);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  // Payments Ledger Data
  const paymentsLedger = [
    { receiptNo: 'RCP-49210', title: 'Civil Foundation Advance Booking', amount: '₹15,00,000', date: '2026-06-12', method: 'RTGS / Bank Transfer', status: 'Verified' },
    { receiptNo: 'RCP-81530', title: 'Excavation Site Prep Paving', amount: '₹8,50,000', date: '2026-06-28', method: 'RTGS / Bank Transfer', status: 'Verified' },
    { receiptNo: 'INV-20231', title: 'Sub-grade Plumbing Installments (Pending)', amount: '₹4,50,000', date: '2026-07-08', method: 'Pending', status: 'Awaiting Payment' }
  ];

  return (
    <div className="bg-white rounded-sm border border-primary-200 border-l-4 border-l-amber-500 shadow-lg p-6 sm:p-8 min-h-[500px]">
      
      {/* NOT LOGGED IN STATE */}
      {!isLoggedIn ? (
        <div className="max-w-md mx-auto py-8 animate-fadeIn">
          
          <div className="text-center mb-8">
            <div className="bg-amber-100 p-3 rounded-sm inline-block text-amber-600 mb-3 border border-amber-500/20">
              <User className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-extrabold text-primary-900 uppercase">
              {isRegister ? "Create Customer Account" : "Customer Portal Login"}
            </h3>
            <p className="text-primary-600 text-sm mt-2 font-medium">
              {isRegister 
                ? "Register to check blueprints, raise tickets, and download site logs."
                : "Secure dashboard to track construction progress and invoices."}
            </p>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4">
            {isRegister && (
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={authForm.fullName}
                  onChange={(e) => setAuthForm({ ...authForm, fullName: e.target.value })}
                  placeholder="Shambhu Sharma"
                  className="w-full px-4 py-2.5 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
                />
              </div>
            )}

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={authForm.email}
                onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                placeholder="ramanpipla32@gmail.com"
                className="w-full px-4 py-2.5 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
              />
            </div>

            <div>
              <label className="text-xs font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1.5">
                Password
              </label>
              <input
                type="password"
                required
                value={authForm.password}
                onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-sm border border-primary-200 focus:outline-none focus:border-amber-500 text-sm font-medium"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-primary-950 hover:text-white text-primary-950 font-extrabold py-3 rounded-sm transition-colors shadow-sm flex items-center justify-center space-x-2 cursor-pointer mt-4 uppercase tracking-wider text-xs"
            >
              <Lock className="w-4 h-4" />
              <span>{isRegister ? "Register Account" : "Secure Login"}</span>
            </button>
          </form>

          {/* Quick login bypass and register alternate */}
          <div className="mt-6 pt-6 border-t border-primary-100 flex flex-col space-y-3">
            <button
              onClick={handleDemoLogin}
              className="w-full bg-primary-900 text-white hover:bg-primary-950 text-xs font-mono font-bold py-2.5 rounded-sm transition-colors flex items-center justify-center space-x-2"
            >
              <span>🚀 DEV DEMO: Fast Login (Raman Pipla)</span>
            </button>

            <button
              onClick={() => setIsRegister(!isRegister)}
              className="text-center text-xs text-amber-600 font-mono font-bold hover:underline"
            >
              {isRegister ? "Already have an account? Login here" : "Don't have an account? Register here"}
            </button>
          </div>

        </div>
      ) : (
        /* LOGGED IN ACTIVE DASHBOARD */
        <div>
          
          {/* Dashboard Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-primary-200 pb-6 mb-8 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="bg-amber-500 text-primary-950 font-display font-extrabold p-3 rounded-xl shadow-xs">
                {userProfile.fullName.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-primary-900">
                  Welcome back, {userProfile.fullName}!
                </h3>
                <p className="text-xs text-primary-500 font-semibold font-mono tracking-wide">
                  Account: {userProfile.email} | Client ID: PP-9423
                </p>
              </div>
            </div>

            {/* Logout anchor */}
            <button
              onClick={() => { setIsLoggedIn(false); setGeneratedQuote(null); }}
              className="text-xs font-mono font-bold text-rose-600 bg-rose-50 border border-rose-200 px-3.5 py-2 rounded-lg hover:bg-rose-500 hover:text-white transition-all self-start md:self-auto"
            >
              Logout Securely
            </button>
          </div>

          {/* Tab Navigation Menu */}
          <div className="flex flex-wrap border-b border-primary-100 mb-8 gap-1 font-mono text-xs font-semibold">
            <button
              onClick={() => setActiveTab('progress')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'progress'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <Truck className="w-4 h-4" />
              <span>Track Progress</span>
            </button>

            <button
              onClick={() => setActiveTab('quotation')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'quotation'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>Calculate Quotation</span>
            </button>

            <button
              onClick={() => setActiveTab('documents')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'documents'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <Upload className="w-4 h-4" />
              <span>Upload Documents</span>
            </button>

            <button
              onClick={() => setActiveTab('tickets')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'tickets'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Raise Ticket</span>
            </button>

            <button
              onClick={() => setActiveTab('payments')}
              className={`px-4 py-3 rounded-t-xl transition-all flex items-center space-x-2 border-b-2 ${
                activeTab === 'payments'
                  ? 'border-amber-500 text-primary-900 bg-primary-50'
                  : 'border-transparent text-primary-400 hover:text-primary-700'
              }`}
            >
              <CreditCard className="w-4 h-4" />
              <span>Payment Status</span>
            </button>
          </div>

          {/* TAB 1: TRACK PROGRESS */}
          {activeTab === 'progress' && (
            <div className="space-y-6">
              <div className="bg-primary-50 p-6 rounded-2xl border border-primary-200">
                <h4 className="font-display text-lg font-bold text-primary-900 mb-1">
                  Active Project: Pawan Putra Vihar Township — Railmagra
                </h4>
                <p className="text-primary-500 text-xs font-mono font-medium uppercase tracking-wider">
                  Civil ID: PP-PROJ-841 • Contract Value: ₹2.00 Crore • Status: Running
                </p>

                {/* Progress bar line */}
                <div className="mt-8 relative">
                  <div className="absolute top-4 left-4 right-4 h-1 bg-primary-200 -z-10" />
                  
                  <div className="grid grid-cols-5 text-center font-mono">
                    <div>
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto border-4 border-white shadow-sm font-bold text-xs">
                        ✔
                      </div>
                      <span className="text-xs font-bold text-primary-900 mt-2 block">Site Prep</span>
                      <span className="text-[10px] text-primary-400 block mt-0.5">Completed Jun 12</span>
                    </div>

                    <div>
                      <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto border-4 border-white shadow-sm font-bold text-xs">
                        ✔
                      </div>
                      <span className="text-xs font-bold text-primary-900 mt-2 block">Excavation</span>
                      <span className="text-[10px] text-primary-400 block mt-0.5">Completed Jun 28</span>
                    </div>

                    <div>
                      <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto border-4 border-white shadow-sm font-bold text-xs animate-pulse">
                        3
                      </div>
                      <span className="text-xs font-bold text-primary-900 mt-2 block">Foundations</span>
                      <span className="text-[10px] text-amber-600 font-semibold block mt-0.5">In Progress (60%)</span>
                    </div>

                    <div>
                      <div className="w-8 h-8 rounded-full bg-primary-200 text-primary-400 flex items-center justify-center mx-auto border-4 border-white shadow-xs font-bold text-xs">
                        4
                      </div>
                      <span className="text-xs font-semibold text-primary-400 mt-2 block">Concrete Cast</span>
                      <span className="text-[10px] text-primary-400 block mt-0.5">Pending</span>
                    </div>

                    <div>
                      <div className="w-8 h-8 rounded-full bg-primary-200 text-primary-400 flex items-center justify-center mx-auto border-4 border-white shadow-xs font-bold text-xs">
                        5
                      </div>
                      <span className="text-xs font-semibold text-primary-400 mt-2 block">Finishing</span>
                      <span className="text-[10px] text-primary-400 block mt-0.5">Pending</span>
                    </div>
                  </div>
                </div>

              </div>

              {/* Work Logs List */}
              <div className="border border-primary-200 rounded-2xl p-5">
                <h4 className="font-display text-base font-bold text-primary-900 mb-4">
                  Site Operations Logs (Completed Milestones)
                </h4>
                
                <div className="space-y-4 font-mono text-xs">
                  <div className="flex items-start justify-between border-l-2 border-emerald-500 pl-4 py-1">
                    <div>
                      <span className="font-bold text-primary-900 block">Steel Rebar Foundations Installed for Block C</span>
                      <p className="text-primary-500 mt-0.5">Casting crew deployed 12 Vibrators and Farana Hydra crane for positioning structural steel columns.</p>
                    </div>
                    <span className="text-primary-400 shrink-0 text-right ml-4">2026-07-08</span>
                  </div>

                  <div className="flex items-start justify-between border-l-2 border-emerald-500 pl-4 py-1">
                    <div>
                      <span className="font-bold text-primary-900 block">Soil Compaction and Site Grading Complete</span>
                      <p className="text-primary-500 mt-0.5">JCB loaders leveled 22,000 cubic meters of heavy soil block near Railmagra high road boundary wall.</p>
                    </div>
                    <span className="text-primary-400 shrink-0 text-right ml-4">2026-06-25</span>
                  </div>

                  <div className="flex items-start justify-between border-l-2 border-emerald-500 pl-4 py-1">
                    <div>
                      <span className="font-bold text-primary-900 block">Batching plant materials supply clearance</span>
                      <p className="text-primary-500 mt-0.5">Aggregate materials approved by SGS Quality assurance inspector at the main yard.</p>
                    </div>
                    <span className="text-primary-400 shrink-0 text-right ml-4">2026-06-14</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: QUOTATION GENERATOR */}
          {activeTab === 'quotation' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Input Form */}
              <form onSubmit={handleCalculateQuote} className="lg:col-span-5 space-y-4 bg-primary-50 p-6 rounded-2xl border border-primary-200">
                <h4 className="font-display text-base font-bold text-primary-900 mb-4">
                  Dynamic Cost Calculator
                </h4>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Built-up Area (Sq.Ft.)
                  </label>
                  <input
                    type="number"
                    required
                    value={quoteInput.area}
                    onChange={(e) => setQuoteInput({ ...quoteInput, area: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Construction Quality Class
                  </label>
                  <select
                    value={quoteInput.quality}
                    onChange={(e) => setQuoteInput({ ...quoteInput, quality: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  >
                    <option value="Standard (B-Grade)">Standard (B-Grade) — ₹1,400/SqFt</option>
                    <option value="Premium (A-Grade)">Premium (A-Grade) — ₹1,800/SqFt</option>
                    <option value="Luxury (Ultra-Grade)">Luxury (Ultra-Grade) — ₹2,400/SqFt</option>
                  </select>
                </div>

                <div className="space-y-2 pt-2">
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block">
                    Include Associated Sub-works
                  </label>
                  
                  <label className="flex items-center space-x-2 text-xs font-semibold text-primary-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quoteInput.includeElectrical}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includeElectrical: e.target.checked })}
                      className="rounded border-primary-300 text-amber-500 focus:ring-amber-500"
                    />
                    <span>Heavy Industrial Electrification (+₹120/SqFt)</span>
                  </label>

                  <label className="flex items-center space-x-2 text-xs font-semibold text-primary-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quoteInput.includeWater}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includeWater: e.target.checked })}
                      className="rounded border-primary-300 text-amber-500 focus:ring-amber-500"
                    />
                    <span>Reservoir & Drainage Plumbing (+₹95/SqFt)</span>
                  </label>

                  <label className="flex items-center space-x-2 text-xs font-semibold text-primary-800 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={quoteInput.includeFire}
                      onChange={(e) => setQuoteInput({ ...quoteInput, includeFire: e.target.checked })}
                      className="rounded border-primary-300 text-amber-500 focus:ring-amber-500"
                    />
                    <span>High-Pressure Fire Sprinkler Pipelines (+₹150/SqFt)</span>
                  </label>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Special Remarks / Site Layout Notes
                  </label>
                  <textarea
                    rows={2}
                    value={quoteInput.remarks}
                    onChange={(e) => setQuoteInput({ ...quoteInput, remarks: e.target.value })}
                    placeholder="E.g. near Govt. Sr. Sec. School site grading details..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-xs font-medium text-primary-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 text-primary-950 font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow-sm hover:bg-amber-600 transition-colors"
                >
                  Generate Estimate Receipt
                </button>
              </form>

              {/* Quotation Sheet Result Display */}
              <div className="lg:col-span-7">
                {generatedQuote ? (
                  <div className="border border-primary-200 rounded-2xl p-6 relative overflow-hidden font-mono text-xs text-primary-800">
                    {/* Invoice design layout */}
                    <div className="flex justify-between items-start border-b border-primary-200 pb-4 mb-6">
                      <div>
                        <span className="font-display text-base font-extrabold text-primary-900 block">
                          PAWANPUTRA ENTERPRISES
                        </span>
                        <span className="text-[9px] uppercase tracking-wider text-primary-400 block font-bold">
                          Official Cost Estimate Sheet
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-primary-900 block">{generatedQuote.quoteNumber}</span>
                        <span className="text-[10px] text-primary-400 block">{generatedQuote.date}</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-primary-500">Proposed Site Area:</span>
                        <span className="font-bold text-primary-900">{generatedQuote.area} Sq.Ft.</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-primary-500">Quality Class Selection:</span>
                        <span className="font-bold text-primary-900">{generatedQuote.quality}</span>
                      </div>
                      {quoteInput.remarks && (
                        <div className="bg-primary-50 p-2.5 rounded-lg text-primary-600 text-[10px] leading-relaxed">
                          <strong>Client Notes:</strong> {generatedQuote.remarks}
                        </div>
                      )}
                    </div>

                    {/* Cost ledger list */}
                    <div className="space-y-2 border-t border-b border-primary-100 py-4 mb-6">
                      <div className="flex justify-between">
                        <span>Base Shell Construction:</span>
                        <span className="font-bold">₹{generatedQuote.baseCost.toLocaleString()}</span>
                      </div>
                      {generatedQuote.electricalCost > 0 && (
                        <div className="flex justify-between text-primary-600">
                          <span>+ Industrial Electrical Electrification:</span>
                          <span className="font-bold">₹{generatedQuote.electricalCost.toLocaleString()}</span>
                        </div>
                      )}
                      {generatedQuote.waterCost > 0 && (
                        <div className="flex justify-between text-primary-600">
                          <span>+ Water Supply Reservoirs & Plumbing:</span>
                          <span className="font-bold">₹{generatedQuote.waterCost.toLocaleString()}</span>
                        </div>
                      )}
                      {generatedQuote.fireCost > 0 && (
                        <div className="flex justify-between text-primary-600">
                          <span>+ Fire Safety Automated Piping:</span>
                          <span className="font-bold">₹{generatedQuote.fireCost.toLocaleString()}</span>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-primary-500 text-xs">
                        <span>Net Total:</span>
                        <span>₹{generatedQuote.netTotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-primary-500 text-xs">
                        <span>State/Central GST (18% Compulsory):</span>
                        <span>₹{generatedQuote.gst.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-primary-900 font-extrabold text-base border-t border-primary-200 pt-3">
                        <span>Grand Total:</span>
                        <span className="text-amber-600">₹{generatedQuote.grandTotal.toLocaleString()}</span>
                      </div>
                    </div>

                    {/* Download PDF Quote simulated action */}
                    <button
                      onClick={() => alert(`Saved copy of ${generatedQuote.quoteNumber} estimate to your local downloads.`)}
                      className="mt-8 w-full bg-primary-900 hover:bg-primary-950 text-white font-bold py-3 rounded-xl flex items-center justify-center space-x-2 transition-all"
                    >
                      <FileDown className="w-4 h-4 text-amber-500" />
                      <span>Download PDF Cost Receipt</span>
                    </button>
                    
                  </div>
                ) : (
                  <div className="border border-dashed border-primary-300 rounded-2xl p-12 text-center text-primary-400 flex flex-col items-center justify-center h-full">
                    <FileText className="w-12 h-12 text-primary-300 mb-3" />
                    <p className="text-sm font-semibold">Enter your site measurements on the left panel to generate an instant estimate breakdown.</p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 3: UPLOAD DOCUMENTS */}
          {activeTab === 'documents' && (
            <div className="space-y-6">
              
              {/* Drop area */}
              <div 
                className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all ${
                  dragActive ? 'border-amber-500 bg-amber-500/5' : 'border-primary-300 bg-primary-50/50'
                }`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => { e.preventDefault(); setDragActive(false); if (e.dataTransfer.files?.[0]) simulateUpload(e.dataTransfer.files[0].name); }}
              >
                <input
                  type="file"
                  id="file-upload-input"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                
                <Upload className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                
                <h4 className="font-display text-base font-bold text-primary-900">
                  Drag and Drop Site Documents
                </h4>
                <p className="text-xs text-primary-400 font-mono mt-1">
                  Supports blueprints (.dwg), registries (.pdf), soil tests (.xls, .pdf) up to 25MB
                </p>

                {uploadProgress !== null ? (
                  <div className="mt-4 max-w-xs mx-auto">
                    <div className="flex justify-between text-xs font-mono mb-1 text-primary-600 font-semibold">
                      <span>Uploading blueprint...</span>
                      <span>{uploadProgress}%</span>
                    </div>
                    <div className="w-full bg-primary-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-500 h-full transition-all" style={{ width: `${uploadProgress}%` }} />
                    </div>
                  </div>
                ) : (
                  <label 
                    htmlFor="file-upload-input"
                    className="mt-4 inline-block bg-white border border-primary-300 px-4 py-2 rounded-lg text-xs font-mono font-bold text-primary-700 cursor-pointer hover:bg-primary-100 transition-colors"
                  >
                    Browse Local Files
                  </label>
                )}
              </div>

              {/* Uploaded Files Table */}
              <div className="border border-primary-200 rounded-2xl overflow-hidden text-xs">
                <div className="bg-primary-50 border-b border-primary-200 px-4 py-3 font-mono font-bold text-[10px] uppercase tracking-wider text-primary-500">
                  Your Uploaded Site Documents & Approvals
                </div>
                
                <div className="divide-y divide-primary-100">
                  {documents.map((doc) => (
                    <div key={doc.id} className="p-4 flex items-center justify-between hover:bg-primary-50/40 transition-colors font-mono">
                      <div>
                        <span className="font-bold text-primary-900 block">{doc.name}</span>
                        <span className="text-[10px] text-primary-400 block mt-0.5">
                          ID: {doc.id} | Size: {doc.size} | Uploaded: {doc.date}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                          doc.status === 'Approved' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'
                        }`}>
                          {doc.status}
                        </span>

                        <button 
                          onClick={() => setDocuments(documents.filter(d => d.id !== doc.id))}
                          className="text-rose-500 hover:text-rose-700 p-1.5"
                          title="Delete document"
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

          {/* TAB 4: RAISE SUPPORT TICKET */}
          {activeTab === 'tickets' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Form panel */}
              <form onSubmit={handleCreateTicket} className="lg:col-span-5 bg-primary-50 p-6 rounded-2xl border border-primary-200 space-y-4">
                <h4 className="font-display text-base font-bold text-primary-900 mb-4">
                  Raise Engineering Support Ticket
                </h4>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Inquiry Subject
                  </label>
                  <input
                    type="text"
                    required
                    value={newTicket.subject}
                    onChange={(e) => setNewTicket({ ...newTicket, subject: e.target.value })}
                    placeholder="E.g. Steel compaction timeline question..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Related Category
                  </label>
                  <select
                    value={newTicket.category}
                    onChange={(e) => setNewTicket({ ...newTicket, category: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-sm font-semibold text-primary-900 focus:outline-none"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Site Speed">Site Speed & Machinery</option>
                    <option value="Billing">Billing & GST Receipt</option>
                    <option value="Design Blueprint">Design Blueprint Approval</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block mb-1">
                    Detailed Explanation
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newTicket.description}
                    onChange={(e) => setNewTicket({ ...newTicket, description: e.target.value })}
                    placeholder="Please explain your specific concern in details..."
                    className="w-full px-3.5 py-2 rounded-lg bg-white border border-primary-200 text-xs font-medium text-primary-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-primary-950 font-bold py-2.5 rounded-xl text-xs sm:text-sm shadow-sm hover:from-amber-600"
                >
                  Submit Ticket
                </button>
              </form>

              {/* Tickets ledger */}
              <div className="lg:col-span-7 space-y-4">
                <h4 className="font-display text-base font-bold text-primary-900">
                  Your Support History & Response Logs
                </h4>
                
                {tickets.map((tkt) => (
                  <div key={tkt.id} className="border border-primary-200 rounded-xl p-4 font-mono text-xs text-primary-800">
                    <div className="flex justify-between items-start border-b border-primary-100 pb-2.5 mb-2.5">
                      <div>
                        <span className="font-bold text-primary-900 block">{tkt.subject}</span>
                        <span className="text-[9px] text-primary-400 block font-bold uppercase mt-0.5">
                          ID: {tkt.id} | Category: {tkt.category} | Opened: {tkt.createdAt}
                        </span>
                      </div>

                      <span className={`px-2 py-0.5 rounded-md font-bold uppercase text-[9px] ${
                        tkt.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {tkt.status}
                      </span>
                    </div>

                    <p className="text-primary-600 leading-normal mb-2 text-[11px]">
                      {tkt.description}
                    </p>

                    {tkt.status === 'Resolved' ? (
                      <div className="bg-emerald-50/50 p-2.5 rounded-lg text-emerald-800 text-[10px] leading-relaxed border border-emerald-100">
                        <strong>Engineering Desk Reply:</strong> GST typo resolved. Corrected tax receipt PP-INV-421A uploaded under document tab. Thanks!
                      </div>
                    ) : (
                      <div className="bg-amber-50/50 p-2.5 rounded-lg text-amber-800 text-[10px] leading-relaxed border border-amber-100">
                        <strong>Desk Status:</strong> Forwarded to Chief Engineer Anil Sharma. Expected resolution within 24 hours.
                      </div>
                    )}

                  </div>
                ))}
              </div>

            </div>
          )}

          {/* TAB 5: PAYMENTS AND TRANSACTION LEDGERS */}
          {activeTab === 'payments' && (
            <div className="space-y-6">
              
              {/* Aggregates row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-600 font-bold block">
                      Amount Paid to Date
                    </span>
                    <span className="text-xl font-display font-bold text-emerald-950 mt-1 block">
                      ₹23,50,000
                    </span>
                  </div>
                  <DollarSign className="w-8 h-8 text-emerald-500 opacity-20" />
                </div>

                <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 font-bold block">
                      Awaiting Clearance
                    </span>
                    <span className="text-xl font-display font-bold text-amber-950 mt-1 block">
                      ₹4,50,000
                    </span>
                  </div>
                  <Clock className="w-8 h-8 text-amber-500 opacity-20" />
                </div>

                <div className="bg-primary-50 border border-primary-200 p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-primary-500 font-bold block">
                      Current F/Y Bookings
                    </span>
                    <span className="text-xl font-display font-bold text-primary-950 mt-1 block">
                      ₹28,00,000
                    </span>
                  </div>
                  <BarChart3 className="w-8 h-8 text-primary-500 opacity-20" />
                </div>
              </div>

              {/* Transactions Ledger Table */}
              <div className="border border-primary-200 rounded-2xl overflow-hidden font-mono text-xs">
                <div className="bg-primary-50 border-b border-primary-200 px-4 py-3 font-bold text-[10px] uppercase tracking-wider text-primary-500">
                  Detailed Transaction & Receipt Statements
                </div>
                
                <div className="divide-y divide-primary-100">
                  {paymentsLedger.map((pay) => (
                    <div key={pay.receiptNo} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-primary-50/40 transition-colors gap-2">
                      <div>
                        <span className="font-bold text-primary-900 block">{pay.title}</span>
                        <span className="text-[10px] text-primary-400 block mt-0.5">
                          ID: {pay.receiptNo} | Method: {pay.method} | Date: {pay.date}
                        </span>
                      </div>

                      <div className="flex items-center space-x-4 self-end sm:self-auto">
                        <span className="font-bold text-primary-950">{pay.amount}</span>
                        
                        <span className={`px-2 py-0.5 rounded-full font-bold uppercase text-[9px] ${
                          pay.status === 'Verified' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' : 'bg-amber-50 text-amber-700 border border-amber-100'
                        }`}>
                          {pay.status}
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
