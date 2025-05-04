import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold mb-6">{t('welcome')}</h1>
      <Button variant="default">{t('change_lang')}</Button>
    </div>
  );
}
