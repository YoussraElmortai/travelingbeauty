<div class="treatment">
    <h2>swedish massage</h2>
    <div class="description">
      <p>
        Relax and rejuvenate with our swedish massage services.
        Release tension, improve circulation, and enjoy a moment of
        pure tranquility in our soothing environment.
      </p>
      <a class="link_secondary" href="/">Book Now</a>
    </div>
  </div>

  <style>
      .treatment {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    padding: 0.5rem;
    width: 100%;
    animation: fade ease-out;
    animation-timeline: view();
    animation-range: cover 0% cover 50%;

    @media (min-width: 425px) {
      width: 40%;
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
}
  </style>