<section class="hero">
  <img
    class="bgimage"
    src="/groupofpeople.avif"
    alt="wall"
    height="180"
    width="140"
  />
  <article>
    <h1>Traveling Beauty</h1>
    <p>
      our treatments help you feel more you again. from traditional
      swedish massages to a massage tailored made for your specefic
      needs
    </p>
  </article>
  <div class="link_wrapper">
    <a class="link_secondary" href="/">Book now</a>
    <a class="link" href="/treatments">Treatments</a>
  </div>
</section>

<style>
  .hero {
    position: relative;
    display: flex;
    flex-flow: column;
    gap: 1rem;
    justify-content: flex-end;
    height: 80vh;
    overflow: hidden;
    background: linear-gradient(
      337deg,
      rgba(3, 39, 54, 0.797) 50%,
      #13424290 70%,
      rgba(185, 238, 249, 0.252) 100%
    );

    & article {
      display: flex;
      flex-flow: column;
      gap: 1.6rem;
      z-index: 2;
      padding: 1rem;

      @media (min-width: 768px) {
          margin-left: 3rem;
        }

      & h1 {
        font-size: 46px;
        color: var(--bg-color);

        @media (min-width: 425px) {
          font-size: 62px;
        }
      }

      & p {
        color: var(--bg-color);
        font-size: 18px;

        @media (min-width: 425px) {
          font-size: 24px;
        }

        @media (min-width: 768px) {
          width: 65%;
        }
      }
    }

    & .link_wrapper {
      padding: 1rem;
      padding-bottom: 2rem;
    }
  }

  .bgimage {
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
</style>
