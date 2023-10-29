<template>
  <div class="container pt-5 mx-auto">
    <div class="flex justify-center">
      <div class="w-1/2">
        <h4>ADD PRODUCT</h4>
        <VeeForm :validation-schema="schema" @submit="handleAddSubmit" class="mt-10">
          <div class="mb-6">
            <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <Field name="name"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="name" class="text-red-500 text-sm" />
          </div>
          <div class="mb-6">
            <label for="price" class="block text-gray-700 text-sm font-bold mb-2">Price</label>
            <Field name="price"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="price" class="text-red-500 text-sm" />
          </div>
          <div class="mb-6">
            <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
            <Field as="textarea" name="description"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="description" class="text-red-500 text-sm" />
          </div>
          <div class="mb-6">
            <label for="image" class="block text-gray-700 text-sm font-bold mb-2">Image</label>
            <Field name="image"
              class="w-full px-3 py-2 border rounded-md shadow-md focus:outline-none focus:ring focus:border-blue-300" />
            <ErrorMessage name="image" class="text-red-500 text-sm" />
          </div>
          <div class="mt-8">
            <button type="submit"
              class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full w-full disabled:opacity-50">
              Submit
            </button>
          </div>
        </VeeForm>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const router = useRouter();
import * as yup from 'yup';
import { Form as VeeForm } from 'vee-validate';
import store from '~/store'
definePageMeta({
  layout: "default",
})
const loadingSubmitBtn = ref(false);

const handleAddSubmit = async function (values: any) {
  if (values) {
    const state = await store.dispatch("ADD_PRODUCT", values);
    loadingSubmitBtn.value = true
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