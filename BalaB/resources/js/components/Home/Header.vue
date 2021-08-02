<template>
  <div>
    <header class="py-4 shadow-sm bg-white">
      <div class="container flex items-center justify-between">
        <!-- LOGO -->
        <a href="#">
          <h1
            style="font-size: 38px; align-items: center; display: flex"
            class="text-center font-bold"
          >
            BAL<span style="color: #fd3d57">AB</span>
          </h1>
        </a>
        <!-- SearchBar -->
        <div class="w-full max-w-xl relative flex">
          <span class="absolute left-4 top-3 text-lg text-gray-400">
            <i class="fas fa-search"></i>
          </span>
          <input
            type="text"
            class="
              w-full
              border border-primary border-r-0
              pl-12
              py-3
              pr-3
              rounded-1-md
              focus:outline-none
            "
            placeholder="search"
          />
          <button
            class="
              bg-primary
              border border-primary
              text-white
              px-8
              rounded-r-md
              hover:bg-transparent
              hover:text-primary
              transition
            "
          >
            Search
          </button>
        </div>
        <!-- ICONS -->
        <div class="flex items-center space-x-4">
          <a
            href="#"
            class="
              text-center text-gray-700
              hover:text-primary
              transition
              relative
            "
          >
            <div class="text-2x1">
              <i class="far fa-heart"></i>
            </div>
            <div class="text-xs leading-3">
              Wish List
              <span
                class="
                  absolute
                  right-0
                  -top-1
                  w-5
                  h-5
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-primary
                  text-white text-xs
                "
                >8</span
              >
            </div>
          </a>
          <a
            href="#"
            class="
              text-center text-gray-700
              hover:text-primary
              transition
              relative
            "
          >
            <div class="text-2x1">
              <i class="fas fa-shopping-bag"></i>
            </div>
            <div class="text-xs leading-3">
              Cart
              <span
                class="
                  absolute
                  -right-2.5
                  -top-1
                  w-5
                  h-5
                  rounded-full
                  flex
                  items-center
                  justify-center
                  bg-primary
                  text-white text-xs
                "
                >8</span
              >
            </div>
          </a>
          <a
            href="#"
            class="
              text-center text-gray-700
              hover:text-primary
              transition
              relative
              primary
            "
          >
            <div class="text-2x1">
              <i class="far fa-user"></i>
            </div>
            <div class="text-xs leading-3">Account</div>
          </a>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "HeaderPage",
};
</script>
<style>
@import url("./style.css");
</style>