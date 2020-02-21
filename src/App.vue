<template>
	<div id="app">
		<HeaderPartial />
		<router-view/>
		<FooterPartial />
	</div>
</template>

<script>
// @ is an alias to /src
import HeaderPartial from '@/components/partials/HeaderPartial.vue'
import FooterPartial from '@/components/partials/FooterPartial.vue'

export default {
	name: 'App',
	components: {
		HeaderPartial,
		FooterPartial
	}
}
</script>