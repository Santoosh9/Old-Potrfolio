import React from 'react'
import Navbar from './Navbar'
import Footer from './Pages/Footer'
import ststic from '../Images/static.jpeg'
import resp from '../Images/responcive.jpg'
import libary from '../Images/libary.jpg'
import ourstore from '../Images/ourstore.jpg'
import restromeal from '../Images/restromeal.jpg'
import portfolio from '../Images/portfolio.jpg'
import './Projects.css'

const Projects = () => {
  return (
    <>
      <Navbar /><br />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className=" hov col">
          <div className="card">
          <img className='card-img-top' src={ststic} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Simple Static Website</h5>
              <p className="card-text">By using HTML CSS and JavaScript I build the simple website. In this website I used CSS in proper way. This is the first website which I make</p>
              
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={resp} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Responcive Website</h5>
              <p className="card-text">By using ReactJS I build the responsible in this project there are many pages which perform different tasks. </p>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={libary} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Library management system</h5>
              <p className="card-text"> By using java programming language, I developed library management system. It is difficult project for me but lot of practice I developed library management system.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={ourstore} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Our Store Website </h5>
              <p className="card-text"> By using ReactJS I build the responsible in this project there are many pages which perform different tasks. The main purpose of this website is online buying and selling goods.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={restromeal} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Online Food Ordering System(RestroMeal)</h5>
              <p className="card-text">An online food ordering system is a web-based application that will helps to ordering food internet by locating their favorite restaurant or nearest one.</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="hov card">
          <img className='card-img-top' src={portfolio} alt="cv" />
            <div className="card-body">
              <h5 className="card-title">Portfolio Website</h5>
              <p className="card-text">This is my personal portfolio website. I use react for making this website.</p>
            </div>
          </div>
        </div>
      </div>
      <br /><Footer />
    </>
  )
}

export default Projects