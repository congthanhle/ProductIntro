export default defineNuxtRouteMiddleware((to, from) => {
  return navigateTo("/products/add");
});
