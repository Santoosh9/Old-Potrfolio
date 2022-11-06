import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Projects from './Component/Projects';
import Services from './Component/Services';

function App() {
  return (
    <div className="App"> 
   <Routes>
        <Route path="/"element={<Home/>}/>
        <Route path="/about"  element={<About/>}/>
        <Route path="/contact"  element={<Contact/>}/>
        <Route path="/project"  element={<Projects/>}/>
        <Route path="service"  element={<Services/>}/>
    
      </Routes>

      <About />
      <Projects />
      <Services />
      <Contact />
      
    </div>
  );
}

export default App;
