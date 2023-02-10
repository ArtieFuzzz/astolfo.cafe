<script>
import { slide, fade } from "svelte/transition";
</script>

<div class="w-screen h-screen flex flex-row justify-center items-center" transition:slide>
  <img src="astolfo.webp" alt="Astolfo Best Boy" width=620 height=1080 draggable=false >
  <div class="flex flex-col justify-center items-center mr-12" transition:slide>
    <h1 class="text-5xl sm:text-7xl md:text-9xl m-2">Astolfo.Cafe</h1>
    <a href="/privacy" class="text-2xl">Privacy Policy</a>
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
