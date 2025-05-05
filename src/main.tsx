import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // TailwindCSS
import './i18n'; // инициализация i18n
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={<div>Загрузка переводов...</div>}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>
);
