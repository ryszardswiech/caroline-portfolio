import React from "react";

const ContactView = () => (
  <section>
    <h2>so make a wish...</h2>
    <p>and fill free to contact me!</p>
    <form>
      <div>
        <label for="name">
          <span>name</span>
        </label>
        <input
          placeholder="Please enter your name"
          type="text"
          name="name"
          id="name"
          value=""
          tabindex="1"
          required
          autofocus
        />
      </div>
      <div>
        <label for="email">
          <span>e-mail</span>
        </label>
        <input
          placeholder="Please enter your e-mail"
          type="email"
          name="email"
          id="email"
          value=""
          tabindex="2"
          required
          autofocus
        />
      </div>
      <div>
        <label for="message">
          <span>message</span>
          <textarea
            placeholder="Write all your questions, please"
            tabindex="3"
            required
            autofocus
          />
        </label>
      </div>
      <div>
        <button name="submit" type="submit" id="contact-submit">
          send
        </button>
      </div>
    </form>
  </section>
);

export default ContactView;
