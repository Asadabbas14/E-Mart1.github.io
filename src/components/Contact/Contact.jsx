// import React from 'react'
import './Contact.css'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_7b8lyj6', 'template_i35m1eu', form.current, 'vqS8Dnqk4nsGDZR2n')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className='Contact-form'>
        <hr />
        <p>If you want any improvment or new Product in E-Mart then mail us now!</p>
        <form className='mail-form' ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" placeholder='Enter your name'/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='Enter your E-mail'/>
      <label>Message</label>
      <textarea name="message" placeholder='Enter your message here'/>
      <input className='mail-btn' type="submit" value="Send" />
    </form>
    </div>
  )
}

export default Contact