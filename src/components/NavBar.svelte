<script lang="ts">
  import { page } from '$app/stores';
</script>

<header class="max-w-full">
  <nav class="flex flex-row justify-between max-w-full w-screen p-6 h-[5vh] m-0">
    <p class="text-2xl">astolfo.café <span class="text-base">&copy;</span></p>

    {#if $page.url.pathname === '/'}
      <div class="flex flex-row gap-5">
        <a href="mailto:hey@astolfo.cafe">Contact</a>
        <a href="#menu">Menu</a>
        <a href="/employees">Employees</a>
        <a href="/data-policy">Privacy Policy</a>
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
