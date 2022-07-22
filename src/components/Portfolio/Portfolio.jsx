import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/portfolio-1.webp'
import IMG2 from '../../assets/portfolio-2.webp'
import IMG3 from '../../assets/portfolio-3.webp'
import IMG4 from '../../assets/portfolio-4.webp'
import IMG5 from '../../assets/portfolio-5.webp'
import IMG6 from '../../assets/portfolio-6.webp'

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Rozgar Website",
    github: "https://github.com",
    demo: "https://moonrajpoot207.github.io/Rozgar/index.html"
  },
  {
    id: 2,
    image: IMG2,
    title: "Crypto Website",
    github: "https://github.com",
    demo: "https://moonrajpoot207.github.io/crypto9c19/index.html"
  },
  {
    id: 3,
    image: IMG3,
    title: "Hishi Website",
    github: "https://github.com",
    demo: "https://moonrajpoot207.github.io/hishi/index.html"
  },
  {
    id: 4,
    image: IMG4,
    title: "Moon Food App",
    github: "https://github.com",
    demo: "https://moon-food-c4818.web.app"
  },
  {
    id: 5,
    image: IMG5,
    title: "My Personal Portfolio",
    github: "https://github.com",
    demo: "https://my-personal-portfolio-98116.web.app"
  },
  {
    id: 6,
    image: IMG6,
    title: "Saloon App",
    github: "https://github.com",
    demo: "https://salon-app-f84fb.web.app/"
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-img">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
