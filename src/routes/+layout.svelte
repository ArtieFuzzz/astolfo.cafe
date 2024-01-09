<script>
	import '#styles/main.scss';

	import NavBar from '#components/NavBar.svelte';
</script>

<div class="max-h-screen flex flex-col justify-center" id="main">
	<NavBar />
	<slot />
</div>

<style>
	#main {
		align-items: flex-start;
	}
</style>
