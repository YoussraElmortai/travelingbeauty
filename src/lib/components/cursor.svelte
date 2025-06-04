<script>
  import { onMount } from "svelte";
  let cursorElement;
  const mouse = { x: 0, y: 0 };
  const cursor = { x: 0, y: 0 };
  let speed = 0.09;

  onMount(() => {
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;

      const hoveredElement = document.elementFromPoint(
        e.clientX,
        e.clientY
      );
      const isHoveringLink =
        hoveredElement?.closest(".link_secondary");
      cursorElement.style.background = isHoveringLink
        ? "white"
        : "var(--accent-color)";
    });

    function updateCursorPosition() {
      cursor.x += (mouse.x - cursor.x) * speed;
      cursor.y += (mouse.y - cursor.y) * speed;

      cursorElement.style.transform = `translate(${cursor.x}px, ${cursor.y}px)`;
      requestAnimationFrame(updateCursorPosition);
    }

    updateCursorPosition();
  });
</script>

<div class="cursor" bind:this={cursorElement} />

<style>
  .cursor {
    position: fixed;
    z-index: 1000;
    height: 20px;
    width: 20px;
    border-radius: 100%;
    top: 0;
    left: 0;
    background: var(--accent-color);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: background 0.2s ease-out;
    display: none;

    @media (min-width: 425px) {
      display: block;
    }
  }
</style>
