import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import i18n from '../i18n'; 

export const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);

  return <>{children}</>;
};
