<template>
  <div>
    <nav class="bg-gray-800">
      <div class="container flex">
        <div
          class="
            px-8
            py-4
            bg-primary
            flex
            items-center
            cursor-pointer
            relative
            group
          "
        >
          <span class="text-white">
            <i class="fas fa-bars"></i>
          </span>
          <span class="capitalize ml-2 text-white">All categories</span>
          <div
            class="
              absolute
              w-full
              left-0
              top-full
              bg-white
              shadow-md
              py-3
              divide-y divide-gray-300 divide-dashed
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              invisible
              group-hover:visible
            "
          >
            <a
              href="#"
              class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src="images/icons/bed.svg" class="w-5 h-5 object-contain" />
              <span class="ml-6 gray-600 text-sm">karim</span>
            </a>
            <a
              href="#"
              class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img src="images/icons/sofa.svg" class="w-5 h-5 object-contain" />
              <span class="ml-6 gray-600 text-sm">karim</span>
            </a>
            <a
              href="#"
              class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="images/icons/office.svg"
                class="w-5 h-5 object-contain"
              />
              <span class="ml-6 gray-600 text-sm">karim</span>
            </a>
            <a
              href="#"
              class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="images/icons/outdoor-cafe.svg"
                class="w-5 h-5 object-contain"
              />
              <span class="ml-6 gray-600 text-sm">karim</span>
            </a>
            <a
              href="#"
              class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="images/icons/terrace.svg"
                class="w-5 h-5 object-contain"
              />
              <span class="ml-6 gray-600 text-sm">karim</span>
            </a>
            <a
              href="#"
              class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="images/icons/phone.svg"
                class="w-5 h-5 object-contain"
              />
              <span class="ml-6 gray-600 text-sm">karim</span>
            </a>
            <a
              href="#"
              class="flex items-center px-6 py-3 hover:bg-gray-100 transition"
            >
              <img
                src="images/icons/bed-2.svg"
                class="w-5 h-5 object-contain"
              />
              <span class="ml-6 gray-600 text-sm">karim</span>
            </a>
          </div>
        </div>
        <div class="flex items-center justify-between flex-grow pl-12">
          <div class="flex items-center space-x-6 capitalize">
            <a href="#" class="text-gray-200 hover:text-white transition"
              >Home</a
            >
            <a href="#" class="text-gray-200 hover:text-white transition"
              >Shop</a
            >
            <a href="#" class="text-gray-200 hover:text-white transition"
              >About Us</a
            >
            <a href="#" class="text-gray-200 hover:text-white transition"
              >Contact Us</a
            >
          </div>
          <button
            class="
              bg-white
              text-primary
              uppercase
              font-bold
              px-6
              h-10
              flex
              items-center
              hover:bg-primary
              hover:text-white
              rounded
            "
            style="margin-right: -26em"
          >
            Login
          </button>
          <button
            class="
              bg-primary
              text-white
              uppercase
              font-bold
              px-4
              h-10
              flex
              items-center
              hover:bg-white
              hover:text-primary
              rounded
            "
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    name:"PageNavbar"
};
</script>
