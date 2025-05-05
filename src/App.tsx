import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leads from './pages/Leads';
import Posts from './pages/Posts';
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <div className="relative">
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
