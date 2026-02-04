
import React from 'react';
import { Settings, Plus, Users, Layout, FileText, BarChart3, ShieldCheck, Briefcase, Globe, ExternalLink } from 'lucide-react';
import { MOCK_CLIENTS } from '../../constants';

interface AdminDashboardProps {
  activeTab: string;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ activeTab }) => {
  const renderClientPortfolio = () => (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MOCK_CLIENTS.map(client => (
          <div key={client.id} className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-500 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <img src={client.logo} className="w-12 h-12 rounded-xl object-cover" />
              <div>
                <h3 className="text-xl font-bold">{client.name}</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${client.status === 'Active' ? 'bg-green-500/10 text-green-400' : 'bg-orange-500/10 text-orange-400'}`}>
                  {client.status.toUpperCase()}
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-black rounded-2xl border border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Associates</p>
                <p className="text-2xl font-black">{client.talentCount}</p>
              </div>
              <div className="p-4 bg-black rounded-2xl border border-zinc-800">
                <p className="text-[10px] font-bold text-zinc-500 uppercase mb-1">Avg Score</p>
                <p className="text-2xl font-black">{client.readinessAvg}%</p>
              </div>
            </div>
            <button className="w-full mt-6 py-3 border border-zinc-800 hover:bg-white hover:text-black rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2">
              Manage Client <ExternalLink size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  const renderMarketplace = () => (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
      <h3 className="text-xl font-bold mb-6">Course Marketplace Submissions</h3>
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center justify-between p-4 bg-black border border-zinc-800 rounded-2xl">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-zinc-800 rounded-lg flex items-center justify-center text-zinc-500">
                <Globe size={20} />
              </div>
              <div>
                <p className="font-bold">Advanced K8s Patterns</p>
                <p className="text-xs text-zinc-500">Submitted by: David J. • $49.00 License</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="text-xs font-bold px-4 py-2 bg-zinc-800 rounded-lg hover:bg-zinc-700">Audit</button>
              <button className="text-xs font-bold px-4 py-2 bg-white text-black rounded-lg hover:bg-zinc-200">Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDashboard = () => (
    <div className="space-y-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: 'Total Users', value: '1,420', icon: Users, color: 'text-blue-400' },
          { label: 'Active Licenses', value: '28', icon: Briefcase, color: 'text-green-400' },
          { label: 'Pending Tests', value: '84', icon: FileText, color: 'text-orange-400' },
          { label: 'Revenue (MTD)', value: '$12.4k', icon: Globe, color: 'text-purple-400' },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl">
            <div className="flex items-center justify-between mb-2">
              <stat.icon size={20} className={stat.color} />
              <BarChart3 size={16} className="text-zinc-700" />
            </div>
            <p className="text-3xl font-black">{stat.value}</p>
            <p className="text-xs font-bold text-zinc-500 uppercase mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
      {renderMarketplace()}
    </div>
  );

  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">{activeTab}</h1>
          <p className="text-zinc-500">Platform-wide management and governance.</p>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-zinc-200 transition-all">
          <Plus size={20} /> New Initiative
        </button>
      </header>

      {activeTab === 'Dashboard' && renderDashboard()}
      {activeTab === 'Client Portfolio' && renderClientPortfolio()}
      {activeTab === 'Marketplace' && renderMarketplace()}
      {activeTab === 'Reports' && renderDashboard()}
    </div>
  );
};

export default AdminDashboard;
