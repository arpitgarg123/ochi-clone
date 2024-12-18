import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Eyes from './components/Eyes'
import Feature from './components/Feature'
import Reviews from './components/Reviews'
import Info from './components/Info'
import Footer from './components/Footer'
import StartProjects from './components/StartProjects'
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-min-screen bg-zinc-900 text-white font-["Neue_Montreal"]'>
      <Navbar /> 
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Reviews />
      <Info />
      <StartProjects />
      <Footer />
    </div>
  )
}

export default App