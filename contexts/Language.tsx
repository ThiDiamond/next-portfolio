import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  FC,
  useContext,
} from 'react';
import { useRouter } from 'next/router';
interface LanguageData {
  language: 'pt' | 'en';
  setLanguage: Dispatch<SetStateAction<'pt' | 'en'>>;
}

const LanguageContext = createContext<LanguageData>({} as LanguageData);

export const LanguageProvider: FC = ({ children }) => {
  const { locale } = useRouter();
  const getLanguage = () => (locale === 'pt-BR' ? 'pt' : 'en');
  const [language, setLanguage] = useState<'pt' | 'en'>(getLanguage());

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
