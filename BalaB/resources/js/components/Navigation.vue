<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 fixed-top">
      <div class="container">
        <img :src="image" alt="logo of balab" />
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span><i id="bar" class="fas fa-bars"></i></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Shop</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact Us</a>
            </li>
            <li class="nav-item">
              <i class="far fa-search" style="margin: 0 10px 0"></i>
              <i class="fas fa-shopping-bag"></i>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import image from "./assets/img/logo1.png"
export default {
  name: "Navigation",
      data: function () {
        return {
            image: image
        }
    }
};

</script>
<style>
@import url("scss/Navigation.css");
</style>