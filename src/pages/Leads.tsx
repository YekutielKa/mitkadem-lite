import { useTranslation } from 'react-i18next';

export default function Leads() {
  const { t } = useTranslation();

  return (
    <div>
      <h1 className="text-2xl font-semibold text-blue-600">{t('leadsTitle', 'Your Leads')}</h1>
      <p className="mt-2 text-gray-600">{t('leadsDescription', 'List of incoming client requests will appear here.')}</p>
    </div>
  );
}
