<div class="treatment">
  <h2>swedish massage</h2>
  <div class="description">
    <p>
      Relax and rejuvenate with our swedish massage services. Release
      tension, improve circulation, and enjoy a moment of pure
      tranquility in our soothing environment.
    </p>
    <div class="link_wrapper">
      <span>€95 for 60 min</span><a class="link_secondary" href="/">Book Now</a>
    </div>
  </div>
</div>

<div class="treatment">
  <h2>swedish massage</h2>
  <div class="description">
    <p>
      Relax and rejuvenate with our swedish massage services. Release
      tension, improve circulation, and enjoy a moment of pure
      tranquility in our soothing environment.
    </p>
    <div class="link_wrapper">
      <span>€95 for 60 min</span><a class="link_secondary" href="/">Book Now</a>
    </div>
  </div>
</div>

<div class="treatment">
  <h2>swedish massage</h2>
  <div class="description">
    <p>
      Relax and rejuvenate with our swedish massage services. Release
      tension, improve circulation, and enjoy a moment of pure
      tranquility in our soothing environment.
    </p>
    <div class="link_wrapper">
      <span>€95 for 60 min</span><a class="link_secondary" href="/">Book Now</a>
    </div>
  </div>
</div>

<div class="treatment">
  <h2>swedish massage</h2>
  <div class="description">
    <p>
      Relax and rejuvenate with our swedish massage services. Release
      tension, improve circulation, and enjoy a moment of pure
      tranquility in our soothing environment.
    </p>
    <div class="link_wrapper">
      <span>€95 for 60 min</span><a class="link_secondary" href="/">Book Now</a>
    </div>
  </div>
</div>

<style>
  .treatment {
    display: flex;
    flex-flow: column;
    gap: 1rem;
    padding: 0.5rem;
    width: 100%;
    animation: fade ease-out;
    animation-timeline: view();
    animation-range: cover 0% cover 50%;

    @media (min-width: 630px) {
      width: 40%;
    }

    & span {
      border: solid 2px var(--text-color);
      border-radius: 8rem;
      text-transform: capitalize;
      padding: 0.5rem 0.7rem;
      color: var(--text-color);
      background: var(--bg-color);
      white-space: nowrap;
    }

    & .link_wrapper {
      flex-flow: row;
      align-items: center;
    }
  }

  @keyframes fade {
    0% {
      opacity: 0;
      padding-top: 3rem;
    }

    50% {
      opacity: 0, 5;
      padding-top: 5rem;
    }

    100% {
      opacity: 1;
      padding-top: 0.5rem;
    }
  }

  .description {
    display: flex;
    flex-flow: column;
    gap: 1.5rem;

    & p{
      font-size: 16px;
    }
  }
</style>
