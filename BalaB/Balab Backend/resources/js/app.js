window.Vue = require("vue").default;
import VueRouter from "vue-router";
import '../css/style.css';
import Home from "./pages/Home.vue";

import Vue from "vue";

const routes = [{ path: "/", component: Home }];
const router = new VueRouter({
    mode: "history",
    routes // short for `routes: routes`
});
Vue.use(VueRouter);
const app = new Vue({
    el: "#app",
    router
});
