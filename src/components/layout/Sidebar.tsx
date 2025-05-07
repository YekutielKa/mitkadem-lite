import { Home, Newspaper, Users, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import LogoWithTextAura from '../LogoWithTextAura';

const navItems = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Posts', path: '/posts', icon: Newspaper },
  { label: 'Leads', path: '/leads', icon: Users },
  { label: 'Settings', path: '/settings', icon: Settings },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-950 text-white border-r border-gray-800 h-screen sticky top-0">
      <div className="p-6 border-b border-gray-800 flex items-center gap-3">
        <div className="relative">
          <LogoWithTextAura />
        </div>
      </div>

      <nav className="flex-1 py-4 space-y-1">
        {navItems.map(({ label, path, icon: Icon }) => (
          <Link
            key={path}
            to={path}
            className={clsx(
              'flex items-center gap-3 px-5 py-3 text-sm font-medium rounded-lg transition-colors',
              location.pathname === path
                ? 'bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-purple-500/30 text-white'
                : 'text-gray-400 hover:bg-gray-800 hover:text-white'
            )}
          >
            <Icon
              className={clsx(
                'w-5 h-5 transition-colors duration-200',
                location.pathname === path
                  ? 'text-purple-400'
                  : 'text-gray-400 group-hover:text-white'
              )}
            />
            <span>{label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
