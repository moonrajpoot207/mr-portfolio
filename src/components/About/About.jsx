import React from 'react'
import './About.css'
import Me from '../../assets/me-about-2.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'> 
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>5 Years Working</small>
            </article>
            <article className='about__card'> 
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>50+ Worldwide</small>
            </article>
            <article className='about__card'> 
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Completed</small>
            </article>
          </div>
          <p>Specializing in Website Designing, unique Content Writing, Product Listing, Copy/Paste, Copywriting, and, Data Entry on websites. I am experienced with all stages of products and web research. My learning ability is swift. When I start learning about anything, I Learn very quickly. I am an expert in HTML5, and CSS3 and have fluent knowledge of Bootstrap5, Tailwind CSS, JavaScript, React.Js, Elementor, and WebFlow. Combined with my communication and problem-solving skills, I think I would be an excellent candidate for the Front – End Web Developer. I did many projects with the help of HTML5, CSS3, & JavaScript.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
