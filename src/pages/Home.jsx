import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import AboutGenerator from '../components/AboutGenerator'
import TrustSignals from '../components/TrustSignals'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Features/>
      <AboutGenerator/>
      <TrustSignals/>
      <Slider/>
    </div>
  )
}

export default Home
