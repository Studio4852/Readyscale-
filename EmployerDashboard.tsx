
import React, { useMemo, useState } from 'react';
import { MOCK_TALENT, MOCK_COURSES } from '../constants';
import { 
  Search, Filter, Download, ExternalLink, Users, TrendingUp, 
  CheckCircle, BarChart3, BrainCircuit, Globe, Plus, Settings, 
  Layout, GraduationCap, Eye, Trash2, Box, Upload, Video, FileText, CheckCircle2 
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

interface EmployerDashboardProps {
  activeTab: string;
}

const EmployerDashboard: React.FC<EmployerDashboardProps> = ({ activeTab }) => {
  const [internalView, setInternalView] = useState<'talent' | 'internal_users'>('talent');
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);

  const chartData = useMemo(() => [
    { name: 'Ready for Hire', count: 12, color: '#FFFFFF' },
    { name: 'In Training', count: 45, color: '#333333' },
    { name: 'Near Ready', count: 28, color: '#666666' },
    { name: 'Waitlist', count: 15, color: '#1a1a1a' },
  ], []);

  const renderPipeline = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Talent Pool', value: '112', icon: Users, sub: '+8 this month' },
          { label: 'Company Ready', value: '82%', icon: TrendingUp, sub: 'Benchmark Met' },
          { label: 'Hiring Quota', value: '24/50', icon: CheckCircle, sub: 'Active hiring' },
          { label: 'Studio Assets', value: '14', icon: Box, sub: 'Manage Courses' },
        ].map((stat, i) => (
          <div key={i} className="bg-zinc-900 border border-zinc-800 p-8 rounded-[2rem]">
            <div className="flex justify-between items-start mb-6">
              <stat.icon size={20} className="text-zinc-500" />
              <span className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">{stat.sub}</span>
            </div>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{stat.label}</p>
            <p className="text-4xl font-black">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem]">
          <h2 className="text-xl font-black mb-10 uppercase tracking-tighter">Readiness Metrics</h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip 
                  cursor={{fill: '#18181b'}}
                  contentStyle={{ backgroundColor: '#000', border: '1px solid #27272a', borderRadius: '12px' }}
                />
                <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-10 rounded-[3rem] flex flex-col justify-between">
           <div>
              <div className="flex items-center gap-2 mb-8">
                <BrainCircuit className="text-white" size={24} />
                <h2 className="text-xl font-black uppercase tracking-tighter">Hiring Intel</h2>
              </div>
              <div className="space-y-4">
                <div className="p-6 bg-black border border-zinc-800 rounded-3xl">
                  <p className="text-[10px] font-black text-zinc-600 uppercase mb-3 tracking-widest">Smart Suggestion</p>
                  <p className="text-sm leading-relaxed text-zinc-300 italic">"Focus your next 3 hires on **Sarah Chen's** squad. Their DevOps readiness just hit the 95th percentile."</p>
                </div>
              </div>
           </div>
           <button className="w-full mt-10 py-5 bg-white text-black font-black text-xs uppercase tracking-widest rounded-2xl hover:scale-105 transition-all">
             Analyze Full Pipeline
           </button>
        </div>
      </div>
    </div>
  );

  const renderStudio = () => (
    <div className="space-y-10 animate-in fade-in duration-500">
       <div className="flex justify-between items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tighter uppercase">Company Studio</h2>
            <p className="text-zinc-500">Create proprietary courses for your talent pool.</p>
          </div>
          <button 
            onClick={() => setIsCreatingCourse(true)}
            className="px-8 py-4 bg-white text-black text-xs font-black uppercase tracking-widest rounded-2xl flex items-center gap-2 hover:scale-105 transition-all"
          >
             <Plus size={18}/> New Internal Course
          </button>
       </div>

       {isCreatingCourse ? (
         <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3rem] space-y-10 animate-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center">
               <h3 className="text-2xl font-black uppercase tracking-tighter">Course Configuration</h3>
               <button onClick={() => setIsCreatingCourse(false)} className="text-zinc-500 hover:text-white uppercase font-black text-[10px] tracking-widest">Discard</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="space-y-6">
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Course Title</label>
                     <input className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none" placeholder="e.g. Enterprise AI Security Standards"/>
                  </div>
                  <div className="space-y-2">
                     <label className="text-[10px] font-black text-zinc-600 uppercase tracking-widest">Brief Description</label>
                     <textarea className="w-full bg-black border border-zinc-800 rounded-xl px-4 py-3 text-sm focus:border-white outline-none h-32" placeholder="Explain the learning objectives..."/>
                  </div>
               </div>
               <div className="space-y-8">
                  <div className="p-10 border-2 border-dashed border-zinc-800 rounded-3xl flex flex-col items-center justify-center text-center gap-4 hover:border-zinc-600 transition-all cursor-pointer">
                     <Upload size={32} className="text-zinc-700"/>
                     <div>
                        <p className="font-bold text-sm">Upload Master Video</p>
                        <p className="text-[10px] text-zinc-600 uppercase mt-1">MP4, MOV up to 2GB</p>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <button className="flex items-center justify-center gap-2 py-3 bg-zinc-800 rounded-xl text-xs font-bold uppercase tracking-widest"><Video size={14}/> Lessons</button>
                     <button className="flex items-center justify-center gap-2 py-3 bg-zinc-800 rounded-xl text-xs font-bold uppercase tracking-widest"><FileText size={14}/> Resources</button>
                  </div>
               </div>
            </div>
            <div className="pt-10 border-t border-zinc-800 flex justify-end">
               <button className="px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.2em] rounded-2xl hover:scale-105 transition-all">
                  Publish to Internal Talent
               </button>
            </div>
         </div>
       ) : (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map(i => (
              <div key={i} className="group p-8 bg-zinc-900 border border-zinc-800 rounded-[2.5rem] hover:border-white transition-all">
                 <div className="aspect-video mb-8 bg-black rounded-3xl overflow-hidden relative">
                    <img src={`https://picsum.photos/seed/company${i}/400/225`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all opacity-40 group-hover:opacity-100" />
                    <div className="absolute top-6 left-6 bg-black/80 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-black text-white uppercase border border-white/10 tracking-widest">
                      INTERNAL SQUAD
                    </div>
                 </div>
                 <h3 className="text-2xl font-black mb-3 uppercase tracking-tighter">Proprietary AI Logic {i}</h3>
                 <div className="flex items-center gap-4 text-zinc-500 mb-8">
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase"><Users size={12}/> 45 Enrolled</span>
                    <span className="flex items-center gap-1.5 text-[10px] font-black uppercase"><CheckCircle2 size={12}/> 12 Completed</span>
                 </div>
                 <div className="flex gap-4">
                    <button className="flex-1 py-4 bg-zinc-800 text-white font-black text-[10px] uppercase tracking-widest rounded-2xl hover:bg-white hover:text-black transition-all">Modify Curriculum</button>
                    <button className="p-4 bg-black border border-zinc-800 rounded-2xl text-zinc-500 hover:text-white transition-all"><Eye size={18}/></button>
                 </div>
              </div>
            ))}
         </div>
       )}
    </div>
  );

  return (
    <div className="space-y-10">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tighter uppercase">Employer Console</h1>
          <p className="text-zinc-500 font-medium">Enterprise Talent Management & Custom Studio</p>
        </div>
        <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-zinc-800 transition-all flex items-center gap-2">
          <Download size={14} /> Pipeline Export
        </button>
      </header>

      {activeTab === 'Pipeline' && renderPipeline()}
      {activeTab === 'Talent Pool' && (
        <div className="space-y-6">
          <div className="flex justify-between items-center bg-zinc-900 p-2 rounded-2xl border border-zinc-800 w-fit">
             <button onClick={() => setInternalView('talent')} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${internalView === 'talent' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>Verified Candidates</button>
             <button onClick={() => setInternalView('internal_users')} className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${internalView === 'internal_users' ? 'bg-white text-black' : 'text-zinc-500 hover:text-white'}`}>Company Managers</button>
          </div>
          {internalView === 'talent' ? (
             <section className="bg-zinc-900 border border-zinc-800 rounded-[3rem] overflow-hidden">
                <div className="p-10 border-b border-zinc-800 flex justify-between items-center bg-black/10">
                   <h2 className="text-2xl font-black tracking-tighter uppercase">Available Talent</h2>
                   <div className="relative">
                      <Search size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-600" />
                      <input placeholder="Search skills..." className="pl-12 pr-4 py-3 bg-black border border-zinc-800 rounded-xl text-xs focus:border-white outline-none w-64"/>
                   </div>
                </div>
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 border-b border-zinc-800 bg-black/20">
                      <th className="px-10 py-5 font-black">Identity</th>
                      <th className="px-10 py-5 font-black">Score</th>
                      <th className="px-10 py-5 font-black text-right">Verification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {MOCK_TALENT.map(talent => (
                      <tr key={talent.id} className="hover:bg-zinc-800/10 transition-all">
                        <td className="px-10 py-6">
                          <div className="flex items-center gap-4">
                            <img src={talent.avatar} className="w-10 h-10 rounded-full grayscale" />
                            <div><p className="font-bold">{talent.name}</p><p className="text-[10px] text-zinc-500 uppercase font-black">{talent.email}</p></div>
                          </div>
                        </td>
                        <td className="px-10 py-6">
                           <div className="flex items-center gap-3">
                              <div className="w-20 h-1 bg-black rounded-full overflow-hidden"><div className="h-full bg-white" style={{width: `${talent.readinessScore}%`}}/></div>
                              <span className="text-xs font-black">{talent.readinessScore}%</span>
                           </div>
                        </td>
                        <td className="px-10 py-6 text-right">
                           <span className="px-3 py-1 bg-white text-black text-[9px] font-black uppercase rounded-lg">Verified</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
             </section>
          ) : (
             <section className="bg-zinc-900 border border-zinc-800 rounded-[3rem] p-10">
                <h2 className="text-2xl font-black uppercase mb-8">Internal Managers</h2>
                <div className="space-y-4">
                   {[1, 2].map(i => (
                     <div key={i} className="flex justify-between items-center p-6 bg-black border border-zinc-800 rounded-3xl">
                        <div className="flex items-center gap-4">
                           <div className="w-10 h-10 bg-zinc-900 rounded-xl flex items-center justify-center font-black">M</div>
                           <div><p className="font-bold">Manager {i}</p><p className="text-[10px] text-zinc-600 font-black uppercase">Admin Access</p></div>
                        </div>
                        <button className="text-zinc-700 hover:text-red-500 transition-colors"><Trash2 size={16}/></button>
                     </div>
                   ))}
                </div>
             </section>
          )}
        </div>
      )}
      {activeTab === 'Studio' && renderStudio()}
    </div>
  );
};

export default EmployerDashboard;
