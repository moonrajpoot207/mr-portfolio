import React from 'react'
import './Services.css'
import { BiCheck } from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Entry</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data entry from product catalogs to web based systems</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PDF Document Indexing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Online data capture services</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data entry from images</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Online order entry and follow up</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data mining and warehousing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Listing, Product Publishing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Rewriting from audio voices</p>
            </li>
          </ul>
        </article>
        {/* Data Entry */}

        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Using HTML, JavaScript and CSS to bring concepts to life.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Developing and maintaining the user interface.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implementing design on mobile websites.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Creating tools that improve site interaction regardless of the browser.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Managing software workflow.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Following SEO best practices.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Fixing bugs and testing for usability.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HTML and CSS Responsive Web Design</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}
        <article className="service">
          <div className="service__head">
            <h3>Content Writing</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Product Description</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Website Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blogs</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SEO Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Articles</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Social Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical Writing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>E-Books</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Reviews</p>
            </li>
          </ul>
        </article>
        {/* End of Content Writer */}
      </div>
    </section>
  )
}

export default Services
