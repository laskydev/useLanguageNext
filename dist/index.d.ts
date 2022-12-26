type handleLanguage = (handleLanguage: object) => string;
type UseLanguage = () => {handleLanguage: handleLanguage};
export const useLanguage: UseLanguage;
