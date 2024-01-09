<script>
	import { page } from '$app/stores';

	const home = $page.url.href === '/';
</script>

<header>
	<nav class="flex flex-row justify-between w-screen p-6">
		<p class="text-2xl">astolfo.café <span class="text-base">&copy;</span></p>

		{#if home}
			<div class="flex flex-row gap-5">
				<a href="mailto:hey@astolfo.cafe">Contact</a>
				<a href="#menu">Menu</a>
				<a href="#employees">Employees</a>
				<a href="#data-policy">Privacy Policy</a>
			</div>
		{:else}
			<a href="/">Home</a>
		{/if}
	</nav>
</header>

<style lang="scss">
	a {
		@apply text-text text-xl font-heading;
	}
</style>
