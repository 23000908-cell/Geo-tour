import { createContext, useContext } from 'react';

export const LangContext = createContext<'en'|'vi'>('en');

export function useLang() {
  return useContext(LangContext);
}
