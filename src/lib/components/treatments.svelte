<script>
  import Treatment from "./treatment.svelte";
</script>

<div class="treatments">
  <Treatment />
</div>

<div class="link_wrapper">
  <a class="link" href="/treatments">more treatments</a>
</div>

<style>
  .treatments {
    display: flex;
    flex-flow: column;
    gap: 2rem 2.5rem;
    width: 100%;


    @media (min-width: 425px) {
      flex-flow: row wrap;
    }
  }
</style>
