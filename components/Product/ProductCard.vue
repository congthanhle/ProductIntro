<template>  
  <div class="card text-center">  
    <div class="d-flex align-items-center mx-auto mt-3 img-container">  
      <img :src="product?.image" class="card-img-top img-fluid media"  :alt="product?.name">  
    </div>  
    <div class="card-body">  
      <h5 class="card-title" style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">{{ product?.name }}</h5>  
      <div class="btn-group mt-2" role="group" aria-label="Basic mixed styles example">  
        <nuxt-link class="btn btn-outline-success me-2" :to="`/products/edit/${product?.id}`">Edit</nuxt-link>  
        <nuxt-link class="btn btn-outline-info me-2" :to="`/products/${product?.id}`">View Details</nuxt-link>  
        <button type="button" class="btn btn-outline-danger" @click="handleDeleteProduct">Del</button>  
      </div>  
    </div>  
  </div>  
</template>  


<script setup lang="ts">
import type { Product } from '~/store/Products/state'
import store from '~/store';
const props = defineProps<{
  product: Product,
}>()

const handleDeleteProduct = async () => {
    await store.dispatch("DELETE_PRODUCT", props.product.id)

}

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
