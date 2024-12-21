<header>
  <a class="logo" href=""
    ><img
      src="/src/public/logo.png"
      alt=""
      height="40px"
      width="40px"
    /></a
  >
  <h1><a href="/">Traveling Beauty</a></h1>
  <nav>
    <ul>
      <li><a href="/treatments">treatments</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/contact">contact</a></li>
      <ul></ul>
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

    & .logo {
      display: none;
    }

    @media (max-width: 375px) {
      justify-content: center;
    }

    @media (max-width: 609px) {
      gap: 0.5rem;

      h1 {
        display: none;
      }

      .logo {
        display: block;
      }
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
        font-size: 1rem;

        &:hover {
          a {
            border-bottom: solid var(--accent-color);
          }
        }
      }
    }
  }
</style>
