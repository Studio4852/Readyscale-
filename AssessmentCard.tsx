
import React from 'react';
import { ShieldCheck, Timer, ChevronRight } from 'lucide-react';

interface AssessmentCardProps {
  title: string;
  duration: string;
  isPassed?: boolean;
  score?: number;
  onStart: () => void;
}

const AssessmentCard: React.FC<AssessmentCardProps> = ({ title, duration, isPassed, score, onStart }) => {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 bg-black rounded-lg text-white">
          <ShieldCheck size={20} />
        </div>
        {score !== undefined && (
          <span className={`text-xs font-bold px-2 py-1 rounded ${isPassed ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
            {score}% SCORE
          </span>
        )}
      </div>
      <h3 className="font-semibold text-lg mb-1">{title}</h3>
      <div className="flex items-center gap-2 text-zinc-400 text-sm mb-6">
        <Timer size={14} />
        <span>{duration}</span>
      </div>
      <button 
        onClick={onStart}
        className="w-full py-2.5 rounded-lg bg-zinc-800 hover:bg-white hover:text-black font-medium text-sm flex items-center justify-center gap-2 transition-all"
      >
        {isPassed ? 'Retake Test' : 'Start Assessment'}
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default AssessmentCard;
