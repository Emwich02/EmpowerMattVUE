import { defineStore } from 'pinia'

const SET_LANG = 'setLang'
const DEFAULT_LANG = 'THA'

export const useLanguage = defineStore({
    id: 'language',

    state: () => ({
        activeLanguage: window.localStorage.getItem(SET_LANG) != undefined ? window.localStorage.getItem(SET_LANG) : DEFAULT_LANG,
    }),
    actions: {
        switchLang(lang){
            this.activeLanguage = lang
            window.localStorage.setItem(SET_LANG, lang)
        },

    },
    getters: {
        activeLang: (state)=> state.activeLanguage,
    }
})

