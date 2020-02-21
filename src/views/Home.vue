<template>
	<b-container>

		<b-row>

			<Posts />

			<SidebarPartial />

		</b-row>
		<!-- /.row -->

	</b-container>
</template>

<script>
import SidebarPartial from '@/components/partials/SidebarPartial.vue';
import Posts from '@/components/Posts.vue';
export default {
	name: 'Home',
	components: {
		SidebarPartial,
		Posts
	}
}
</script>
