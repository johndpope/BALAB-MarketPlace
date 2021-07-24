<template>
  <div>
    <h1>This is Home Page</h1>
    <router-link to="/login">go to login</router-link>
    <br>
    <router-link to="/register">go to register</router-link>
    <funbuttons />
  </div>
</template>
<script>
import funbuttons from "../components/Buttons.vue";
export default {
  components: {
    funbuttons,
  },
};
</script>
<style>
@import url("../../css/auth.css");
</style>