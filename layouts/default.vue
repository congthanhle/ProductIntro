<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/products">Products</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="nav-link" to="/products/add">Add Product</nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
  <slot />
</template>