<script>
	import '#styles/main.scss';

	import Navigation from '#components/Navigation.svelte';
</script>

<div class="max-h-screen flex flex-col justify-center" id="main">
	<Navigation />
	<slot />
</div>

<style>
	#main {
		align-items: flex-start;
	}
</style>
