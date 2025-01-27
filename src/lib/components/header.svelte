<header>
  <a class="logo" href="/"
    ><img
      src="/logo.png"
      alt="Traveling Beauty homepage"
      height="40px"
      width="40px"
    /></a
  >
  <nav>
    <ul>
      <li><a href="/treatments">treatments</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/contact">contact</a></li>
    </ul>
  </nav>
</header>

<style>
  header {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    @media (max-width: 375px) {
      justify-content: center;
    }

    @media (max-width: 609px) {
      gap: 1rem;
    }
  }

  nav {
    & ul {
      display: flex;
      flex-flow: row;
      gap: 1rem;
      padding: 0;

      & li {
        list-style: "";
        font-size: 20px;

        &:hover {
          a {
            border-bottom: solid var(--accent-color);
          }
        }
      }
    }
  }
</style>
