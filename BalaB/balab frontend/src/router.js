import { createWebHistory, createRouter } from 'vue-router';
import Home from './views/Home.vue'; 
import shop from './views/Shop/Shop.vue'; 
import view from './views/Shop/View.vue'; 

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/shop',
		name: 'shop',
		component: shop,
	},
	{
		path: '/view',
		name: 'view',
		component: view,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;