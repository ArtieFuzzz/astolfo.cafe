<script lang="ts">
  import { page } from '$app/stores';

  const status = $page.status;
  let message: string | null;

  switch (status) {
    case 404:
      message = 'Page not found';
      break;
    case 500:
      message = 'Internal Server Error';
      break;
    default:
      message = 'Unknown Error...';
      break;
  }
</script>

<div class="flex flex-col justify-start items-start w-screen h-screen py-24 px-12">
  <h1 class="font-heading text-5xl">Oops, something's wrong...</h1>
  {#if message}
    <p class="font-body text-2xl">{message}</p>
  {/if}
</div>
