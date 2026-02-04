
import React, { useState } from 'react';
import { MOCK_COURSES } from '../../constants';
import { Play, FileText, ChevronLeft, CheckCircle2, Timer, Award } from 'lucide-react';
import { Course } from '../../types';

const MyLearningView: React.FC = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [completedModules, setCompletedModules] = useState<string[]>([]);

  const handleComplete = (courseId: string) => {
    setCompletedModules(prev => [...prev, courseId]);
    // In a real app, this would trigger a score update in the global state/DB
  };

  if (selectedCourse) {
    const isDone = completedModules.includes(selectedCourse.id);

    return (
      <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <button 
          onClick={() => setSelectedCourse(null)}
          className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group"
        >
          <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
            <ChevronLeft size={20} /> 
          </div>
          Back to Courses
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="aspect-video bg-zinc-900 rounded-[2.5rem] overflow-hidden border border-zinc-800 shadow-2xl relative">
              <video 
                className="w-full h-full object-cover" 
                controls 
                src={selectedCourse.videoUrl}
              />
              {isDone && (
                <div className="absolute top-6 right-6 bg-white text-black px-4 py-2 rounded-full text-xs font-black flex items-center gap-2 shadow-2xl">
                  <CheckCircle2 size={16} /> COMPLETED
                </div>
              )}
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase text-zinc-500 tracking-widest bg-zinc-900 px-3 py-1 rounded-full border border-zinc-800">Module 01</span>
                <h1 className="text-3xl font-bold">{selectedCourse.title}</h1>
              </div>
              <p className="text-zinc-400 text-lg leading-relaxed">{selectedCourse.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 h-full flex flex-col">
              <div className="flex items-center gap-2 mb-8 text-white">
                <div className="w-10 h-10 bg-black border border-zinc-800 rounded-xl flex items-center justify-center">
                  <FileText size={20} />
                </div>
                <h2 className="text-xl font-bold">Lecture Notes</h2>
              </div>
              <div className="flex-1 overflow-y-auto pr-2 space-y-4 text-zinc-400 leading-relaxed text-sm">
                {selectedCourse.notes.split('. ').map((line, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="text-zinc-700 shrink-0">{i+1}.</span>
                    <p>{line}.</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800">
                <button 
                  onClick={() => handleComplete(selectedCourse.id)}
                  disabled={isDone}
                  className={`w-full py-5 font-black rounded-[1.5rem] flex items-center justify-center gap-2 transition-all ${
                    isDone 
                      ? 'bg-zinc-800 text-zinc-500 cursor-default' 
                      : 'bg-white text-black hover:scale-[1.02] shadow-[0_0_40px_rgba(255,255,255,0.1)]'
                  }`}
                >
                  {isDone ? <Award size={18} /> : <CheckCircle2 size={18} />}
                  {isDone ? 'COURSE CERTIFIED' : 'MARK MODULE COMPLETE'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-4xl font-black tracking-tighter mb-2">My Learning Path</h1>
        <p className="text-zinc-500">Highly structured modules designed for industry readiness.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {MOCK_COURSES.map((course) => (
          <div 
            key={course.id}
            onClick={() => setSelectedCourse(course)}
            className="group cursor-pointer bg-zinc-900 border border-zinc-800 rounded-[2.5rem] overflow-hidden hover:border-white transition-all flex flex-col h-full"
          >
            <div className="relative aspect-video">
              <img src={course.thumbnail} className="w-full h-full object-cover grayscale transition-all group-hover:grayscale-0 opacity-40 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-2xl">
                  <Play size={24} fill="currentColor" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4 h-1.5 bg-black/50 rounded-full overflow-hidden backdrop-blur-md border border-white/5">
                 <div className="h-full bg-white transition-all duration-1000" style={{ width: `${course.progress}%` }} />
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                   <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">3 LESSONS • 45M</span>
                   {course.progress === 100 && <CheckCircle2 size={16} className="text-white" />}
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-white transition-colors">{course.title}</h3>
                <p className="text-sm text-zinc-500 line-clamp-2 leading-relaxed">{course.description}</p>
              </div>
              <div className="mt-8 pt-6 border-t border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-zinc-400 group-hover:text-white transition-colors">
                  <Timer size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-tighter">Self-Paced</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-white underline underline-offset-4">Continue</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyLearningView;
