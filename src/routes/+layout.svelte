<script>
  import OnMount from '../components/OnMount.svelte';
  import '../app.scss';
</script>

<div class="prose prose-zinc">
  <OnMount>
    <slot />
  </OnMount>
</div>
