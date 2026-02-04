
import React from 'react';
import { UserRole } from '../types';
import { 
  LayoutDashboard, 
  GraduationCap, 
  Briefcase, 
  Settings, 
  LogOut, 
  Award, 
  PieChart, 
  ShieldCheck, 
  FolderGit2,
  Users,
  BarChart3,
  Globe,
  Headset,
  Box
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  activeRole: UserRole;
  onRoleChange: (role: UserRole) => void;
  activeTab: string;
  onTabChange: (tab: string) => void;
  userName: string;
  onLogout: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  children, 
  activeRole, 
  onRoleChange, 
  activeTab, 
  onTabChange, 
  userName,
  onLogout 
}) => {
  const menuItems = {
    [UserRole.ASSOCIATE]: [
      { name: 'Dashboard', icon: LayoutDashboard },
      { name: 'My Learning', icon: GraduationCap },
      { name: 'Assessments', icon: ShieldCheck },
      { name: 'Projects', icon: FolderGit2 },
      { name: 'My Badges', icon: Award },
    ],
    [UserRole.EMPLOYER]: [
      { name: 'Pipeline', icon: PieChart },
      { name: 'Talent Pool', icon: Users },
      { name: 'Studio', icon: Box }, // Course setup focus
    ],
    [UserRole.MANAGEMENT]: [
      { name: 'Dashboard', icon: LayoutDashboard },
      { name: 'Users', icon: Users },
      { name: 'Clients', icon: Globe },
      { name: 'Marketplace', icon: Briefcase },
      { name: 'Support', icon: Headset },
      { name: 'Reports', icon: BarChart3 },
    ],
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-zinc-800 flex flex-col shrink-0">
        <div className="p-8">
          <h1 className="text-2xl font-black tracking-tighter text-white flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm rotate-45" />
            </div>
            ReadyScale
          </h1>
        </div>

        <nav className="flex-1 px-4 space-y-1">
          {menuItems[activeRole].map((item) => (
            <button
              key={item.name}
              onClick={() => onTabChange(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3.5 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                activeTab === item.name 
                  ? 'bg-white text-black' 
                  : 'text-zinc-500 hover:text-white hover:bg-zinc-900'
              }`}
            >
              <item.icon size={16} />
              {item.name}
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-800 space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-[9px] text-zinc-600 uppercase font-black tracking-[0.3em] px-2">Access Portal</p>
            <div className="flex flex-wrap gap-1">
              {[UserRole.ASSOCIATE, UserRole.EMPLOYER, UserRole.MANAGEMENT].map((role) => (
                <button
                  key={role}
                  onClick={() => onRoleChange(role)}
                  className={`text-[8px] px-2 py-1 rounded border font-black transition-all ${
                    activeRole === role ? 'bg-zinc-800 text-white border-zinc-600' : 'border-zinc-900 text-zinc-700 hover:text-zinc-400'
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-3 px-3 py-3 bg-zinc-900/50 rounded-2xl border border-zinc-800">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-black font-black text-xs">
              {userName[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-black truncate uppercase tracking-tighter">{userName}</p>
              <p className="text-[9px] text-zinc-600 uppercase font-black tracking-widest">{activeRole}</p>
            </div>
          </div>
          <button 
            onClick={onLogout}
            className="w-full flex items-center gap-2 px-4 py-2 text-xs text-zinc-600 hover:text-red-400 font-black uppercase tracking-widest transition-colors"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-y-auto bg-black relative">
        <div className="p-12 max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
