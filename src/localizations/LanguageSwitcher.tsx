import { useTheme } from '@/components/theme-provider';
import React from 'react';
import { useTranslation } from 'react-i18next';
 
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { theme } = useTheme(); // Dodajte useTheme hook

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
        className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} 
          border rounded px-2 py-1`}
      >
        <option value="en">English</option>
        <option value="sr">Srpski</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;