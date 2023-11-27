<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { slide } from 'svelte/transition';
</script>

<div class="w-screen h-screen flex flex-row justify-center items-center" transition:slide>
  <img
    loading="lazy"
    src="astolfo.webp"
    alt="Astolfo"
    class="max-sm:hidden lg:visible"
    width="620"
    height="1080"
    draggable="false"
  />
  <div class="flex flex-col justify-center items-center md:mr-20">
    <div class="flex flex-row items-baseline">
      <h1 class="text-5xl sm:text-7xl md:text-9xl m-2">Astolfo.Cafe</h1>
      <a href="https://dev.astolfo.cafe" class="text-md bold pr-2">| artsy.</a>
    </div>
    <div class="flex flex-row justify-start gap-4">
      <a href="/privacy" class="text-2xl">Privacy Policy</a>
      <a href="https://status.astolfo.cafe" class="text-2xl">Services</a>
    </div>
  </div>
</div>

<style type="scss">
  h1,
  a {
    color: white;
  }

  a {
    text-decoration: none;
    transition: 0.5s cubic-bezier(0.215, 0.610, 0.355, 1);
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 2px no-repeat;

    &:hover {
      --d: 100%;
    }
  }

  img {
    padding: 0;
  }
</style>
