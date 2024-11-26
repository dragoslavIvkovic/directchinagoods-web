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
        className={"text-white bg-gray-900 border rounded px-2 py-1"}
      >
        <option value="en">English</option>
        <option value="sr">Srpski</option>
      </select>
    </div>
  );
};

export default LanguageSwitcher;
