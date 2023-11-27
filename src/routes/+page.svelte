<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { slide } from 'svelte/transition';
</script>

<div class="w-screen h-screen flex flex-row justify-center items-center" transition:slide>
  <img
    loading="lazy"
    src="astolfo.webp"
    alt="Astolfo Best Boy"
    class="max-sm:hidden lg:visible"
    width="620"
    height="1080"
    draggable="false"
  />
  <div class="flex flex-col justify-center items-center md:mr-20">
    <h1 class="text-5xl sm:text-7xl md:text-9xl m-2">Astolfo.Cafe</h1>
    <div class="flex flex-row justify-start">
      <a href="/privacy" class="text-2xl pr-3">Privacy Policy</a>
      <a href="https://dev.astolfo.cafe" class="text-2xl pr-2">Dev</a>
      <a href="https://status.astolfo.cafe" class="text-2xl">Service Status</a>
    </div>
  </div>
</div>

<style type="scss">
  h1,
  a {
    color: white;
  }

  img {
    padding: 0;
  }
</style>
