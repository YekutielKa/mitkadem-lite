import { Routes, Route, Navigate, useParams, Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import About from './pages/About';

const LANGUAGES = ['en', 'ru', 'he', 'fr', 'es'];

// 💡 Функция для определения языка браузера
function detectUserLanguage(): string {
  const browserLang = navigator.language.split('-')[0];
  return LANGUAGES.includes(browserLang) ? browserLang : 'en';
}

function LanguageLayout() {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  const isRtl = i18n.language === 'he';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen bg-gray-100 text-center">
      <header className="p-4 flex flex-col items-center gap-4">
        <nav className="flex gap-4">
          <Link to={`/${lang}`} className="text-blue-600 hover:underline">Home</Link>
          <Link to={`/${lang}/about`} className="text-blue-600 hover:underline">About</Link>
        </nav>

        <div className="flex gap-2">
          {LANGUAGES.map((lng) => (
            <Link
              key={lng}
              to={`/${lng}`}
              className={`px-2 py-1 border rounded ${
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

      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
}

// ✅ Главный компонент App
export default function App() {
  const userLang = detectUserLanguage();

  return (
    <Routes>
      {/* Автоматический редирект с / на /<язык браузера> */}
      <Route path="/" element={<Navigate to={`/${userLang}`} replace />} />

      {/* локализованные маршруты */}
      <Route path=":lang" element={<LanguageLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
