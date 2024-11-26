import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <select
        onChange={(e) => changeLanguage(e.target.value)}
        defaultValue={i18n.language}
        className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-gray-900 border border-transparent rounded-lg shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-200 ease-in-out transform hover:-translate-y-0.5"
      >
        <option value="en">English</option>
        <option value="sr">Srpski</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;