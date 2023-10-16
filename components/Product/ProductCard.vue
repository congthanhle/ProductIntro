<template>
  <div class="card text-center" style="width: 18rem;">
    <div style="width: 100%; height: 60%;">
      <img :src="product.images[0]" class="card-img-top img-thumbnail" :alt="product.title">
    </div>
    <div class="card-body" style="width: 100%; height: 40%;">
      <h5 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ product.title }}</h5>
      <nuxt-link class="btn btn-outline-info mt-2" :to="`/products/${product.id}`">View Details</nuxt-link>
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