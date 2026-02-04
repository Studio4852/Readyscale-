
import React, { useState } from 'react';
import { MOCK_PROJECTS, MOCK_ASSOCIATE } from '../../constants';
import { FolderGit2, Users, Rocket, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

const ProjectsView: React.FC = () => {
  const [joinedProjects, setJoinedProjects] = useState<string[]>([]);

  const handleJoin = (id: string) => {
    if (joinedProjects.includes(id)) return;
    setJoinedProjects(prev => [...prev, id]);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="max-w-3xl space-y-4">
        <h1 className="text-4xl font-black tracking-tighter">Project Squads</h1>
        <p className="text-zinc-500 text-lg leading-relaxed">
          High-stakes collaborative environments where you prove your skills on real-world systems. 
          Projects unlock automatically based on your <span className="text-white font-bold">Readiness Score</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {MOCK_PROJECTS.map((project) => {
          const isUnlocked = MOCK_ASSOCIATE.readinessScore >= project.requiredScore;
          const isJoined = joinedProjects.includes(project.id);
          
          return (
            <div 
              key={project.id}
              className={`p-10 rounded-[3rem] border-2 transition-all flex flex-col justify-between group ${
                isUnlocked 
                  ? 'bg-zinc-900 border-zinc-800 hover:border-zinc-500 shadow-[0_20px_50px_rgba(0,0,0,0.5)]' 
                  : 'bg-zinc-900/40 border-zinc-900 opacity-60'
              }`}
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className={`p-5 rounded-2xl transition-all ${isUnlocked ? 'bg-white text-black' : 'bg-zinc-800 text-zinc-700'}`}>
                    <FolderGit2 size={32} />
                  </div>
                  {!isUnlocked ? (
                    <div className="flex items-center gap-2 px-4 py-2 bg-zinc-800/80 rounded-full text-[10px] font-black text-zinc-400 border border-zinc-700 uppercase tracking-widest">
                      <Lock size={12} /> Target: {project.requiredScore}%
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 rounded-full text-[10px] font-black text-green-400 border border-green-500/20 uppercase tracking-widest">
                      <Rocket size={12} /> Eligible
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold">{project.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm">{project.description}</p>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-tighter">
                    <Users size={16} className="text-zinc-700" />
                    <span>4 Slots Left</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 text-xs font-bold uppercase tracking-tighter">
                    <AlertCircle size={16} className="text-zinc-700" />
                    <span>Level 4 Tech Stack</span>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                {isUnlocked ? (
                  <button 
                    onClick={() => handleJoin(project.id)}
                    className={`w-full py-6 font-black rounded-[1.5rem] transition-all flex items-center justify-center gap-3 ${
                      isJoined 
                        ? 'bg-zinc-800 text-zinc-500 cursor-default' 
                        : 'bg-white text-black hover:scale-[1.03] active:scale-95 shadow-[0_20px_40px_rgba(255,255,255,0.1)]'
                    }`}
                  >
                    {isJoined ? <CheckCircle2 size={24} /> : <Rocket size={24} />}
                    {isJoined ? 'IN PROJECT SQUAD' : 'JOIN PROJECT SQUAD'}
                  </button>
                ) : (
                  <div className="w-full py-6 border-2 border-zinc-800 text-zinc-700 font-black rounded-[1.5rem] text-center uppercase tracking-widest text-sm flex items-center justify-center gap-2">
                    <Lock size={16} /> Restricted access
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-zinc-900 border border-zinc-800 p-16 rounded-[4rem] text-center space-y-8 relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="max-w-2xl mx-auto space-y-4">
           <h2 className="text-4xl font-black tracking-tighter">Senior Level Proposals</h2>
           <p className="text-zinc-500 leading-relaxed">
             Reach a Readiness Score of <span className="text-white font-bold">95%+</span> to unlock the ability to lead and propose your own community-driven projects.
           </p>
        </div>
        <button className="px-12 py-5 border-2 border-zinc-700 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black hover:border-white transition-all">
          View Proposal Guidelines
        </button>
      </div>
    </div>
  );
};

export default ProjectsView;
