import React, { createContext, useState, ReactNode, useMemo } from 'react';

interface LanguageContextProps {
  children: ReactNode;
}

export const LanguageContext = createContext<{
  language: string;
  changeLanguage: (lang: string) => void;
}>({
  language: 'en',
  changeLanguage: () => {},
});

export function LanguageProvider({ children }: LanguageContextProps): JSX.Element {
  const [language, setLanguage] = useState('en');

  const changeLanguage = (lang: string): void => {
    setLanguage(lang);
  };

  const contextValue = useMemo(() => ({
    language,
    changeLanguage,
  }), [language]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}
