let globalLanguage: 'eng' | 'mm' = 'eng'; // Default language is English

export const configure = (options: { language?: 'eng' | 'mm' }) => {
  if (options.language) {
    globalLanguage = options.language;
  }
};

export const getCurrentLanguage = (): 'eng' | 'mm' => globalLanguage;
