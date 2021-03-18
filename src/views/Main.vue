<template>
  <div id="main">
    <div class="container">
      <div class="columns">
        <div class="column is-3">
          <CartList />
        </div>
        <div class="column is-9">
          <ProductList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartList from '@/components/cart/CartList.vue';
import ProductList from '@/components/product/ProductList.vue';

export default {
  name: 'Main',
  components: {
    CartList,
    ProductList,
  },
};
</script>

<style scoped>
html,
body {
  background-color: #f2f6fa;
}

#main {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 769px) {
  html,
  body {
    height: 100%;
  }
}
</style>
