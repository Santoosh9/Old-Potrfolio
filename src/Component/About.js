import React from 'react'
import './About.css'
import Navbar from './Navbar'
import edu from '../Images/education.jpeg'
import skill from '../Images/images.png'
import exp from '../Images/expe.jpeg'
import react from '../Images/react.jpeg'
import soft from '../Images/soft.jpeg'
import Footer from './Pages/Footer'

const About = () => {
  return (
    <>
      <Navbar />

      <div className="container">

        <div className="row">
          <div className="hov col-sm-4">
            <i className='static-te'><h3>Education</h3></i>
            <img className='img' src={edu} alt="cv" />
          </div>
          <div className="hov main col-sm-7">
            <div> <br /><h5>Secondary Education </h5>
              <i>Shree Niranjana HSSS, 2005 to 2016, Completed</i><br />



            </div>
            <br />
            <div><h5>High School</h5>
              <i>SS College, 2017 to 2018, Completed</i><br />

            </div>
            <br />
            <div><h5>Bachelor's Degree</h5>
              <i>Islington College, 2019 to 2022, Completed</i><br />
              <i>BSc (Hons) Computing</i>
            </div>
          </div>
        </div>
        <br />
        <div className='row'>
          <div className=" ss hov col-sm-4"><i className='static-te'><h3>Techinical Skill</h3></i>
            <img className='img' src={skill} alt="cv" />
          </div>
          <div className="hov col-sm-8">
            <div className='skills'>
              <li>
                <h3>HTML</h3><span className='bar'><span className='html'></span></span>
              </li>

              <li>
                <h3>CSS</h3><span className='bar'><span className='css'></span></span>
              </li>

              <li>
                <h3>JavaScript</h3><span className='bar'><span className='javascript'></span></span>
              </li>

              <li>
                <h3>React JS</h3><span className='bar'><span className='react'></span></span>
              </li>
              <li>
                <h3>Node JS</h3><span className='bar'><span className='node'></span></span>
              </li>

              <li>
                <h3>Express</h3><span className='bar'><span className='express'></span></span>
              </li>
              <li>
                <h3>Java</h3><span className='bar'><span className='java'></span></span>
              </li>
            </div>

          </div>


        </div>

        <div className='row'>
          <div className=" hov col-sm-4"><i className='static-te'><h3>Soft Skill</h3></i>
            <img className='img' src={soft} alt="cv" />
          </div>

          <div className='main hov col-sm-7'><br />
            <i ><h4>Project Management</h4></i><br />
            <i ><h4>Time Management</h4></i><br />
            <i ><h4>Communication  </h4></i><br />
            <i ><h4>Decision Making</h4></i><br />
            <i ><h4>Reserch..</h4></i>

          </div>
        </div><br /><br />

        <div className='row'>

          <div className=" hov col-sm-4"><i className='static-te'><h3>Work Exprince</h3></i>
            <img className='img' src={exp} alt="cv" />
          </div>
          <div className='hov col-sm-8'>

            <div className="main">
              <img className='reactimg' src={react} alt="r" style={{ hight: "400px", marginTop: "10px" }} />
              <div className="card-body">
                <h5 className="card-title">React Internship</h5>
                <p className="card-text">
                  I did three-month internship in GrayCode
                  Technology Pvt.Ltd in September 19 2021 to
                  January 20 2022. I work as a React JS intern in
                  this company. I was assigned a diffrent of web
                  application development duties as an intern
                  at gray code technology.</p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default About