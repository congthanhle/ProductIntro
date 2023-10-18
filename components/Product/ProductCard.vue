<template>
  <div class="card text-center" >
    <div class="d-flex align-items-center mx-auto mt-3 img-container">
      <img :src="product?.image" class="card-img-top img-fluid media"  :alt="product?.name">
    </div>
    <div class="card-body">
      <h5 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ product?.name }}
      </h5>
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

<style scoped>
.card{
  width: 18rem;
}
.img-container {
  width: 80%;
  height: 20rem;
}
.card-img-top{
  max-height: 20rem;
}
.card-body {
  width: 100%;
  height: 40%;
}
</style>
