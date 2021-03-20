import Vue from 'vue';
import Vuex from 'vuex';
import cartModule from '@/store/modules/cart';
import productModule from '@/store/modules/product';
import loginModule from '@/store/modules/login';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cartModule,
    productModule,
    loginModule,
  },
});
