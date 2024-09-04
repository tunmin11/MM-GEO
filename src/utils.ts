import { getCurrentLanguage } from './config';

export const getName = (item: { eng: string, mm: string }): string => {
  return getCurrentLanguage() === 'mm' ? item.mm : item.eng;
};
