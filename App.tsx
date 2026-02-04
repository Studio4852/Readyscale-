
import React, { useState } from 'react';
import { UserRole } from './types';
import Layout from './components/Layout';
import AssociateDashboard from './views/AssociateDashboard';
import EmployerDashboard from './views/EmployerDashboard';
import LoginView from './views/LoginView';
import MyLearningView from './views/Associate/MyLearningView';
import AssessmentsView from './views/Associate/AssessmentsView';
import ProjectsView from './views/Associate/ProjectsView';
import ManagementPortal from './views/Management/ManagementPortal';
import AIChatDrawer from './components/AIChatDrawer';
import { Award, Sparkles } from 'lucide-react';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeRole, setActiveRole] = useState<UserRole>(UserRole.ASSOCIATE);
  const [activeTab, setActiveTab] = useState('Dashboard');
  const [user, setUser] = useState({ name: 'Alex Johnson', email: 'alex.j@example.com' });
  const [isAiOpen, setIsAiOpen] = useState(false);

  const handleLogin = (role: UserRole) => {
    setActiveRole(role);
    setIsAuthenticated(true);
    if (role === UserRole.EMPLOYER) {
      setUser({ name: 'Jordan Employer', email: 'jordan@tech-hire.com' });
      setActiveTab('Pipeline');
    } else if (role === UserRole.ASSOCIATE) {
      setUser({ name: 'Alex Johnson', email: 'alex.j@example.com' });
      setActiveTab('Dashboard');
    } else {
      setUser({ name: 'System Manager', email: 'manager@readyscale.ai' });
      setActiveTab('Dashboard'); // Changed from Overview to Dashboard
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActiveTab('Dashboard');
  };

  const renderAssociateContent = () => {
    switch (activeTab) {
      case 'Dashboard': return <AssociateDashboard />;
      case 'My Learning': return <MyLearningView />;
      case 'Assessments': return <AssessmentsView />;
      case 'Projects': return <ProjectsView />;
      case 'My Badges': return (
        <div className="space-y-8 animate-in fade-in duration-500">
           <h1 className="text-4xl font-black tracking-tighter uppercase">Recognition Vault</h1>
           <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
             {['Quick Learner', 'Foundation Expert', 'UI Specialist'].map(b => (
               <div key={b} className="p-10 bg-zinc-900 border border-zinc-800 rounded-[3rem] flex flex-col items-center text-center gap-4 group hover:border-white transition-all">
                 <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                   <Award size={40} />
                 </div>
                 <p className="font-bold text-lg">{b}</p>
                 <span className="text-[10px] text-zinc-500 font-black uppercase tracking-widest">Certified Nov 2023</span>
               </div>
             ))}
           </div>
        </div>
      );
      default: return <AssociateDashboard />;
    }
  };

  const renderContent = () => {
    switch (activeRole) {
      case UserRole.ASSOCIATE: return renderAssociateContent();
      case UserRole.EMPLOYER: return <EmployerDashboard activeTab={activeTab} />;
      case UserRole.MANAGEMENT: return <ManagementPortal activeTab={activeTab} />;
      default: return <AssociateDashboard />;
    }
  };

  if (!isAuthenticated) {
    return <LoginView onLogin={handleLogin} />;
  }

  return (
    <>
      <Layout 
        activeRole={activeRole} 
        onRoleChange={handleLogin} 
        activeTab={activeTab}
        onTabChange={setActiveTab}
        userName={user.name}
        onLogout={handleLogout}
      >
        <div className="animate-in fade-in duration-700">
          {renderContent()}
        </div>
      </Layout>
      
      {/* AI Assistant Toggle */}
      <button 
        onClick={() => setIsAiOpen(true)}
        className="fixed bottom-8 right-8 w-14 h-14 bg-white text-black rounded-full shadow-[0_0_50px_rgba(255,255,255,0.4)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-50 group border border-zinc-200"
      >
        <div className="absolute -top-12 right-0 bg-zinc-900 text-white text-[10px] px-3 py-1 rounded-lg border border-zinc-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-black uppercase tracking-widest">
          Course Mentor
        </div>
        <Sparkles size={24} />
      </button>

      <AIChatDrawer isOpen={isAiOpen} onClose={() => setIsAiOpen(false)} />
    </>
  );
};

export default App;
