import"./Contact.css"
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qyg4pns', 'template_jv3pqjg', form.current, 'A2hW3bXOG2mKb2V-5')
      .then((result) => {
          console.log(result.text);
          e.target.reset()
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
  <section className="contact_container">
      <form className="form_container" ref={form} onSubmit={sendEmail}>
        <label className="name" >Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
    </form>
  </section>

  )
}

export default Contact
