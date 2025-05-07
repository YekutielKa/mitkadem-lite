// src/components/LanguageSwitcher.tsx

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { ChevronDown } from 'lucide-react';

const languages = [
  { code: 'en', label: '🇺🇸 English' }, 
  { code: 'ru', label: '🇷🇺 Русский' },
  { code: 'he', label: '🇮🇱 עברית' },
  { code: 'fr', label: '🇫🇷 Français' },
  { code: 'es', label: '🇪🇸 Español' },
];


export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = languages.find((l) => l.code === i18n.language);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  return (
    <Menu as="div" className="relative">
      <MenuButton className="inline-flex items-center gap-2 bg-gray-800 px-3 py-2 text-sm font-medium rounded-md hover:bg-gray-700">
        {current?.label}
        <ChevronDown className="w-4 h-4" />
      </MenuButton>

      <MenuItems className="absolute right-0 mt-2 w-40 origin-top-right bg-gray-800 border border-gray-700 rounded-md shadow-lg focus:outline-none z-50">
        {languages.map((lang) => (
          <MenuItem key={lang.code}>
            {({ active }) => (
              <button
                onClick={() => changeLanguage(lang.code)}
                className={clsx(
                  'w-full text-left px-4 py-2 text-sm',
                  active ? 'bg-gray-700 text-white' : 'text-gray-300'
                )}
              >
                {lang.label}
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
