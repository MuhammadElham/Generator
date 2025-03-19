import React from 'react'
import Hero_About from '../components/Hero_About'
import CompanyOverview from '../components/CompanyOverview'

const About = () => {
  return (
    <div>
     <Hero_About bgImg={'https://generatorcorner.com/wp-content/uploads/2018/11/call-to-action-bg.jpg'} heading={'Leading Provider of Power Generation Solutions'}/>
     <CompanyOverview/>
    </div>
  )
}

export default About
