<script>
  import { gsap } from 'gsap';
  import { onMount } from 'svelte';

  onMount(() => {
  const overlay = document.querySelector('.overlay');

  window.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);

    overlay.style.setProperty('--x', `${x}%`);
      overlay.style.setProperty('--y', `${y}%`);

    gsap.to(overlay, {
      '--x': `${x}%`,
     '--y': `${y}%`,
       duration: 0.3,
      ease: 'sine.out'
    });
  });
});
</script>


<section>
  <div>
    <h2>Traveling beauty celebrates your yealth</h2>
  </div>

  <div class="overlay">
    <h2>Traveling beauty celebrates your yealth</h2>
  </div>
</section>

<style>
  section {
    position: relative;
  }
  div {
    height: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15vh;
    padding: 1rem 0.5rem;
    background: #0d4aa5ab;

    & h2{
      font-size: 20px;
    }
  }

  .overlay {
    background: var(--accent-color);
    color: white;
    position: absolute;
    inset: 0;
    clip-path: circle(60px at var(--x, 50%) var(--y,50%));
  }
  
</style>
