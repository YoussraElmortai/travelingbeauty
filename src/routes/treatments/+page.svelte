<script>
    import Treatment from "$lib/components/treatment.svelte";
</script>

<article class="intro">
    <h1>Treatments</h1>
    <p>Relax and rejuvenate with our assortiments of different massages and treatments</p>
</article>

<section class="wrapper">
<Treatment />
</section>


<style>
    .wrapper{
        @media (min-width: 425px) {
            flex-flow: row wrap;
        }
    }
</style>