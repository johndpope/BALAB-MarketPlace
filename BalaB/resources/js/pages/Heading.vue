<template>
  <div>
<Navigation />
<Header />
 </div>
</template>
<script>
import Navigation from "../components/Navigation.vue";
import Header from '../components/Hero.vue';
export default {
  components: {
    Navigation,
    Header
  },
};
</script>
<style>
@import url("../components/scss/Main.css");
</style>