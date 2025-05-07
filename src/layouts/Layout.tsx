import { ReactNode, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/layout/Sidebar';
import MobileMenu from '../components/MobileMenu'; // ✅ добавили

interface Props {
  children?: ReactNode;
}

export default function Layout({ children }: Props) {
  const { i18n, ready } = useTranslation();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const isRtl = i18n.language === 'he';

  if (!ready) return null;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="flex min-h-screen bg-gray-900 text-white">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* ✅ Mobile Header + Sidebar Drawer */}
      <MobileMenu
        isOpen={isMobileNavOpen}
        toggle={() => setMobileNavOpen((prev) => !prev)}
        close={() => setMobileNavOpen(false)}
      />

      {/* Main Content */}
      <main className="flex-1 p-4 pt-16 md:pt-6 transition-all duration-300">
        {children || <Outlet />}
      </main>
    </div>
  );
}
