<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submit">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" v-model="product.name">
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">Price</label>
            <input type="number" class="form-control" id="price" min="0" v-model="product.price">
          </div>
          <div class="mb-3">
            <label for="description" class="form-label">Description</label>
            <textarea class="form-control" id="description" rows="3" v-model="product.description"></textarea>
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">Image</label>
            <input type="text" id="image" class="form-control" placeholder="Enter image URL" v-model="product.image">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import store from '~/store'
definePageMeta({
  layout: "default",
})
const { id } = useRoute().params;
const product = ref({
  name: "",
  description: "",
  price: "",
  image: ""
})

const submit = async () => {
  await store.dispatch("ADD_PRODUCT", product.value);
}  
</script>

<style scoped></style>