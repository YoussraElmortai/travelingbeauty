<script>
  import Treatment from "$lib/components/treatment.svelte";
  import Banner from "$lib/components/banner.svelte";
</script>

<Banner />

<article class="intro">
  <h1>Treatments</h1>
  <p>
    Relax and rejuvenate with our assortiments of different massages
    and treatments
  </p>
</article>
<div class="override">
  <section class="wrapper">
    <Treatment />
  </section>
</div>

<style>
  .wrapper {
    @media (min-width: 425px) {
      flex-flow: row wrap;
      justify-content: space-around;
    }
  }

  .override :global(.treatment) {
    animation: none;
  }
</style>
