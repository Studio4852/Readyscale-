
import React, { useState, useEffect } from 'react';
import { ShieldCheck, Timer, AlertCircle, CheckCircle2, ChevronRight } from 'lucide-react';
import { MOCK_ASSOCIATE } from '../../constants';

const AssessmentsView: React.FC = () => {
  const [takingTest, setTakingTest] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let timer: any;
    if (takingTest && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setCompleted(true);
    }
    return () => clearInterval(timer);
  }, [takingTest, timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (completed) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center animate-in zoom-in duration-500">
        <div className="w-24 h-24 bg-white text-black rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-4xl font-bold mb-2">Assessment Complete</h2>
        <p className="text-zinc-400 mb-8 max-w-sm">Your scores have been recorded and your readiness score updated.</p>
        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl w-full max-w-md">
          <div className="flex justify-between items-center mb-4">
            <span className="text-zinc-500 font-bold uppercase tracking-widest text-xs">Final Score</span>
            <span className="text-3xl font-black">88%</span>
          </div>
          <div className="w-full h-3 bg-zinc-800 rounded-full overflow-hidden">
            <div className="h-full bg-white" style={{ width: '88%' }} />
          </div>
        </div>
        <button 
          onClick={() => { setTakingTest(false); setCompleted(false); setTimeLeft(600); }}
          className="mt-8 px-8 py-3 bg-zinc-800 hover:bg-white hover:text-black font-bold rounded-2xl transition-all"
        >
          Return to Dashboard
        </button>
      </div>
    );
  }

  if (takingTest) {
    return (
      <div className="max-w-3xl mx-auto space-y-12">
        <header className="flex items-center justify-between sticky top-0 py-4 bg-black/80 backdrop-blur-xl z-10 border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-white" />
            <h2 className="font-bold text-lg">System Architecture Readiness</h2>
          </div>
          <div className={`flex items-center gap-2 px-4 py-2 rounded-xl border ${timeLeft < 60 ? 'bg-red-500/10 border-red-500 text-red-500' : 'bg-zinc-900 border-zinc-800 text-zinc-400'}`}>
            <Timer size={18} />
            <span className="font-mono font-bold text-lg">{formatTime(timeLeft)}</span>
          </div>
        </header>

        <div className="space-y-10">
          {[1, 2, 3].map((q) => (
            <div key={q} className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-3xl space-y-6">
              <span className="text-xs font-black text-zinc-500 uppercase tracking-widest">Question {q} of 10</span>
              <p className="text-xl font-medium leading-relaxed">
                Which architectural pattern is most suitable for a system requiring high scalability and availability across multiple regions?
              </p>
              <div className="space-y-3">
                {['Monolithic Architecture', 'Microservices with Global DB', 'Serverless Functions', 'Event-Driven Architecture'].map((opt) => (
                  <label key={opt} className="flex items-center gap-4 p-4 rounded-2xl border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900 cursor-pointer transition-all">
                    <input type="radio" name={`q${q}`} className="accent-white w-5 h-5" />
                    <span className="text-zinc-300 font-medium">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-4 py-12">
          <button className="px-8 py-4 bg-zinc-900 border border-zinc-800 rounded-2xl font-bold hover:bg-zinc-800 transition-all">Save for Later</button>
          <button 
            onClick={() => setCompleted(true)}
            className="px-12 py-4 bg-white text-black rounded-2xl font-black hover:scale-105 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            Submit Assessment
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Readiness Assessments</h1>
          <p className="text-zinc-400">Validate your skills and earn the Readiness Stamp for employers.</p>
        </div>
        <div className="px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-3xl flex items-center gap-6">
          <div className="text-center">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Global Rank</p>
            <p className="text-2xl font-black">Top 12%</p>
          </div>
          <div className="w-px h-10 bg-zinc-800" />
          <div className="text-center">
            <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Next Milestone</p>
            <p className="text-2xl font-black">Stamp Ready</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4">
            <ShieldCheck className="text-zinc-800 group-hover:text-zinc-700 transition-colors" size={60} />
          </div>
          <h3 className="text-xl font-bold mb-2">Core JavaScript</h3>
          <p className="text-sm text-zinc-500 mb-8">Completed on Oct 15, 2023</p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black">85%</span>
            <span className="px-3 py-1 bg-green-500/10 text-green-400 rounded-lg text-[10px] font-bold uppercase tracking-widest border border-green-500/20">PASSED</span>
          </div>
        </div>

        <div className="p-8 bg-zinc-900 border-2 border-white rounded-3xl relative overflow-hidden group hover:scale-[1.02] transition-transform cursor-pointer">
          <div className="flex justify-between items-start mb-6">
            <div className="p-3 bg-white text-black rounded-xl">
              <ShieldCheck size={24} />
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-white text-black rounded-full text-[10px] font-black uppercase tracking-tighter">
              <Timer size={12} /> 10m Remaining
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">System Architecture</h3>
          <p className="text-sm text-zinc-400 mb-8">Unlock the readiness stamp by passing this assessment with 80% or higher.</p>
          <button 
            onClick={() => setTakingTest(true)}
            className="w-full py-4 bg-white text-black font-black rounded-2xl flex items-center justify-center gap-2 group-hover:bg-zinc-200 transition-colors"
          >
            Start Attempt <ChevronRight size={18} />
          </button>
        </div>

        <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-3xl opacity-50 flex flex-col justify-center items-center text-center space-y-4">
          <AlertCircle size={32} className="text-zinc-700" />
          <h3 className="font-bold">Final Verification</h3>
          <p className="text-xs text-zinc-500">Locked until previous assessments are cleared.</p>
        </div>
      </div>
    </div>
  );
};

export default AssessmentsView;
