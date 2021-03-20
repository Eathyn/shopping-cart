import axios from 'axios';

const state = {
  productItems: [],
};

const mutations = {
  // eslint-disable-next-line no-shadow
  UPDATE_PRODUCT_ITEMS(state, payload) {
    state.productItems = payload;
  },
};

const actions = {
  getProductItems({ commit }, token) {
    axios
      .get(`/api/products?token=${token}`)
      .then((res) => {
        commit('UPDATE_PRODUCT_ITEMS', res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};

const getters = {
  // eslint-disable-next-line no-shadow
  productItems: (state) => state.productItems,
  // eslint-disable-next-line no-shadow,max-len
  productItemFromId: (state) => (id) => state.productItems.find((productItem) => productItem.id === id),
};

const productModule = {
  state,
  mutations,
  actions,
  getters,
};

export default productModule;
