<script>
  import { fade, slide } from 'svelte/transition';
</script>

<div class="w-[60vw] flex flex-col justify-center items-center h-screen" transition:slide>
  <div class="m-20">
    <a href="#" on:click={() => history.back()} class="pb-10">Go Back</a>
    <h1 class="text-white">Privacy Policy</h1>

    <div transition:fade>
      <p>
        This website uses Cloudflare, visit their <a
          href="https://www.cloudflare.com/privacypolicy/">Privacy Policy</a
        >
      </p>

      <p>
        This website does not store any data but this site uses Plausible Analytics for Analytical
        purposes, using a self-hosted instance @ analytics.uvvu.pw. We do not track you in any way
        nor do we sell your Information to Third-Parties.
      </p>

      <a
        href="https://plausible.io/data-policy#first-thing-first-what-we-collect-and-what-we-use-it-for"
        >- Plausible Analytics Data Collection Policy</a
      >
    </div>
  </div>
</div>

<style type="scss">
  p,
  a {
    color: white;
    @apply text-2xl;
  }
</style>
