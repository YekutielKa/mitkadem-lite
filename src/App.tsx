import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './pages/Home';
import Leads from './pages/Leads';
import Posts from './pages/Posts';
import Layout from './components/Layout';

const languages = ['ru', 'en', 'he', 'fr', 'es'];

function App() {
  const { i18n, t } = useTranslation();

  const changeLanguage = () => {
    const currentIndex = languages.indexOf(i18n.language);
    const nextIndex = (currentIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextIndex]);
  };

  return (
    <BrowserRouter>
      <div className="relative">
        <button
          onClick={changeLanguage}
          className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded z-50"
        >
          {t('change_lang')}
        </button>

        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/posts" element={<Posts />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
