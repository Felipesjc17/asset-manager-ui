import { createI18n } from 'vue-i18n'
import ptBr from './translations/ptBr.json'
import enUs from './translations/enUs.json'

export default createI18n({
  locale: navigator.language,
  fallbackLocale: navigator.language,
  messages: {
    pt: ptBr,
    en: enUs
  }
})
