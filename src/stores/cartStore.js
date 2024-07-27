import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [],
  }),
  getters: {
    cartItemsCount: state => state.cartItems.length,
  },
  actions: {
    addToCart(product) {
      this.cartItems.push(product);
    },
    removeFromCart(product) {
      this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    },
  },
});
