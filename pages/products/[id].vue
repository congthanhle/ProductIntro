<template>
  <div class="container">
    <div class="row mt-5 text-align-center">
      <div class="col-lg-5 col-md-5 col-sm-6">
        <div class="white-box text-center"><img :src="product.images[0]" :alt="product.title" style="width: 70%;"></div>
      </div>
      <div class="col-lg-7 col-md-7 col-sm-6">
        <h4 class="box-title mt-5">{{product.title}}</h4>
        <p>{{ product.description }}</p>
        <h2 class="mt-5">
          ${{ product.price }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import URL from '~/api'
const {id} = useRoute().params;
const {data: product} = await useAsyncData(()=>$fetch(`${URL}/${id}`));
</script>

<style scoped></style>