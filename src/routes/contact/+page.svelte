<script>
  import Banner from "$lib/components/banner.svelte";

  let status = "";
  const handleSubmit = async (data) => {
    status = "Submitting...";
    const formData = new FormData(data.currentTarget);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });
    const result = await response.json();
    if (result.success) {
      console.log(result);
      status = result.message || "Success";
    }
  };
</script>

<Banner />

<article class="intro">
  <h1>Contact</h1>
  <p>
    Have questions abot our serverses or other inquirys we are
    available monday to saterday.
  </p>
</article>

<section class="form">
  <h2>Get in touch</h2>
  <form on:submit|preventDefault={handleSubmit} class="contact">
    <input
      type="hidden"
      name="access_key"
      value="e528368b-c73a-4a3a-91e4-4e01f4965b03"
    />
    <div>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        class="contact_inputs"
        required
      />
      <input
        type="text"
        name="lastname"
        placeholder="lastname"
        class="contact_inputs"
        required
      />
    </div>
    <input
      type="email"
      name="email"
      placeholder="Your email"
      class="contact_inputs"
      required
    />
    <textarea
      name="message"
      placeholder="Your Message"
      class="contact_inputs"
      required
    ></textarea>
    <button class="link_secondary" type="submit">Submit</button>
  </form>
</section>

<style>
  .form {
    padding: 1.5rem;
    display: flex;
    flex-flow: column;
    gap: 1.5rem;
  }
  .contact {
    display: flex;
    flex-flow: column;
    max-width: 30rem;
    gap: 0.5rem;

    & div {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5rem;
      width: 100%;
    }

    & input,
    textarea {
      border: solid var(--bg-color);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
    }

    & button {
      width: fit-content;
      align-self: flex-end;
      margin-top: 1rem;
    }
  }

  .contact_inputs {
    &:focus {
      border: solid var(--accent-color);
    }

    &::placeholder {
      color: #585858;
    }
  }
</style>
