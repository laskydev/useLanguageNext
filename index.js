import React from 'react'
import { useRouter } from 'next/router'

export const useLanguage = () => {
  const { locale } = useRouter()
  const handleLanguage = (handlerLanguage) => {
    return handlerLanguage[locale]
  }

  return { handleLanguage }
}

export default useLanguage