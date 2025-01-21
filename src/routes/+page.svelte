<script>
  import Hero from "$lib/components/hero.svelte";
  import Treatments from "$lib/components/treatments.svelte";
</script>

<Hero />

<section class="core">
  <div class="intro">
    <h2>Core principles</h2>
    <p>
      We pride ourselves on delivering exceptional care and work
      according to our core principles to provide the best treatments
      and service.
    </p>
  </div>
  <div class="wrapper">
    <article>
      <h3>Customer experience</h3>
    </article>

    <article>
      <h3>Attention to Detail</h3>
    </article>

    <article>
      <h3>Hygiene and Safety</h3>
    </article>
  </div>
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
  .core {
    & .wrapper {
      flex-flow: row wrap;
      gap: 1rem;
    }
    & article {
      display: flex;
      background: var(--accent-color);
      color: var(--bg-color);
      justify-content: center;
      border-radius: 0.5rem;
      padding: 1.5rem 1rem;
      width: 100%;
    }
  }

  .cta {
    position: relative;
    display: flex;
    flex-flow: column;
    width: fit-content;
    align-self: center;
    margin: 1.5rem;
    border: solid var(--text-color);
    .cta_img {
      & img {
        height: 20rem;
        width: 100%;
        object-fit: cover;
      }
    }
  }
</style>
