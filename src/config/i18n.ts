import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as pt_BR from './pt-BR.json'

const resources = {
  'pt-BR': {
    translation: pt_BR,
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'pt-BR',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
