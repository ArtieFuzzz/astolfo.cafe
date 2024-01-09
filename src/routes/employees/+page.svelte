<script lang="ts">
  import EmployeeCard from '#components/EmployeeCard.svelte';

  interface Employee {
    name: string;
    profilePicture: string;
    title: string;
  }

  const employees: Employee[] = [
    { name: 'artsy.', profilePicture: '/profile/artsy.png', title: 'Owner & Developer' }
  ];
</script>

<div class="flex flex-col justify-start items-start w-screen max-w-full py-24 px-12 gap-20">
  <div class="flex flex-col">
    <h1 class="font-heading text-5xl">Astolfo’s Café</h1>
    <p class="font-body text-2xl">
      Our wonderful <span class="font-bold">Baristas</span> and
      <span class="font-bold">Employees</span>!
    </p>
  </div>

  <ul>
    {#each employees as employee}
      <ol>
        <EmployeeCard
          name={employee.name}
          profilePicture={employee.profilePicture}
          title={employee.title}
        />
      </ol>
    {/each}
  </ul>
</div>

<style lang="scss">
  :where(ul) {
    @apply flex max-w-full justify-center items-center gap-8 self-stretch flex-wrap content-center;
  }
</style>
