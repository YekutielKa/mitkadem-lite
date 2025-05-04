import { Routes, Route, Navigate, useParams, Outlet } from 'react-router-dom';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Leads from './pages/Leads'; // ⬅️ Добавим эту страницу

const LANGUAGES = ['en', 'ru', 'he', 'fr', 'es'];

function detectUserLanguage(): string {
  const browserLang = navigator.language.split('-')[0];
  return LANGUAGES.includes(browserLang) ? browserLang : 'en';
}

function LanguageWrapper() {
  const { i18n } = useTranslation();
  const { lang } = useParams();

  useEffect(() => {
    if (lang && LANGUAGES.includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default function App() {
  const userLang = detectUserLanguage();

  return (
    <Routes>
      <Route path="/" element={<Navigate to={`/${userLang}`} replace />} />
      <Route path=":lang" element={<LanguageWrapper />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="leads" element={<Leads />} />
      </Route>
    </Routes>
  );
}
