import {
    defineStore
  } from 'pinia'
  
  export const useProductCat = defineStore('productCat', {
    state: () => ({
      productGroup: 0,
      productSubGroup: 0,
      productType: 0,
    }),
    mutations: {
      setProductGroup(value) {
        this.productGroup = value;
      },
      setProductSubGroup(value) {
        this.productSubGroup = value;
      },
      setProductType(value) {
        this.productType = value;
      },
    },
    persist: true
  })