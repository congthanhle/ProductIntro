<template>
  <div class="card text-center" style="width: 18rem; ">
    <div style="width: 80%; height: 20rem;" class="d-flex align-items-center mx-auto mt-3 ">
      <img :src="product?.image" class="card-img-top img-fluid media" style="max-height: 20rem; " :alt="product?.name">
    </div>
    <div class="card-body" style="width: 100%; height: 40%;">
      <h5 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ product?.name }}</h5>
      <nuxt-link class="btn btn-outline-info mt-2" :to="`/products/${product?.id}`">View Details</nuxt-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/store/Products/state'
defineProps<{
  product: Product,
}>()

</script>

<style scoped></style>