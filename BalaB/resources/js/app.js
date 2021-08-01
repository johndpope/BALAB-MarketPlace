window.Vue = require("vue").default;
import VueRouter from "vue-router";

import test from "./pages/test.vue";

import Vue from "vue";

const routes = [{ path: "/", component: test }];
const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});
Vue.use(VueRouter);
const app = new Vue({
    el: "#app",
    router
});