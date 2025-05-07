import { useTranslation } from 'react-i18next';
import DashboardHeader from '@/components/layout/DashboardHeader';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Header */}
      <DashboardHeader />
      {/* AI Performance Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <SummaryCard
          title={t('dashboard.metrics.engagement')}
          value="8.7%"
          change="+12%"
          color="text-green-400"
        />
        <SummaryCard
          title={t('dashboard.metrics.conversion')}
          value="2.4%"
          change="+7%"
          color="text-green-400"
        />
        <SummaryCard
          title={t('dashboard.metrics.leads')}
          value="37"
          change="+18%"
          color="text-green-400"
        />
      </div>
    </div>
  );
}

function SummaryCard({
  title,
  value,
  change,
  color,
}: {
  title: string;
  value: string;
  change: string;
  color?: string;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-4 shadow-md">
      <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
        <span>{title}</span>
        <span className={`${color} font-medium`}>{change}</span>
      </div>
      <div className="text-2xl font-bold text-white">{value}</div>
    </div>
  );
}
