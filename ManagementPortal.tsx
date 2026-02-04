
import React, { useState } from 'react';
import { 
  Plus, Users, Layout, FileText, BarChart3, Briefcase, Globe, 
  ExternalLink, Settings, LayoutGrid, List, Headset, 
  Search, ShieldCheck, Wrench, AlertCircle, TrendingUp, Filter, Trash2, Mail
} from 'lucide-react';
import { MOCK_CLIENTS, MOCK_USERS } from '../../constants';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';

interface ManagementPortalProps {
  activeTab: string;
}

const ManagementPortal: React.FC<ManagementPortalProps> = ({ activeTab }) => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const enrollmentData = [
    { month: 'Jan', students: 400 },
    { month: 'Feb', students: 700 },
    { month: 'Mar', students: 1200 },
    { month: 'Apr', students: 1100 },
    { month: 'May', students: 1800 },
    { month: 'Jun', students: 2400 },
  ];

  const revenueData = [
    { name: 'Subscription', value: 45 },
    { name: 'Licenses', value: 30 },
    { name: 'Enterprise', value: 25 },
  ];

  const COLORS = ['#FFFFFF', '#444444', '#1A1A1A'];

  const renderDashboard = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Global Clients', value: '12', icon: Globe, color: 'text-white' },
          { label: 'Platform Revenue', value: '$1.2M', icon: TrendingUp, color: 'text-white' },
          { label: 'System Health', value: '100%', icon: ShieldCheck, color: 'text-white' },
          { label: 'Pending Audits', value: '24', icon: AlertCircle, color: 'text-white' },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem]">
            <stat.icon size={20} className={stat.color + " mb-6"} />
            <p className="text-[10px] font-black text-zinc-600 uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-4xl font-black">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-black uppercase tracking-tighter">Global System Activity</h3>
            <div className="flex bg-black border border-zinc-800 p-1 rounded-lg">
               <button onClick={() => setViewMode('grid')} className={`p-1.5 rounded ${viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-600'}`}><LayoutGrid size={16}/></button>
               <button onClick={() => setViewMode('list')} className={`p-1.5 rounded ${viewMode === 'list' ? 'bg-zinc-800 text-white' : 'text-zinc-600'}`}><List size={16}/></button>
            </div>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-6 bg-black border border-zinc-800 rounded-3xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center text-zinc-600">
                    <Layout size={20} />
                  </div>
                  <div>
                    <p className="font-bold">Next.js 15 Masterclass</p>
                    <p className="text-[10px] text-zinc-500 uppercase font-black">Submitted by Creator ID: {i*104} • Awaiting Audit</p>
                  </div>
                </div>
                <button className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase rounded-xl hover:bg-zinc-200 transition-all">Audit Now</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-2 mb-10">
                <Headset size={20} className="text-white" />
                <h3 className="text-xl font-black uppercase tracking-tighter">Support Pulse</h3>
              </div>
              <div className="space-y-4">
                {[
                  { user: 'TechHire Corp', issue: 'API v2 Sync', priority: 'High' },
                  { user: 'Global Dev', issue: 'License Seat Mod', priority: 'Low' },
                ].map((ticket, idx) => (
                  <div key={idx} className="p-5 bg-black border border-zinc-800 rounded-2xl flex justify-between items-center group cursor-pointer hover:border-white transition-all">
                    <div>
                      <p className="font-black text-xs uppercase">{ticket.user}</p>
                      <p className="text-[10px] text-zinc-600 uppercase tracking-widest">{ticket.issue}</p>
                    </div>
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded ${ticket.priority === 'High' ? 'bg-red-500/10 text-red-400' : 'bg-zinc-800 text-zinc-600'}`}>
                      {ticket.priority}
                    </span>
                  </div>
                ))}
              </div>
           </div>
           <button className="w-full mt-10 py-5 border-2 border-dashed border-zinc-800 text-zinc-600 hover:text-white hover:border-white transition-all rounded-2xl text-[10px] font-black uppercase tracking-[0.2em]">
             Open Help Desk
           </button>
        </div>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] overflow-hidden animate-in fade-in duration-500">
      <div className="p-10 border-b border-zinc-800 flex justify-between items-center bg-black/10">
        <div>
          <h2 className="text-3xl font-black tracking-tighter uppercase">Platform Users</h2>
          <p className="text-zinc-500 text-[10px] font-black uppercase mt-1 tracking-widest">Global Account Management</p>
        </div>
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" size={14}/>
            <input className="bg-black border border-zinc-800 rounded-xl pl-12 pr-4 py-3 text-xs focus:border-white outline-none w-72" placeholder="Search by name, email, or role..."/>
          </div>
          <button className="px-6 py-3 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl flex items-center gap-2">
            <Plus size={16} /> Create Account
          </button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-black/20 text-[10px] font-black uppercase text-zinc-600 border-b border-zinc-800">
            <th className="px-10 py-5">User Profile</th>
            <th className="px-10 py-5">Role Authority</th>
            <th className="px-10 py-5">Status</th>
            <th className="px-10 py-5 text-right">Settings</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-800">
          {MOCK_USERS.map(user => (
            <tr key={user.id} className="hover:bg-zinc-800/20 transition-all group">
              <td className="px-10 py-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-xl flex items-center justify-center font-black">{user.name[0]}</div>
                  <div>
                    <p className="font-bold">{user.name}</p>
                    <p className="text-[10px] text-zinc-500 font-bold">{user.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-10 py-6">
                <span className="text-[9px] font-black uppercase border border-zinc-800 px-3 py-1 rounded-full bg-black text-zinc-400">
                  {user.role}
                </span>
              </td>
              <td className="px-10 py-6">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${user.status === 'Active' ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-zinc-700'}`} />
                  <span className="text-xs font-bold uppercase tracking-tighter">{user.status}</span>
                </div>
              </td>
              <td className="px-10 py-6 text-right">
                <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <button className="p-2 text-zinc-600 hover:text-white"><Mail size={16}/></button>
                   <button className="p-2 text-zinc-600 hover:text-red-500"><Trash2 size={16}/></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderClients = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-black tracking-tighter uppercase">Client Portfolio</h2>
          <p className="text-zinc-500 text-[10px] font-black uppercase mt-1 tracking-widest">Enterprise Engagement Monitoring</p>
        </div>
        <div className="flex bg-zinc-900 border border-zinc-800 p-1 rounded-xl">
           <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white text-black shadow-xl' : 'text-zinc-600'}`}><LayoutGrid size={16}/></button>
           <button onClick={() => setViewMode('list')} className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white text-black shadow-xl' : 'text-zinc-600'}`}><List size={16}/></button>
        </div>
      </div>
      
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_CLIENTS.map(client => (
            <div key={client.id} className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-10 hover:border-white transition-all group">
              <div className="flex items-center gap-5 mb-8">
                <img src={client.logo} className="w-14 h-14 rounded-2xl object-cover grayscale opacity-60" />
                <div>
                  <h3 className="text-2xl font-black tracking-tighter">{client.name}</h3>
                  <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest ${client.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'}`}>
                    {client.status.toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-black rounded-3xl border border-zinc-800 text-center">
                  <p className="text-[9px] font-black text-zinc-600 uppercase mb-1">Active Seats</p>
                  <p className="text-2xl font-black">{client.talentCount}</p>
                </div>
                <div className="p-5 bg-black rounded-3xl border border-zinc-800 text-center">
                  <p className="text-[9px] font-black text-zinc-600 uppercase mb-1">Avg Score</p>
                  <p className="text-2xl font-black">{client.readinessAvg}%</p>
                </div>
              </div>
              <button className="w-full mt-10 py-4 bg-white text-black rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all hover:scale-105 flex items-center justify-center gap-2">
                Manage Console <ExternalLink size={14} />
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] overflow-hidden">
           <table className="w-full text-left">
              <thead className="bg-black/30 text-[10px] uppercase font-black text-zinc-600 border-b border-zinc-800">
                <tr>
                  <th className="px-10 py-5">Company Identity</th>
                  <th className="px-10 py-5 text-center">Engagement Level</th>
                  <th className="px-10 py-5">Readiness Average</th>
                  <th className="px-10 py-5 text-right">Audit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800">
                {MOCK_CLIENTS.map(client => (
                  <tr key={client.id} className="hover:bg-zinc-800/10 transition-all">
                    <td className="px-10 py-6 font-bold flex items-center gap-4 text-zinc-200">
                      <img src={client.logo} className="w-10 h-10 rounded-xl grayscale opacity-50"/>
                      {client.name}
                    </td>
                    <td className="px-10 py-6 text-center text-sm font-black text-zinc-400">{client.talentCount} Active</td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-32 h-1.5 bg-black rounded-full overflow-hidden">
                           <div className="h-full bg-white" style={{width: `${client.readinessAvg}%`}}/>
                        </div>
                        <span className="text-xs font-black">{client.readinessAvg}%</span>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-right">
                       <button className="text-zinc-600 hover:text-white transition-colors"><Wrench size={18}/></button>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      )}
    </div>
  );

  const renderMarketplace = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
       <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tighter">B2B Content Marketplace</h2>
            <p className="text-zinc-500 text-[10px] font-black uppercase mt-1 tracking-widest">Global Asset Licensing Hub</p>
          </div>
          <div className="flex gap-4">
             <div className="text-center px-8 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Global Assets</p>
                <p className="text-2xl font-black">1,402</p>
             </div>
             <div className="text-center px-8 py-3 bg-zinc-900 border border-zinc-800 rounded-2xl">
                <p className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.2em] mb-1">Pending Audit</p>
                <p className="text-2xl font-black text-orange-400">12</p>
             </div>
          </div>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
             <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-[3rem] overflow-hidden group hover:border-white transition-all flex flex-col">
                <div className="aspect-video bg-black relative overflow-hidden">
                   <img src={`https://picsum.photos/seed/market${i}/400/225`} className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700"/>
                   <div className="absolute top-6 left-6 px-4 py-1.5 bg-white text-black text-[9px] font-black uppercase rounded-lg shadow-2xl">PREMIUM ASSET</div>
                </div>
                <div className="p-10 flex-1 flex flex-col">
                   <h3 className="text-2xl font-black uppercase mb-3 tracking-tighter">Cloud Native DevOps v4</h3>
                   <p className="text-sm text-zinc-500 mb-10 leading-relaxed font-medium">Certified training for enterprise AWS/K8s deployments. High completion rate across GTC and Secure Systems.</p>
                   <div className="mt-auto flex justify-between items-center pt-8 border-t border-zinc-800">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">License Fee</span>
                        <span className="text-3xl font-black">$849</span>
                      </div>
                      <button className="p-4 bg-white text-black rounded-2xl hover:scale-110 transition-transform shadow-2xl"><ExternalLink size={18}/></button>
                   </div>
                </div>
             </div>
          ))}
       </div>
    </div>
  );

  const renderReports = () => (
    <div className="space-y-12 animate-in fade-in duration-500">
       <div className="flex justify-between items-center">
         <div>
           <h2 className="text-4xl font-black uppercase tracking-tighter">Analytical Intelligence</h2>
           <p className="text-zinc-500 text-[10px] font-black uppercase mt-1 tracking-widest">Global Platform Performance Metrics</p>
         </div>
         <button className="px-6 py-3 border border-zinc-800 hover:bg-white hover:text-black rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">Export Data (CSV)</button>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] space-y-10">
             <div className="flex justify-between items-center">
                <h3 className="text-xl font-black uppercase tracking-widest text-zinc-400">Enrollment Over Time</h3>
                <span className="text-xs font-black text-white">+24% vs last mo</span>
             </div>
             <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={enrollmentData}>
                      <defs>
                        <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#FFFFFF" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <XAxis dataKey="month" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #27272a', borderRadius: '12px', fontSize: '10px' }}
                      />
                      <Area type="monotone" dataKey="students" stroke="#FFFFFF" fillOpacity={1} fill="url(#colorStudents)" />
                   </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] space-y-10">
             <div className="flex justify-between items-center">
                <h3 className="text-xl font-black uppercase tracking-widest text-zinc-400">Revenue Distribution</h3>
                <span className="text-xs font-black text-white">$1.2M Total</span>
             </div>
             <div className="h-[300px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                   <PieChart>
                      <Pie
                        data={revenueData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {revenueData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #27272a', borderRadius: '12px', fontSize: '10px' }}
                      />
                   </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-col gap-4 pl-10">
                   {revenueData.map((item, idx) => (
                     <div key={idx} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{backgroundColor: COLORS[idx]}}/>
                        <span className="text-[10px] font-black uppercase text-zinc-500">{item.name}</span>
                     </div>
                   ))}
                </div>
             </div>
          </div>
       </div>
    </div>
  );

  const renderSupport = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
       <div className="flex justify-between items-center">
          <h2 className="text-3xl font-black tracking-tighter uppercase">Support Central</h2>
          <div className="flex items-center gap-4 px-6 py-2 bg-zinc-900 border border-zinc-800 rounded-full">
             <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
             <span className="text-[10px] font-black uppercase tracking-widest">8 Active Agents</span>
          </div>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Unassigned', value: '4' },
            { label: 'My Tickets', value: '1' },
            { label: 'Resolution Rate', value: '98%' },
            { label: 'Avg Waiting', value: '12m' },
          ].map((s, i) => (
            <div key={i} className="bg-zinc-900 border border-zinc-800 p-6 rounded-3xl text-center">
               <p className="text-[9px] font-black text-zinc-600 uppercase mb-1 tracking-widest">{s.label}</p>
               <p className="text-2xl font-black">{s.value}</p>
            </div>
          ))}
       </div>

       <div className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10 space-y-6">
          <div className="flex gap-4 mb-4">
             <button className="px-6 py-2 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-xl">Open (4)</button>
             <button className="px-6 py-2 bg-zinc-800 text-zinc-400 text-[10px] font-black uppercase tracking-widest rounded-xl">Resolved (1,202)</button>
          </div>
          {[
            { id: '#882', user: 'Sarah Chen', company: 'Global Tech', issue: 'API Access Revoked', p: 'High', time: '2m' },
            { id: '#883', user: 'Marcus Bell', company: 'Innovate Soft', issue: 'License Key Mismatch', p: 'Low', time: '14m' },
            { id: '#884', user: 'Jordan Employer', company: 'TechHire', issue: 'Billing Query', p: 'Medium', time: '1h' },
          ].map((t, idx) => (
             <div key={idx} className="flex items-center justify-between p-6 bg-black border border-zinc-800 rounded-3xl group hover:border-white transition-all">
                <div className="flex items-center gap-6">
                   <div className={`w-2 h-2 rounded-full ${t.p === 'High' ? 'bg-red-500' : 'bg-zinc-600'}`}/>
                   <div>
                      <h4 className="font-bold flex items-center gap-3">
                        {t.issue}
                        <span className="text-[8px] font-black uppercase bg-zinc-900 px-2 py-0.5 rounded border border-zinc-800">{t.id}</span>
                      </h4>
                      <p className="text-[10px] text-zinc-500 uppercase font-black mt-1">Requested by {t.user} • {t.company} • {t.time} ago</p>
                   </div>
                </div>
                <button className="px-6 py-2 bg-white text-black font-black text-[10px] uppercase tracking-widest rounded-xl opacity-0 group-hover:opacity-100 transition-all">Resolve</button>
             </div>
          ))}
       </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'Dashboard': return renderDashboard();
      case 'Users': return renderUsers();
      case 'Clients': return renderClients();
      case 'Marketplace': return renderMarketplace();
      case 'Reports': return renderReports();
      case 'Support': return renderSupport();
      default: return renderDashboard();
    }
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-5xl font-black tracking-tighter uppercase">Platform Master</h1>
          <p className="text-zinc-500 font-medium tracking-tight">ReadyScale Infrastructure Control • Global Vendor Access</p>
        </div>
        <div className="flex items-center gap-6 px-8 py-4 bg-zinc-900/50 rounded-[2.5rem] border border-zinc-800">
           <div className="flex flex-col items-end">
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Protocol Status</span>
              <span className="text-xs font-black text-green-400">NOMINAL OPERATION</span>
           </div>
           <div className="w-12 h-12 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-400">
              <ShieldCheck size={24} />
           </div>
        </div>
      </header>

      {renderContent()}
    </div>
  );
};

export default ManagementPortal;
