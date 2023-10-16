<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/products">Products</nuxt-link>
          </li>        
        </ul>
      </div>
    </div>
  </nav>
  <slot/>
</template>