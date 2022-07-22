import React from 'react'
import './Header.css'
import CTA from './CTA'
import Me from '../../assets/me-2.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'M</h5>
        <h1>Abdulrehman</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className="me">
          <img src={Me} alt="Me" />
        </div>
        <a href="" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
