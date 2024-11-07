import React from 'react';

const Contact = () => {
  return (
    <section className="contact">
      <h3>Contact</h3>
      <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="email" name="email" placeholder="Email" />
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
