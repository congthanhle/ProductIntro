<template>
  <div class="container pt-5 mx-auto">
    <div class="flex justify-center">
      <div class="w-1/2">
        <h4>EDIT PRODUCT</h4>
        <VeeForm :validation-schema="schema" @submit="handleAddSubmit" class="mt-10">
          <div class="mb-6">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <Field name="name" :value="product?.name"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="name" class="text-red-500 text-sm" />
          </div>
          <div class="mb-6">
            <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <Field name="price" :value="product?.price"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="price" class="text-red-500 text-sm" />
          </div>
          <div class="mb-6">
            <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <Field as="textarea" name="description" :value="product?.description"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="description" class="text-red-500 text-sm" />
          </div>
          <div class="mb-6">
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image</label>
            <Field name="image" :value="product?.image"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="image" class="text-red-500 text-sm" />
          </div>
          <div class="mt-8 flex space-x-4">
            <button type="submit"
              class="flex-1 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50">
              Submit
            </button>
            <nuxt-link to="/products"
              class=" no-underline text-center flex-1 bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded-full disabled:opacity-50">
              Cancel
            </nuxt-link>
          </div>

        </VeeForm>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import * as yup from 'yup';
import { Form as VeeForm } from 'vee-validate';
import { Product } from '~/store/Products/state';
import store from '~/store'
definePageMeta({
  layout: "default",
})
const loadingSubmitBtn = ref(false);
const { id } = useRoute().params;
const { data } = await useFetch(`/api/products/${id}`);
const product = data as unknown as Product;
const router = useRouter();

const handleAddSubmit = async function (values: any) {
  if (values) {
    const state = await store.dispatch("EDIT_PRODUCT", { id, ...values });
    loadingSubmitBtn.value = true;
    if (state) {
      router.push({ path: "/" })
    }
    else {
      setTimeout(() => { loadingSubmitBtn.value = false }, 1000)
    }
  }
}
const schema = yup.object({
  name: yup.string().required('Name is required'),
  description: yup.string().required('Description is required'),
  price: yup.number().required('Price is required').min(0, "Price is more than 0"),
  image: yup.string().required('Image is required'),
});
</script>

<style scoped></style>
