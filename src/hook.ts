import { configure } from './config';

export const initialize = (config: { language?: 'eng' | 'mm' }) => {
  configure(config);
  console.log('Myanmar Geo Data initialized with language:', config.language);
};
