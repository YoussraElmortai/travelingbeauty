<script>
  import Hero from "$lib/components/hero.svelte";
  import Treatments from "$lib/components/treatments.svelte";
</script>

<Hero />

<section class="about">
  <div class="intro">
    <h2>About us</h2>
    <p>
      We are a specialist beauty salon offering treatments that help
      you relax or relieve pain and discomfort.
    </p>
</section>

<section class="treatment_wrapper">
  <div class="intro">
    <h2>Our treatments</h2>
    <p>
      We deliver a range of different treatments, but you can also
      request a consultation to get a tailor-made treatment designed
      for your needs.
    </p>
  </div>
  <div class="wrapper">
    <Treatments />
  </div>
</section>

<section class="cta">
  <div class="cta_img"><img src="/groupofpeople.avif" alt="" /></div>
  <div class="intro">
    <h3>Book your consult for a specialized treatment</h3>
    <p>
      Outside of our regular treatments, we also offer specialized
      treatments designed specifically for your needs.
    </p>
    <a class="link" href="/">Book a consult</a>
  </div>
</section>

<style>
  .about {
  }

  .cta {
    position: relative;
    display: flex;
    flex-flow: column;
    width: fit-content;
    align-self: center;
    margin: 1.5rem;
    border: solid var(--text-color);
    border-radius: 0.5rem;
    overflow: hidden;
    .cta_img {
      & img {
        height: 20rem;
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>
