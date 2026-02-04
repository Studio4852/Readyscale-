
import React from 'react';
import { Plus, Layout, Users, BarChart3, Globe, DollarSign, ArrowUpRight } from 'lucide-react';

interface CreatorDashboardProps {
  activeTab: string;
}

const CreatorDashboard: React.FC<CreatorDashboardProps> = ({ activeTab }) => {
  return (
    <div className="space-y-10">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Creator Studio</h1>
          <p className="text-zinc-500">Craft learning journeys and monetize your expertise.</p>
        </div>
        <button className="bg-white text-black px-6 py-3 rounded-xl font-bold flex items-center gap-2">
          <Plus size={20} /> Create New Course
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Active Learners', value: '450', icon: Users, color: 'text-white' },
          { label: 'Course Sales', value: '$2,840', icon: DollarSign, color: 'text-white' },
          { label: 'Avg Rating', value: '4.8/5', icon: ArrowUpRight, color: 'text-white' },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
            <stat.icon size={20} className="mb-4 text-zinc-500" />
            <p className="text-4xl font-black">{stat.value}</p>
            <p className="text-xs font-bold text-zinc-500 uppercase mt-2 tracking-widest">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">
        <h2 className="text-xl font-bold mb-6">Your Courses</h2>
        <div className="space-y-4">
          {[1, 2].map((i) => (
            <div key={i} className="group flex items-center justify-between p-6 bg-black border border-zinc-800 rounded-2xl hover:border-white transition-all">
              <div className="flex items-center gap-6">
                <div className="w-20 h-12 bg-zinc-800 rounded-lg overflow-hidden">
                   <img src={`https://picsum.photos/seed/creator${i}/200`} className="w-full h-full object-cover grayscale" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Mastering React Server Components</h3>
                  <p className="text-xs text-zinc-500">Draft • Updated 2 days ago</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-zinc-800 text-white font-bold rounded-lg group-hover:bg-white group-hover:text-black transition-all">
                Edit Content
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
