<template>
  <div v-if="product" class="container">
    <div class="row mt-5 text-align-center ">
      <div class="col-lg-5 col-md-5 col-sm-6">
        <div class="white-box text-center"><img :src="product?.image" :alt="product?.name" class="img"></div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-6">
        <h4 class="box-title mt-5">{{ product?.name }}</h4>
        <p>{{ product?.description }}</p>
        <div class="row">
          <h2 class="mt-5 col col-lg-5">
            ${{ product?.price }}
          </h2>
          <div class="mt-5 col col-lg-5  mx-auto d-flex align-items-center justify-content-around">
            <nuxt-link to="/products">Back to products</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Product } from '~/store/Products/state'

const { id } = useRoute().params;

const { data } = useAsyncData('product', () => $fetch(`/api/products/${id}`));
const product = data as unknown as Product

</script>

<style scoped>
.img {
  width: 70%;
}
</style>