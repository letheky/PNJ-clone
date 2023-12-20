import {
  defineStore
} from 'pinia'

export const useUserToken = defineStore('userToken', {
  state: () => ({
    token: '',
    refreshToken: '',
  }),
  mutations: {
    setToken(value) {
      this.token = value;
    },
    setRefreshToken(value) {
      this.refreshToken = value;
    },
  },
  persist: true
})