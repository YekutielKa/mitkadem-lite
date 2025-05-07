import LanguageSwitcher from '@/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

export default function DashboardHeader() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">{t('dashboard.title')}</h1>
        <p className="text-sm text-gray-400">{t('dashboard.subtitle')}</p>

        {/* ✅ Mobile Start Campaign Button */}
        <div className="flex md:hidden">
          <button className="btn mt-2">🚀 Start Campaign</button>
        </div>
      </div>

      {/* ✅ Desktop Lang + Campaign */}
      <div className="hidden md:flex items-center gap-4">
        <LanguageSwitcher />
        <button className="btn">🚀 Start Campaign</button>
      </div>
    </div>
  );
}
