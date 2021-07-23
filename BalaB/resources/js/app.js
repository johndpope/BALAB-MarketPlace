require("./bootstrap");

window.Vue = require("vue").default;
import VueRouter from "vue-router";

import Heading from "./pages/Heading.vue";
import Register from "./pages/Register.vue";
import Login from "./pages/Login.vue";
import Vue from "vue";

const routes = [
    { path: "/", component: Heading },
    { path: "/register", component: Register },
    { path: "balab/login", component: Login }
];
const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
});

Vue.use(VueRouter);
const app = new Vue({
    el: "#app",
    router
});
