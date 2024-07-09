import { createI18n } from 'vue-i18n'
import ptBr from './translations/ptBr.json'
import enUs from './translations/enUs.json'

export default createI18n({
  locale: navigator.language,
  legacy: false,
  messages: {
    pt: ptBr,
    en: enUs
  }
})
