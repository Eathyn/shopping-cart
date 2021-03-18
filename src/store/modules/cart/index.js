import axios from 'axios';

const state = {
  cartItems: [],
};

const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};

const actions = {
  getCartItems({ commit }) {
    axios
      .get('/api/cart')
      .then((res) => {
        commit('UPDATE_CART_ITEMS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  addCartItem({ commit }, cartItem) {
    axios
      .post('/api/cart', cartItem)
      .then((res) => {
        commit('UPDATE_CART_ITEMS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  removeCartItem({ commit }, cartItem) {
    axios
      .post('/api/cart/delete', cartItem)
      .then((res) => {
        commit('UPDATE_CART_ITEMS', res.data);
      });
  },
  removeAllCartItems({ commit }) {
    axios
      .post('/api/cart/delete/all')
      .then((response) => {
        commit('UPDATE_CART_ITEMS', response.data);
      });
  },
};

const getters = {
  // eslint-disable-next-line no-shadow
  cartItems: (state) => state.cartItems,
  // eslint-disable-next-line no-shadow
  cartTotal: (state) => state.cartItems.reduce((acc, cartItem) => (cartItem.quantity
    * cartItem.price) + acc, 0).toFixed(2),
  // eslint-disable-next-line no-shadow
  cartQuantity: (state) => state.cartItems.reduce((acc, cartItem) => cartItem.quantity + acc, 0),
};

const cartModule = {
  state,
  mutations,
  actions,
  getters,
};

export default cartModule;
