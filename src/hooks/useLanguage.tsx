import { useContext } from "react";
import { LanguageProps } from "@/types/language";
import { LanguageContext } from "@/contexts/LeaguageContext";

const useLanguage = (): LanguageProps => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export default useLanguage;
