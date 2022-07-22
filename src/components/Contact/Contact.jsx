import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    return(
      <section id='contact'>
        <h5>Get in touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <AiOutlineMail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>moonrajpoot207@gmail.com</h5>
              <a href="mailto:moonrajpoot207@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <RiMessengerLine className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Moon Rajoot</h5>
              <a href="https://m.me/angry5046" target='_blank'>Send a message</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp className='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>+923060855824</h5>
              <a href="https://api.whatsapp.com/send?phone=+923087193330" target='_blank'>Send a message</a>
            </article>
          </div>
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>
      </section>
    )
}

export default Contact
