import React, { useState } from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import bars from '../../assets/bars.png'
import { Link } from 'react-scroll'
export default function Header() {
  const mobile=window.innerWidth<=768?true:false;
  const [menu,setmenu]=useState(true)
  return (

    <div className='header'>
      
      <img src={logo} alt="" className='logo'/>
      {mobile ? menu?<img src={bars} onClick={()=>{setmenu(false)}}  alt="" className='barrs'/>:<ul className='header-men'>
      <li><Link to='hero-1' smooth={true} span={true} onClick={()=>{setmenu(true)}}>Home</Link></li>
      <li><Link to='programs-1' smooth={true} span={true} onClick={()=>{setmenu(true)}}>Programs</Link></li>
      <li><Link to='why-1' smooth={true} span={true} onClick={()=>{setmenu(true)}}>Why us</Link></li>
      <li><Link to='pricing-1' smooth={true} span={true} onClick={()=>{setmenu(true)}}>Pricing</Link></li>
      <li><Link to='testimonials-1' smooth={true} span={true} onClick={()=>{setmenu(true)}}>Testimonals</Link></li>
</ul>:   
      <ul className='header-menu'>
      <li>Home</li>
      <li>Programs</li>
      <li>Why us</li>
      <li>pricing</li>
      <li>Testimonals</li></ul>}
   
    </div>
  )
}
