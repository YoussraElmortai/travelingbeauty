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
  <form on:submit|preventDefault={handleSubmit} class="contact">
    <fieldset>
      <legend><h2>Get in touch</h2></legend>
      <input
        type="hidden"
        name="access_key"
        value="e528368b-c73a-4a3a-91e4-4e01f4965b03"
      />
      <div class="name_inputs">
        <div class="form_input">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            class="contact_inputs"
            required
          />
        </div>
        <div class="form_input">
          <label>Lastname</label>
          <input
            type="text"
            name="lastname"
            placeholder="lastname"
            class="contact_inputs"
            required
          />
        </div>
      </div>
      <div class="form_input">
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          class="contact_inputs"
          required
        />
      </div>

      <div class="form_input">
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          class="contact_inputs"
          required
        ></textarea>
      </div>
    </fieldset>
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

  .name_inputs {
    display: flex;
    flex-flow: row wrap;
  }

  .form_input {
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    padding: 0.2rem;
    max-width: 30rem;
  }
  .contact {
    display: flex;
    flex-flow: column;
    width: 100%;
    gap: 0.5rem;

    & fieldset {
      border: none;
    }
    & input,
    textarea {
      border: solid var(--bg-color);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;

      &:not(:placeholder-shown):valid {
        border: solid 2px #487f55ce;
      }

      &:not(:placeholder-shown):invalid {
        border: solid 2px #b01f1f;
      }
    }

    & textarea {
      min-height: 70px;
      max-height: 120px;
      max-width: 100%;
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
