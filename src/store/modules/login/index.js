import axios from 'axios';

const state = {
  token: null,
  loading: false,
};

const mutations = {
  // eslint-disable-next-line no-shadow
  SET_TOKEN(state, token) {
    state.token = token;
  },
  // eslint-disable-next-line no-shadow
  LOGIN_PENDING(state) {
    state.loading = true;
  },
  // eslint-disable-next-line no-shadow
  LOGIN_SUCCESS(state) {
    state.loading = false;
  },
};

const actions = {
  login({ commit }) {
    commit('LOGIN_PENDING');
    return axios
      .post('/api/login')
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        commit('SET_TOKEN', res.data.token);
        commit('LOGIN_SUCCESS');
      });
  },
  logout({ commit }) {
    return new Promise((resolve) => {
      localStorage.removeItem('token');
      commit('SET_TOKEN', null);
      resolve();
    });
  },
};

const getters = {
  // eslint-disable-next-line no-shadow
  token: (state) => state.token,
  // eslint-disable-next-line no-shadow
  loading: (state) => state.loading,
};

const loginModule = {
  state,
  mutations,
  actions,
  getters,
};

export default loginModule;
