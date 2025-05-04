import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-3xl font-bold text-blue-600">{t('welcome')}</h1>
      <p className="text-gray-700 mt-2">{t('description')}</p>
    </div>
  );
}
