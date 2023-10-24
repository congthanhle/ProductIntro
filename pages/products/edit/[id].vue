<template>
  <div class="container pt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <form @submit.prevent="submitEditForm">
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
          <div class="row d-flex justify-content-around">
            <button type="submit" class="btn btn-primary col-4">Submit</button>
            <nuxt-link class="btn btn-danger col-4" to="/products">Cancel</nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

  
<script setup lang="ts">
import store from '~/store'
import { Product } from '~/store/Products/state';

definePageMeta({
  layout: "default",
})
const { id } = useRoute().params;
const { data } = useAsyncData('product', () => $fetch(`/api/products/${id}`));
const productData = data as unknown as Product;
const router = useRouter();

const product = ref({
  name: "",
  description: "",
  price: 0,
  image: "",
});


watch(productData, (newValue, oldValue) => {
  if (newValue) {
    product.value.name = newValue.name || '';
    product.value.description = newValue.description || '';
    product.value.price = newValue.price || 0;
    product.value.image = newValue.image || '';
  }
}, { immediate: true });

const submitEditForm = async () => {
  const update = await store.dispatch("EDIT_PRODUCT", {id, ...product.value});
  if (update) {
    router.push({ path: "/products" })
  } 
}    
</script>  


<style scoped></style>