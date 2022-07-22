import React from 'react'
import './Experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container container__experience">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML5</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS3</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Data Entry</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Product Listing</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Content Writing</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MS Excel</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MS Word</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Web Research</h4>
              <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Copy Writing</h4>
              <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
