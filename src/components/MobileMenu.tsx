import { Home, Newspaper, Users, Settings, X, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import LanguageSwitcher from './LanguageSwitcher';
import LogoWithTextAura from './LogoWithTextAura';

const navItems = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'Posts', path: '/posts', icon: Newspaper },
  { label: 'Leads', path: '/leads', icon: Users },
  { label: 'Settings', path: '/settings', icon: Settings },
];

interface Props {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
}

export default function MobileMenu({ isOpen, toggle, close }: Props) {
  const location = useLocation();

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-30 bg-gray-950 border-b border-gray-800 flex items-center justify-between px-4 py-3">
        <button onClick={toggle}>
          <Menu className="w-6 h-6 text-white" />
        </button>
        <div className="relative h-10 w-10">
          <div className="absolute inset-0 rounded-md blur-md bg-gradient-to-r from-blue-500 to-purple-500 opacity-50"></div>
          <LogoWithTextAura />
        </div>
        <LanguageSwitcher />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={clsx(
          'fixed inset-y-0 left-0 w-64 bg-gray-950 border-r border-gray-800 transform transition-transform duration-300 ease-in-out z-40 md:hidden',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="p-4 flex items-center justify-between border-b border-gray-800">
          <span className="text-lg font-bold text-white">Mitkadem</span>
          <button onClick={close}>
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          {navItems.map(({ label, path, icon: Icon }) => (
            <Link
              key={path}
              to={path}
              onClick={close}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-colors',
                location.pathname === path
                  ? 'bg-gradient-to-r from-indigo-900/40 to-purple-900/40 border border-purple-500/30 text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              )}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={close} />}
    </>
  );
}
