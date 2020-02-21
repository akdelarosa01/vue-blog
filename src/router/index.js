import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import PostContent from '../views/PostContent.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home
	},
	{
		path: '/about',
		name: 'About',
		component: About
	},
	{
		path: '/post-content/:id',
		name: 'PostContent',
		component: PostContent
	}
]

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router
