// stores/counter.js
import { defineStore } from 'pinia'

export const useWindowResolution = defineStore('responsive', {
  state: () => ({
    isLaptop: false,
    isMobile: false,
  }),
  persist: true
})