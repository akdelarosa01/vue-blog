<template>
	<!-- Blog Entries Column -->
	<b-col col lg="8" mg="8" sm="12" xs="12">

		<h1 class="my-4">Page Heading
			<small>Secondary Text</small>
		</h1>

		<!-- Blog Post -->
		<b-card class="card mb-4" v-for="post in posts" :key="post.id">
			<img class="card-img-top" :src="post.img" alt="Card image cap">
			<div class="card-body">
				<h2 class="card-title">{{ post.title }}</h2>
				<p class="card-text">{{ post.text }}</p>
				<b-link class="btn btn-primary" :to="{ path: '/post-content/'+post.id}">Read More &rarr;</b-link>
			</div>
			<div class="card-footer text-muted">
				Posted on January 1, 2017 by
				<a href="#">Start Bootstrap</a>
			</div>
		</b-card>

		<!-- Pagination -->
		<ul class="pagination justify-content-center mb-4">
			<li class="page-item">
				<b-link class="page-link" to="/">&larr; Older</b-link>
			</li>
			<li class="page-item disabled">
				<b-link class="page-link" to="/">Newer &rarr;</b-link>
			</li>
		</ul>

	</b-col>
</template>

<script>
	// import postsdata from '@/assets/data.json';
	export default {
		name: 'Posts',
		data() {
			return {
				posts: [
					{
						id: 1,
						img: 'http://placehold.it/750x300',
						title: 'Post Title 1',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!'
					},
					{
						id: 2,
						img: 'http://placehold.it/750x300',
						title: 'Post Title 2',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!'
					},
					{
						id: 3,
						img: 'http://placehold.it/750x300',
						title: 'Post Title 3',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!'
					},
					{
						id: 4,
						img: 'http://placehold.it/750x300',
						title: 'Post Title 4',
						text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!'
					}
				]
			}
		}
	}
</script>