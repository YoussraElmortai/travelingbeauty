<script>
  export let data;
  console.log(data);
  import Hero from "$lib/components/hero.svelte";
  import Treatments from "$lib/components/treatments.svelte";
</script>

<Hero />


<section class="wrapper">
  <Treatments />
</section>
