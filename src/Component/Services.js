import React from 'react'
import Navbar from './Navbar'
import Footer from './Pages/Footer'

import ststic from '../Images/static.jpeg'
import resp from '../Images/responcive.jpg'
import libary from '../Images/large.avif'
import ourstore from '../Images/single.jpeg'
import restromeal from '../Images/ecommerce-website-requirements-cover.png'
import portfolio from '../Images/photography_portfolio_website_4x.webp'

const Services = () => {
  return (
  <>
  <Navbar/><br/>
  <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className=" hov col">
          <div className="card">
          <img className='card-img-top' src={ststic} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Static Website</h5>
              <p className="card-text">By using HTML CSS and JavaScript I build the Static website.</p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={resp} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Responsive Websites</h5>
              <p className="card-text">Create responsive websites in html CSS javascript bootstrap reactjs ndejs. </p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={libary} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Full Stack Website</h5>
              <p className="card-text"> Make full stack website using react js node js and mongo db</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={ourstore} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Single Page Application </h5>
              <p className="card-text"> Create  single page web application  using mern stack.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={restromeal} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Ecommerce Website</h5>
              <p className="card-text">Create Ecommerce Website using MERN Stack</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={portfolio} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">Create Portfolio Website  using React JS.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
  <Footer/>
  </>
  )
}

export default Services