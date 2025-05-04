import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-semibold">{t('aboutTitle', 'About Mitkadem')}</h1>
      <p className="text-gray-600 mt-2">{t('aboutDescription', 'More info will be here.')}</p>
    </div>
  );
}
