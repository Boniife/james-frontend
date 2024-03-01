import { React, useState, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { AiFillTwitterCircle } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

//import axios from "axios";

import './contact.css';

const initalState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const Contact = () => {
  const mail = useRef();

  const [form, setForm] = useState(initalState);

  function formClick(event) {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  }
  function formSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_vq6t8an',
        'template_09adsv9',
        mail.current,
        'Yw1XwkshfPyC8dxrV'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    // axios
    //   .post("/", form)
    //   .then((result) => console.log(result))
    //   .catch((err) => console.log(err));

    setForm(initalState);
  }

  return (
    <section name="contact" className="contact">

        <div className="contact-head">
          <h3>Contact </h3>
        </div>

        <div className="contact-head-p">
          <p className="contact-head-p-text"> You can leave a message</p>
        </div>

        <form
          ref={mail}
          action="send_email"
          method="post"
          className="contact-form"
          onSubmit={formSubmit}
        >
          <label>
            Name:
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="contact-input"
              value={form.name}
              onChange={formClick}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              placeholder="Your E-mail"
              className="contact-input"
              value={form.email}
              onChange={formClick}
            />
          </label>
          <label>
            Subject:
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              className="contact-input"
              value={form.subject}
              onChange={formClick}
            />
          </label>
          <label>
            Message:
            <textarea
              type=""
              placeholder="Message"
              name="message"
              className="contact-textarea"
              value={form.message}
              onChange={formClick}
            />
          </label>

          <div className='button-div'>
            <button>Submit</button>
          </div>
        </form>

        <div className="contact-social">

          <div className="social-text">
            <p> Our Social:</p>
          </div>

          <button className="contact-button">
            <FaWhatsapp />
          </button>
          <a
            href="https://github.com/Boniife?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <button className="contact-button">
              <BsGithub />
            </button>
          </a>
          <a
            rel="noreferrer"
            href="https://twitter.com/boniife"
            target="_blank"
          >
            <button className="contact-button">
              <AiFillTwitterCircle />
            </button>
          </a>
        </div>
    </section>
  );
};

export default Contact;
