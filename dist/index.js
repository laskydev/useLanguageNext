const { useRouter } = require('next/router')

const useLanguage = () => {
  const { locale } = useRouter()
  const handleLanguage = (handlerLanguage) => {
    return handlerLanguage[locale]
  }

  return { handleLanguage }
}

module.exports = {
    useLanguage,
}
