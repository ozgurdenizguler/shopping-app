import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addToCart(product) {
      if (!this.items.find(item => item.Id === product.Id)) {
        this.items.push(product)
      }
    },
    removeFromCart(productId) {
      this.items = this.items.filter(item => item.Id !== productId)
    }
  },
  getters: {
    isInCart: (state) => (productId) => {
      return state.items.some(item => item.Id === productId)
    },
    totalPrice: (state) => {
      return state.items.reduce((total, item) => total + item.Price, 0)
    }
  }
})
