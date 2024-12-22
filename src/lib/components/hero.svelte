<section class="hero">
    <img class="bgimage" src="/groupofpeople.avif" alt="wall" height="180" width="140" />
    <article>
    <h1>Bringing Welness to you</h1>
    <p>our treatments help you feel more you again. from traditional swedish massages to a massage tailored made for your specefic needs</p>
    </article>
    <div class="link_wrapper">
        <a class="link_secondary" href="">Book now</a>
            <a class="link" href="">Treatments</a>
       </div>
   </section>

<style>
  .hero {
    position: relative;
    display: flex;
    flex-flow: column;
    justify-content: flex-end;
    height: 80vh;
    margin: 1rem;
    overflow: hidden;
    background: linear-gradient(
      337deg,
      rgba(2, 0, 36, 0.69) 50%,
      rgba(27, 43, 122, 0.499) 70%,
      rgba(183, 225, 233, 0.222) 100%
    );

    & article {
      z-index: 2;
      padding: 1rem;

      & h1 {
        font-size: 35px;
        color: var(--bg-color);
      }

      & p {
        color: var(--bg-color);
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
