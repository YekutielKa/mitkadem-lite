import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import LanguageSwitcher from '../components/LanguageSwitcher';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { i18n, t, ready } = useTranslation();
  const isRtl = i18n.language === 'he';

  if(!ready) return null;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="Mitkadem Logo" className="w-10 h-10" />
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link to="/" className="hover:underline">
            {t('nav.home')}
          </Link>
          <Link to="/posts" className="hover:underline">
            {t('nav.posts')}
          </Link>
          <Link to="/leads" className="hover:underline">
            {t('nav.leads')}
          </Link>
        </nav>

        <LanguageSwitcher />
      </header>

      <main className="p-6 flex-1">
        {children}
      </main>
    </div>
  );
}
