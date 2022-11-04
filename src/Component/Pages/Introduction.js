import React from 'react'
import "./Introducrion.css"

import cvv from '../../Images/cvv.png'
import Navbar from '../Navbar'
import Footer from './Footer'


const Introduction = () => {


  return (
    <><Navbar/>
    <div className='container'>
      <div className='intro'>
      <img className='imgs' src={cvv} alt="cv" />
      <p className='text'>Welcome to my Portfolio I am Santosh Gajurel.<br/> I want to work as  Web Developer with beginning label of experiencein <br/>Forntend and Backend in MERN Stack
      Web Desigenig  and Development...</p>
   
        </div><br/>
      <div className='wrapper'>
        <div className='static-tex'>Hey! I am Beginner</div>
        <ul className='dynamic-tex'>
          <li> <span>Web Developer</span></li>
          <li> <span>Forntend Developer</span></li>
          <li> <span>Backend Developer</span></li>
          <li> <span>Web Designer</span></li>
        </ul>
      </div>

      <div><a href='/about'><button  className="click">Explore Me!</button></a></div>
    </div>
    <Footer/>
    </>
  )
}

export default Introduction