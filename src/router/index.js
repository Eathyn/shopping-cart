import Vue from 'vue';
import VueRouter from 'vue-router';
import CartList from '@/components/cart/CartList.vue';
import ProductList from '@/components/product/ProductList.vue';
import ProductItem from '@/components/product/ProductItem.vue';
import NotFound from '@/components/NotFound.vue';
import LoginBox from '@/components/login/LoginBox.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/products',
    component: ProductList,
  },
  {
    path: '/products/:id',
    component: ProductItem,
    props: true,
    beforeEnter: (to, from, next) => {
      const { id } = to.params;
      if (![1, 2, 3, 4].includes(Number(id))) {
        next('/not-found');
      } else {
        next();
      }
    },
  },
  {
    path: '/cart',
    component: CartList,
  },
  {
    path: '/',
    redirect: '/products',
  },
  {
    path: '/login',
    component: LoginBox,
    beforeEnter: (to, from, next) => {
      const token = localStorage.getItem('token');
      if (token) {
        next('/products');
      } else {
        next();
      }
    },
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (!token && to.path !== '/login') {
    next('/login');
  } else {
    next();
  }
});

export default router;
