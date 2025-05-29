<script>
  import Hero from "$lib/components/hero.svelte";
  import Treatments from "$lib/components/treatments.svelte";
</script>

<Hero />

<section class="about">
  <article class="intro">
    <h2>About us</h2>
    <p>
      We are a specialist beauty salon offering treatments that help
      you relax or relieve pain and discomfort.
    </p>
    <p>
      With our wide range of treatments and options to get a
      specialized treatment plan we strive to bring wellness and
      healing into your life.
    </p>
    <img src="" alt="" />
  </article>
  <div class="scroll"></div>
</section>

<section class="treatments_sec">
  <article class="intro">
    <h2>Our treatments</h2>
    <p>
      We deliver a range of different treatments, but you can also
      request a consultation to get a tailor-made treatment designed
      for your needs.
    </p>
  </article>

  <div class="wrapper">
    <Treatments />
  </div>
</section>

<section class="cta">
  <div class="cta_img"><img src="/groupofpeople.avif" alt="" /></div>
  <article class="intro">
    <h2>Book your consult for a specialized treatment</h2>
    <p>
      Outside of our regular treatments, we also offer specialized
      treatments designed specifically for your needs.
    </p>
    <a class="link" href="/contact">Book a consult</a>
  </article>
</section>

<style>
  .cta {
    position: relative;
    display: flex;
    flex-flow: column;
    width: fit-content;
    align-self: center;
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

    & .intro {
      align-items: normal;
    }

    & p {
      margin-bottom: 1rem;
      max-width: 40rem;
    }
  }
</style>
