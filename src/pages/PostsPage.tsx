import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function PostsPage() {
  const { t } = useTranslation();

  return (
    <div className="space-y-6">
      {/* Заголовок и кнопка */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">{t('posts.title')}</h1>
          <p className="text-gray-400 text-sm">{t('posts.description')}</p>
        </div>
        <Button variant="default" className="px-6 py-2 text-sm">
          ➕ {t('posts.create')}
        </Button>
      </div>

      {/* Фильтры (будет позже) */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-4">
        <p className="text-sm text-gray-400">🔍 {t('posts.filters_placeholder')}</p>
      </div>

      {/* Таблица постов (заглушка) */}
      <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-gray-400 text-sm text-center">
        📭 {t('posts.empty')}
      </div>
    </div>
  );
}
