<script>
	import '#styles/main.scss';

  import Navigation from '#components/Navigation.svelte';
</script>

<div class="max-h-screen overflow-hidden">
  <Navigation />
	<slot />
</div>
