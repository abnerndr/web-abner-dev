import { ReactNode, createContext, useEffect, useState } from "react";
import { getCookies } from "cookies-next";
import { LanguageProps } from "@/types/language";

export const LanguageContext = createContext<LanguageProps>(
  {} as LanguageProps
);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("");

  console.log(setLanguage, "setLanguage");
  let cookies = getCookies();
  console.log(cookies, "cookies");
  useEffect(() => {
    console.log(cookies["language"], "cookies");
  }, [cookies]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
