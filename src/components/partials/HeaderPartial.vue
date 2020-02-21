<template>
	<b-navbar class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<b-container>
			<b-link class="navbar-brand" to="/">Blog</b-link>
			<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

			<!-- <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button> -->

			<b-collapse id="nav-collapse" is-nav>
				<b-navbar-nav class="ml-auto">
					<b-nav-item>
						<b-link to="/" class="nav-link">Home
							<span class="sr-only">(current)</span>
						</b-link>
					</b-nav-item>

					<b-nav-item>
						<b-link to="/about" class="nav-link">About</b-link>
					</b-nav-item>
					<!-- <b-nav-item>
						<b-link to="#">Services<b-link>
					</b-nav-item> -->
					<!-- <b-nav-item>
						<b-link to="#">Contact<b-link>
					</b-nav-item> -->
				</b-navbar-nav>
			</b-collapse>
		</b-container>
	</b-navbar>
</template>

<script>
	export default {
		name: 'HeaderPartial'
	}
</script>