<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { slide } from 'svelte/transition';
</script>

<div class="w-screen flex flex-row justify-center items-center" transition:slide>
  <div class='w-screen h-screen flex justify-start max-md:hidden lg:visible'>
    <img
    loading="lazy"
    src="astolfo.webp"
    alt="Astolfo"
    class="lg:fixed"
    width="620"
    height="1080"
    draggable="false"
  />
  </div>

  <div class="max-md:h-screen flex flex-col justify-center items-center md:mr-20">
    <div class="flex flex-row place-items-baseline">
      <h1 class="text-5xl sm:text-7xl md:text-9xl m-2 mb-0">Astolfo.Cafe</h1>
      <a href="https://dev.astolfo.cafe" class="text-md bold">artsy.</a>
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
