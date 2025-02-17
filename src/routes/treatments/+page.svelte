<script>
  import Treatment from "$lib/components/treatment.svelte";
</script>

<div class="banner">
  <img
    src="https://i.pinimg.com/736x/9a/4e/42/9a4e4228a1b5f6aa43275dd45f3f2979.jpg"
  />
</div>

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
    }
  }

  .override :global(.treatment) {
    animation: none;
  }

  .banner {
    width: 100%;
    height: 25vh;

    & img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
</style>
