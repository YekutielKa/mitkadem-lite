import { ReactNode, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import logo from '../assets/logo.png';

const LANGUAGES = ['en', 'ru', 'he', 'fr', 'es'];

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const isRtl = i18n.language === 'he';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-gray-100 text-gray-800">
      <header className="bg-white shadow p-4 flex items-center justify-between">
        <Link to={`/${lang}`}>
          <img src={logo} alt="Mitkadem Logo" className="w-10 h-10" />
        </Link>

        <nav className="flex gap-4 text-sm">
          <Link to={`/${lang}`} className="hover:underline">
            Home
          </Link>
          <Link to={`/${lang}/about`} className="hover:underline">
            About
          </Link>
          <Link to={`/${lang}/leads`} className="hover:underline">
            Leads
          </Link>
        </nav>

        <div className="flex gap-2">
          {LANGUAGES.map((lng) => (
            <Link
              key={lng}
              to={`/${lng}`}
              className={`px-2 py-1 text-sm border rounded ${
                i18n.language === lng
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 border-blue-600'
              }`}
            >
              {lng.toUpperCase()}
            </Link>
          ))}
        </div>
      </header>

      <main className="p-6">{children}</main>
    </div>
  );
}
