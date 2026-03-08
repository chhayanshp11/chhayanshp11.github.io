"use client";

import React, { createContext, useContext, ReactNode } from "react";
import textsEn from "../../lang/data-texts-en";

type Language = "en";

const LanguageContext = createContext({
  language: "en" as Language,
  toggleLanguage: () => {},
  texts: textsEn,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  return (
    <LanguageContext.Provider value={{ language: "en", toggleLanguage: () => {}, texts: textsEn }}>
      {children}
    </LanguageContext.Provider>
  );
};
