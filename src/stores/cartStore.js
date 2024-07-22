import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    productsInCart: [],
  }),
  actions: {
    addToCart(product) {
      this.productsInCart.push(product);
    },
    removeFromCart(product) {
      this.productsInCart = this.productsInCart.filter(
        item => item.id !== product.id
      );
    },
  },
});
