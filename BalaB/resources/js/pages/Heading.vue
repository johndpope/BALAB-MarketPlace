<template>
  <div>
<Navigation />
<Header />
<Categories /> 
 </div>
</template>
<script>
import Navigation from "../components/Navigation.vue";
import Header from '../components/Hero.vue';
import Categories from '../components/Categories.vue';
export default {
  components: {
    Navigation,
    Header,
    Categories 
  },
};
</script>
<style>
@import url("../components/scss/Main.css");
</style>