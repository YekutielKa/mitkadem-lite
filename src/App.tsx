import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Leads from './pages/Leads';
import PostsPage from './pages/PostsPage';

import { useTranslation } from 'react-i18next';
import Layout from './layouts/Layout';

function App() {
const { i18n } = useTranslation()

  return (
    <BrowserRouter>
      <div className="relative">
        <Layout key={i18n.language}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
