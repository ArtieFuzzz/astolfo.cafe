<script lang="ts">
  export let name: string;
  export let profilePicture: string;
  export let title: string;
</script>

<div class="employee-card">
  <div class="flex justify-between items-center employee-meta">
    <h2 class="font-heading text-3xl">{name}</h2>
    <img src={profilePicture} alt="artsy" width="96" height="96" />
  </div>

  <div class="separator" />
  <p class="font-heading text-2xl">{title}</p>
</div>

<style lang="scss">
  :where(.employee-card) {
    @apply flex flex-col justify-between items-center border-2 border-accent pb-3;
    width: 20rem;
    height: 16rem;

    .employee-meta {
      display: flex;
      width: 21.875rem;

      @apply px-10 py-5;
    }

    img {
      @apply rounded-full border-2 border-accent;
    }

    .separator {
      width: 3.125rem;
      height: 0.625rem;
      background-color: #ffffff;
    }
  }
</style>
