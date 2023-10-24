<template>
  <div class="mt-5 container">
    <h3 class="mb-5">Products</h3>
    <div class="row">
      <div v-for="product in products" class="col col-xl-3 mb-4">
        <ProductCard :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~/components/Product/ProductCard.vue'
import type { Product } from '~/store/Products/state'

definePageMeta({
  layout: "default",
})

const { data } =  useFetch("/api/products")

const products = data as unknown as Product[];

</script>

<style scoped></style>