<template>
  <div class="container mt-5">
    <h3 class="mb-5">Products</h3>
    <div class="row d-flex justify-content-between">
      <div v-for="product in products" class="col-md-auto mb-4 ">
        <Item :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Item from '~/components/Product/ProductCard.vue'
import store from '~/store/index'
import URL from '~/api'
definePageMeta({
  layout: "default",
})
const {data: products} = await useFetch(URL, {})
store.dispatch("fetchProducts", products);
</script>

<style scoped>

</style>