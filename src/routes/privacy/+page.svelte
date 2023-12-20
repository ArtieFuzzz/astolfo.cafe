<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { slide } from 'svelte/transition';
</script>

<div class="w-[90vw] md:w-[60vw] flex flex-col justify-center items-center h-screen" out:slide>
  <div class="m-10 md:m-20">
    <a href="#" on:click={() => history.back()} class="pb-10">Go Back</a>
    <h1 class="text-white">Privacy Policy</h1>

    <div>
      <p>
        This website uses Cloudflare, visit their <a
          href="https://www.cloudflare.com/privacypolicy/">Privacy Policy</a
        >
      </p>

      <p>
        This website does not store any data but this site uses Plausible Analytics for Analytical
        purposes, using a self-hosted instance @ analytics.astolfo.cafe. We do not track you in any way
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
    @apply text-lg md:text-2xl;
  }
</style>
