<template>
  <div>
    <div class="container grid grid-cols-4 gap-6 pb-16 items-start">
      <!-- sidebar -->
      <div class="col-span-1 bg-white px-4 pb-6 shadow rounded overflow-hidden">
        <div class="divide-y divide-gray-200 spce-y-5">
          <!-- categorie filter -->
          <div>
            <h3 class="text-x1 text-gray-800 mb-3 uppercase font-medium">
              categories
            </h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Bedroom</label
                >
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Sofa</label
                >
                <div class="ml-auto text-gray-600 text-sm">(11)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Door</label
                >
                <div class="ml-auto text-gray-600 text-sm">(25)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Chair</label
                >
                <div class="ml-auto text-gray-600 text-sm">(150)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Office</label
                >
                <div class="ml-auto text-gray-600 text-sm">(5)</div>
              </div>
            </div>
          </div>
          <div class="pt-4 mt-8 mb-8">
            <h3 class="text-x1 text-gray-800 mb-3 uppercase font-medium">
              categories
            </h3>
            <div class="space-y-2">
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Bedroom</label
                >
                <div class="ml-auto text-gray-600 text-sm">(15)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Sofa</label
                >
                <div class="ml-auto text-gray-600 text-sm">(11)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Door</label
                >
                <div class="ml-auto text-gray-600 text-sm">(25)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Chair</label
                >
                <div class="ml-auto text-gray-600 text-sm">(150)</div>
              </div>
              <div class="flex items-center">
                <input
                  type="checkbox"
                  id="cat-1"
                  class="text-primary focus:ring-0 rounded-sm cursor-pointer"
                />
                <label for="cat-1" class="text-gray-600 ml-3 cursor-pointer"
                  >Office</label
                >
                <div class="ml-auto text-gray-600 text-sm">(5)</div>
              </div>
            </div>
          </div>
          <div class="pt-4 mt-8 mb-8">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Price
            </h3>
            <div class="mt-4 flex items-center">
              <input
                type="text"
                class="
                  w-full
                  border-gray-300
                  focus:border-primary
                  focus:ring-0
                  px-3
                  py-1
                  text-gray-600 text-sm
                  shadow-sm
                  rounded
                "
                placeholder="min"
              />
              <span class="mx-3 text-gray-500">-</span>
              <input
                type="text"
                class="
                  w-full
                  border-gray-300
                  focus:border-primary
                  focus:ring-0
                  px-3
                  py-1
                  text-gray-600 text-sm
                  shadow-sm
                  rounded
                "
                placeholder="max"
              />
            </div>
          </div>
          <!-- SIZE FILTER  -->
          <div class="pt-4">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Size
            </h3>
            <div class="flex items-center gap-2">
              <!-- Single size -->
              <div class="size-selector flex">
                <label
                  for="size-xs"
                  class="
                    text-xs
                    border border-gray-200
                    rounded-sm
                    h-6
                    mr-2
                    w-6
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    shadow-sm
                    text-gray-600
                  "
                >
                  xs
                </label>
                <label
                  for="size-xs"
                  class="
                    text-xs
                    border border-gray-200
                    rounded-sm
                    h-6
                    mr-2
                    w-6
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    shadow-sm
                    text-gray-600
                  "
                >
                  S
                </label>
                <label
                  for="size-xs"
                  class="
                    text-xs
                    border border-gray-200
                    rounded-sm
                    h-6
                    mr-2
                    w-6
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    shadow-sm
                    text-gray-600
                  "
                >
                  M
                </label>
                <label
                  for="size-xs"
                  class="
                    text-xs
                    border border-gray-200
                    rounded-sm
                    h-6
                    mr-2
                    w-6
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    shadow-sm
                    text-gray-600
                  "
                >
                  L
                </label>
                <label
                  for="size-xs"
                  class="
                    text-xs
                    border border-gray-200
                    rounded-sm
                    h-6
                    mr-2
                    w-6
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    shadow-sm
                    text-gray-600
                  "
                >
                  XL
                </label>
                <label
                  for="size-xs"
                  class="
                    text-xs
                    border border-gray-200
                    rounded-sm
                    h-6
                    mr-2
                    w-6
                    flex
                    items-center
                    justify-center
                    cursor-pointer
                    shadow-sm
                    text-gray-600
                  "
                >
                  XXL
                </label>
              </div>
            </div>
          </div>
          <!-- END SIZE FILTER -->
          <!-- COLOR FILTER -->
          <div class="pt-4 mt-8">
            <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">
              Color
            </h3>
            <div class="flex items-center gap-2">
              <!-- single color -->
              <div class="color-selector flex">
                <input
                  type="radio"
                  name="color"
                  class="hidden"
                  id="color red"
                />
                <label
                  for="color-red"
                  class="
                    border border-gray-200
                    rounded-sm
                    mr-2
                    h-5
                    w-5
                    cursor-pointer
                    shadow-sm
                    block
                  "
                  style="background-color: #fd3d57"
                ></label>
                <label
                  for="color-red"
                  class="
                    border border-gray-200
                    rounded-sm
                    h-5
                    mr-2
                    w-5
                    cursor-pointer
                    shadow-sm
                    block
                  "
                  style="background-color: #fff"
                ></label>
                <label
                  for="color-red"
                  class="
                    border border-gray-200
                    rounded-sm
                    mr-2
                    h-5
                    w-5
                    cursor-pointer
                    shadow-sm
                    block
                  "
                  style="background-color: #000"
                ></label>
              </div>
              <!-- end single color -->
            </div>
          </div>
          <!-- END COLOR FILTER -->
        </div>
      </div>
      <!-- endsidebar -->

      <!-- Product -->
      <div class="col-span-3">
        <div class="flex items-center mb-4">
          <!-- sorting -->
          <select
            class="
              w-44
              text-sm text-gray-600
              px-4
              py-3
              border-gray-300
              shadow-sm
              rounded
              focus:ring-primary
              focus:border-primary
            "
          >
            <option>Default sorting</option>
            <option>Price low-height</option>
            <option>Price hight-low</option>
            <option>Latest Product</option>
          </select>
          <div class="flex gap-2 ml-auto">
            <div
              class="
                border border-primary
                w-10
                h-9
                flex
                items-center
                justify-center
                text-white
                bg-primary
                rounded
                cursor-pointer
              "
            >
              <i class="fas fa-th"></i>
            </div>
            <div
              class="
                border border-gray-300
                w-10
                h-9
                flex
                items-center
                justify-center
                text-gray-600
                rounded
                cursor-pointer
              "
            >
              <i class="fas fa-list"></i>
            </div>
          </div>
        </div>

        <!-- END SORTING -->
        <!-- PRODUCT -->
        <div class="grid grid-cols-3 gap-6">
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product9.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product11.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product9.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product9.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product9.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(22)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product9.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product1.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product2.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
          <div class="bg-white shadow rounded overflow-hidden group">
            <div class="relative">
              <img src="../../assets/images/products/product3.jpg" class="w-full" />
              <div
                class="
                  absolute
                  inset-0
                  bg-black bg-opacity-40
                  flex
                  items-center
                  justify-center
                  gap-2
                  opacity-0
                  group-hover:opacity-100
                  transition
                "
              >
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-search"></i>
                </a>
                <a
                  href="#"
                  class="
                    text-white text-lg
                    w-9
                    h-8
                    rounded-full
                    bg-primary
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-800
                    transition
                  "
                >
                  <i class="fas fa-heart"></i>
                </a>
              </div>
            </div>
            <div class="pt-4 pb-3 px-4">
              <a href="">
                <h4
                  class="
                    uppercase
                    font-medium
                    text-xl
                    mb-2
                    text-gray-800
                    hover:text-primary
                    transition
                  "
                >
                  Guyer chair
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-xt-2 font-roboto">
                <p class="text-xl text-primary font-semibold">450.00 MAD</p>
                <p class="text-sm text-gray-400 ml-2 line-through">
                  550.00 MAD
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm text-yellow-400">
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                  <span><i class="fas fa-star"></i></span>
                </div>
                <div class="text-xs text-gray-500 ml-3">(24)</div>
              </div>
            </div>
            <a
              href="#"
              class="
                block
                w-full
                py-1
                text-center text-white
                bg-primary
                border-primary
                rounded-b
                hover:bg-transparent
                hover:border-solid
                border-2 border-primary
                hover:text-primary
                transition
              "
              >Add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PageSideBar",
};
</script>