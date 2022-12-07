import {translations} from "./translations";

const LANG_RU = 'ru'
const LANG_EN = 'en'

export function isCorrectLanguage(lang) {
    return lang === LANG_RU || lang === LANG_EN
}

export function i18n(lang = LANG_RU, text) {
    return translations[lang][text]
}