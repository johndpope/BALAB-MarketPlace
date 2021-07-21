require("./bootstrap");

window.Vue = require("vue").default;
import Heading from './components/Heading.vue';
const app = new Vue({
    el: "#app",
    components:{
        Heading
    }
});
