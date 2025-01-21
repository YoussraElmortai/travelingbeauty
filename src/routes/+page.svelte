<script>
  import Hero from "$lib/components/hero.svelte";
  import Treatments from "$lib/components/treatments.svelte";
</script>

<Hero />

<section class="core">
  <div class="intro">
    <h2>Core principles</h2>
    <p>We pride ourself lore impus lore isum and work acording to our core principels to dleiver the best treatments and service.</p>
  </div>
<div class="wrapper">
<article>
  <h3>Client-Centered Approach</h3>
</article>

<article>
  <h3>Attention to Detail</h3>
</article>

<article>
  <h3>Commitment to Hygiene and Safety</h3>
</article>
</div>
</section>

<div class="intro">
  <h2>Our treatments</h2>
  <p>We deliver a range of different treatments but you can aslo ask for a consult to get atailored made treatment designed for your needs</p>

</div>
<div class="wrapper">
  <Treatments />
</div>

<style>
  .core{
    color: var(--bg-color);
    & article{
      background-color: var(--accent-color);
      border-radius: 0.5rem;
      padding: 1.5rem 1rem;
    }
  }
</style>