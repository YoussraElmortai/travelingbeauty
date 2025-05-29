<script>
  import Footer from "$lib/components/footer.svelte";
  import Header from "$lib/components/header.svelte";
  import { onNavigate } from "$app/navigation";
  import Cursor from "$lib/components/cursor.svelte";



  onNavigate((navigation) => {
    if (!document.startViewTransition) return;

    return new Promise((resolve) => {
      document.startViewTransition(async () => {
        resolve();
        await navigation.complete;
      });
    });
  });
</script>

<Cursor/>
<Header />

<main>
  <slot />
</main>

<Footer />
