
import React, { useState, useEffect } from 'react';
import { MOCK_ASSOCIATE, MOCK_COURSES } from '../constants';
import { Award, CheckCircle2, Lock, ArrowRight, Play, FileText, BrainCircuit, Zap, Loader2 } from 'lucide-react';
import AssessmentCard from '../components/AssessmentCard';
import { getLearningSuggestions } from '../services/geminiService';

const AssociateDashboard: React.FC = () => {
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [verStatus, setVerStatus] = useState<string | null>(null);

  useEffect(() => {
    async function fetchAiInsights() {
      setLoadingSuggestions(true);
      const aiData = await getLearningSuggestions(MOCK_ASSOCIATE);
      setSuggestions(aiData);
      setLoadingSuggestions(false);
    }
    fetchAiInsights();
  }, []);

  const handleSimulateVerification = () => {
    setIsVerifying(true);
    setVerStatus("Auditing Assessment Results...");
    setTimeout(() => {
      setVerStatus("Scanning Project Commits...");
      setTimeout(() => {
        setVerStatus("Final Readiness Check...");
        setTimeout(() => {
          setIsVerifying(false);
          setVerStatus(null);
          alert("Platform Check: Current readiness score is 78%. Reach 85% to trigger automatic Readiness Stamp issuance.");
        }, 1500);
      }, 1500);
    }, 1500);
  };

  return (
    <div className="p-0 space-y-12 animate-in fade-in duration-700">
      <header className="flex flex-col md:flex-row md:items-start justify-between gap-10">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full text-[10px] font-black text-zinc-400 tracking-widest uppercase">
            <Zap size={14} className="text-white" />
            Active Protocol: Cloud AI Engineering Path
          </div>
          <h1 className="text-6xl font-black tracking-tighter uppercase leading-[0.9]">
            Status Room:<br/> {MOCK_ASSOCIATE.name}
          </h1>
          <p className="text-zinc-500 text-lg max-w-xl leading-relaxed font-medium">
            Verified as <span className="text-white font-black">{MOCK_ASSOCIATE.currentJourney}</span>. 
            Earn the <span className="text-white font-black underline decoration-2 underline-offset-4">Readiness Stamp</span> to activate employer matching.
          </p>
        </div>
        
        <div className="relative group p-6 bg-zinc-900/50 rounded-[4rem] border border-zinc-800">
          <div 
            onClick={handleSimulateVerification}
            className={`w-52 h-52 rounded-full border-[10px] flex flex-col items-center justify-center transition-all cursor-pointer overflow-hidden relative ${
            MOCK_ASSOCIATE.readinessStamp 
            ? 'border-white bg-white text-black shadow-[0_0_80px_rgba(255,255,255,0.2)]' 
            : 'border-zinc-800 bg-black text-zinc-800 hover:border-white/20'
          }`}>
            {isVerifying ? (
              <div className="absolute inset-0 bg-black flex flex-col items-center justify-center p-6 text-center animate-pulse">
                 <Loader2 size={32} className="animate-spin text-white mb-2" />
                 <p className="text-[8px] font-black text-white uppercase tracking-widest">{verStatus}</p>
              </div>
            ) : (
              <div className="text-center group-hover:scale-105 transition-transform">
                <Award size={64} className="mx-auto mb-2" />
                <p className="text-[12px] font-black uppercase tracking-[0.4em]">
                  {MOCK_ASSOCIATE.readinessStamp ? 'VERIFIED' : 'RUN AUDIT'}
                </p>
              </div>
            )}
          </div>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] space-y-8 group hover:border-white transition-all">
          <div className="flex items-center justify-between">
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest">Readiness Score</p>
            <span className="text-3xl font-black">{MOCK_ASSOCIATE.readinessScore}%</span>
          </div>
          <div className="h-3 bg-black rounded-full overflow-hidden">
            <div className="h-full bg-white transition-all duration-1000 shadow-[0_0_15px_rgba(255,255,255,0.5)]" style={{ width: `${MOCK_ASSOCIATE.readinessScore}%` }} />
          </div>
          <p className="text-[10px] text-zinc-600 font-black uppercase tracking-tighter">Reach 85% for Protocol Issuance</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] flex items-center gap-8 group hover:border-white transition-all">
          <div className="p-6 bg-black rounded-[2rem] border border-zinc-800 text-white shadow-xl group-hover:scale-110 transition-transform">
            <Award size={40} />
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Earned Badges</p>
            <p className="text-4xl font-black">{MOCK_ASSOCIATE.badges.length}</p>
          </div>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] flex items-center gap-8 group hover:border-white transition-all">
          <div className="p-6 bg-black rounded-[2rem] border border-zinc-800 text-white shadow-xl group-hover:scale-110 transition-transform">
            <Play size={40} />
          </div>
          <div>
            <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Legacy Modules</p>
            <p className="text-4xl font-black">{MOCK_ASSOCIATE.completedCourses.length} / {MOCK_COURSES.length}</p>
          </div>
        </div>
      </div>

      <section className="bg-zinc-900 border border-zinc-800 p-12 rounded-[3.5rem] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[2000ms]" />
        <div className="relative z-10 space-y-10">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white rounded-[1.2rem] flex items-center justify-center text-black shadow-2xl">
              <BrainCircuit size={28} />
            </div>
            <div>
              <h2 className="text-3xl font-black uppercase tracking-tighter">AI Mentor Reasoning</h2>
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Protocol Version: 3.1-PRO</p>
            </div>
          </div>
          
          {loadingSuggestions ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-pulse">
              {[1,2,3].map(i => <div key={i} className="h-40 bg-black/40 rounded-[2.5rem] border border-zinc-800" />)}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {suggestions.map((s, idx) => (
                <div key={idx} className="bg-black/40 p-10 rounded-[2.5rem] border border-zinc-800 hover:border-white transition-all flex flex-col h-full">
                  <span className={`text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest w-fit ${s.priority === 'High' ? 'bg-red-500/10 text-red-400' : 'bg-zinc-800 text-zinc-500'}`}>
                    {s.priority} Priority
                  </span>
                  <p className="text-lg font-black mt-6 mb-3 uppercase leading-tight">{s.suggestion}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed font-medium italic opacity-80 mt-auto">"{s.reason}"</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="space-y-10">
        <div className="flex items-center justify-between">
           <h2 className="text-3xl font-black uppercase tracking-tighter">Target Assessments</h2>
           <button className="text-[10px] font-black uppercase tracking-widest text-zinc-500 hover:text-white transition-colors underline underline-offset-4">View Exam Schedule</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <AssessmentCard 
            title="Core AI Architecture" 
            duration="45 mins" 
            onStart={() => {}} 
            score={85} 
            isPassed={true}
          />
          <AssessmentCard 
            title="Cloud Security & IAM" 
            duration="60 mins" 
            onStart={() => {}} 
          />
          <AssessmentCard 
            title="Final Readiness Exam" 
            duration="120 mins" 
            onStart={() => {}} 
          />
        </div>
      </section>
    </div>
  );
};

export default AssociateDashboard;
