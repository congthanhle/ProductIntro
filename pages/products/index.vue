<template>
  <div class="mt-5 container">
    <h3 class="mb-5">Products</h3>
    <div class="row">
      <div v-for="product in products" class="col col-xl-3 mb-4">
        <ProductCard @handleItemDelete="handleDeleteItem" :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCard from '~/components/Product/ProductCard.vue'
import type {Product} from '~/store/Products/state'
import store from '~/store'
definePageMeta({
  layout: "default",
})

const { data: products } = await useFetch('/api/products');
const productsData = ref(products);

const handleDeleteItem = (productId: string) => {
  if (productsData.value) {  
    productsData.value = productsData.value.filter((item: any) => item.id !== productId)  
    store.dispatch('DELETE_PRODUCT', productId)
  }  
  console.log(productsData.value)
  // console.log(productId)
}

</script>

<style scoped></style>