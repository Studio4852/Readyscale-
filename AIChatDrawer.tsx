
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, BrainCircuit, Sparkles, Loader2 } from 'lucide-react';
import { askAgent } from '../services/geminiService';
import { MOCK_ASSOCIATE } from '../constants';

interface AIChatDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChatDrawer: React.FC<AIChatDrawerProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hello Alex! I'm your ReadyScale Mentor. I can help you with course concepts, test prep, or finding your next project. How can I assist you today?" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleSend = async () => {
    if (!input.trim()) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const response = await askAgent(userMsg, MOCK_ASSOCIATE);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setLoading(false);
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-full md:w-[400px] bg-black border-l border-zinc-800 shadow-2xl z-[100] transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-col h-full">
        <header className="p-6 border-b border-zinc-800 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center">
              <BrainCircuit size={24} />
            </div>
            <div>
              <h2 className="font-bold text-white">AI Mentor</h2>
              <p className="text-[10px] text-zinc-500 uppercase tracking-widest font-black">Online • Active</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-zinc-800 rounded-lg transition-colors">
            <X size={20} />
          </button>
        </header>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scroll-smooth">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                m.role === 'user' 
                  ? 'bg-white text-black font-medium' 
                  : 'bg-zinc-900 border border-zinc-800 text-zinc-300'
              }`}>
                {m.text}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-zinc-500" />
                <span className="text-xs text-zinc-500">Thinking...</span>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-zinc-800 bg-zinc-900/20">
          <div className="relative">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about your project..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl py-4 pl-6 pr-14 text-sm focus:outline-none focus:border-white transition-all"
            />
            <button 
              onClick={handleSend}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-zinc-600 text-center mt-4 flex items-center justify-center gap-1">
            <Sparkles size={10} /> Powered by ReadyScale Gemini Intelligence
          </p>
        </div>
      </div>
    </div>
  );
};

export default AIChatDrawer;
