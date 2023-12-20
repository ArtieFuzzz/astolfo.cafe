<!-- SPDX-License-Identifier: MPL-2.0 -->
<script>
  import { quadInOut } from 'svelte/easing';
  import { fade, slide } from 'svelte/transition';
</script>

<div class="w-screen max-w-7xl flex flex-col justify-center items-center m-0 p-0" out:slide>
  <div class='flex flex-row w-screen h-screen'>
      <img
        loading="lazy"
        src="astolfo.webp"
        alt="Astolfo"
        class='lg:fixed relative ml-20'
        width="620"
        height="1080"
        draggable="false"
        out:fade={{ duration: 100, easing: quadInOut }}
      />
      <div class="flex flex-col justify-center items-end m-10 w-screen">
        <div class="flex flex-row place-items-baseline">
          <h1 class="text-5xl sm:text-7xl md:text-9xl m-2 mb-0">Astolfo.Cafe</h1>
          <a href="https://dev.astolfo.cafe" class="text-md bold">artsy.</a>
        </div>
        <div class="flex flex-row justify-end items-end gap-4">
          <a href="/privacy" class="text-2xl">Privacy Policy</a>
          <a href="https://status.astolfo.cafe" class="text-2xl">Services</a>
        </div>
      </div>
  </div>
  <!-- <div class="h-1/2 w-screen flex flex-row justify-center">
    <p>Hello, World!</p>
  </div> -->
</div>

<style type="scss">
  h1,
  a {
    color: white;
  }

  a {
    text-decoration: none;
    transition: 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
    background: linear-gradient(currentColor 0 0) 0 100% / var(--d, 0) 2px no-repeat;

    &:hover {
      --d: 100%;
    }
  }

  img {
    padding: 0;
  }
</style>
