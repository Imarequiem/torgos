export default {
  state: {
    products: [],
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const res = await fetch("https://dummyjson.com/products?limit=2");
      const products = await res.json();
      commit("updateProducts", products.products);
    },
  },
  mutations: {
    updateProducts(state, products) {
      state.products = products;
    },
  },
};
