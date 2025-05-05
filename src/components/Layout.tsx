import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';

export default function Layout({ children }: { children: ReactNode }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <div className="font-bold text-xl">Mitkadem</div>
        <div className="flex items-center space-x-4">
          <Link to="/">{t('nav.home')}</Link>
          <Link to="/posts">{t('nav.posts')}</Link>
          <Link to="/leads">{t('nav.leads')}</Link>

          <LanguageSwitcher />
        </div>
      </nav>

      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
