import React from 'react'
import './footer.css'
import logo from '../../assets/logo.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'

export default function Footer() {
  return (
    <div className="footer">

        <hr />
        <div className="links">
            <img src={github} alt="" /><img src={linkedin} alt="" />
            <img src={instagram} alt="" />
        </div>
        <div className="logo-r">
            <img src={logo} alt="" />
        </div>
      
       <div className="blur fot-blur"></div>
    </div>
  )
}

