
import React from 'react';
import { UserRole } from '../types';
import { Sparkles, ShieldCheck, Briefcase, Zap } from 'lucide-react';

interface LoginViewProps {
  onLogin: (role: UserRole) => void;
}

const LoginView: React.FC<LoginViewProps> = ({ onLogin }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white overflow-hidden relative">
      {/* Background Orbs */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-white opacity-[0.03] blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-zinc-500 opacity-[0.03] blur-[120px] rounded-full" />
      </div>

      <div className="max-w-4xl w-full relative z-10 space-y-16">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-black text-zinc-400 shadow-2xl tracking-widest uppercase">
            <Zap size={14} className="text-white animate-pulse" />
            AI Readiness & Talent Protocol
          </div>
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter leading-none text-white">
            ReadyScale<span className="text-zinc-600">.</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Verify readiness. Accelerate hiring. Scale with AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Associate Card */}
          <div 
            onClick={() => onLogin(UserRole.ASSOCIATE)}
            className="group cursor-pointer p-12 bg-zinc-900/40 border border-zinc-800 rounded-[3rem] hover:border-white hover:bg-zinc-900 transition-all duration-500 flex flex-col items-center text-center space-y-8"
          >
            <div className="w-20 h-20 bg-white text-black rounded-3xl flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.2)] transform group-hover:scale-110 transition-transform">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-black mb-3">ASSOCIATE</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">Upskill in AI, verify your readiness score, and get matched with top global employers.</p>
            </div>
          </div>

          {/* Employer Card */}
          <div 
            onClick={() => onLogin(UserRole.EMPLOYER)}
            className="group cursor-pointer p-12 bg-zinc-900/40 border border-zinc-800 rounded-[3rem] hover:border-white hover:bg-zinc-900 transition-all duration-500 flex flex-col items-center text-center space-y-8"
          >
            <div className="w-20 h-20 bg-zinc-800 text-white rounded-3xl flex items-center justify-center border border-zinc-700 shadow-2xl transform group-hover:scale-110 transition-transform">
              <Briefcase size={40} />
            </div>
            <div>
              <h2 className="text-3xl font-black mb-3">EMPLOYER</h2>
              <p className="text-zinc-500 text-sm leading-relaxed">Build custom training paths, manage talent pipelines, and hire verified experts with confidence.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-12 pt-12">
           <button onClick={() => onLogin(UserRole.MANAGEMENT)} className="text-zinc-600 hover:text-white text-[10px] font-black uppercase tracking-[0.3em] transition-colors flex items-center gap-2">
             <Sparkles size={14} /> Platform Management
           </button>
        </div>
      </div>
    </div>
  );
};

export default LoginView;
