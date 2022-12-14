import { useRouter } from 'next/router'

export const useLanguage = () => {
  const { locale } = useRouter()
  const handleLanguage = (handlerLanguage) => {
    return handlerLanguage[locale]
  }

  return { handleLanguage }
}