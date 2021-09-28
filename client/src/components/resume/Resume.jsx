import React from 'react'
import ResumeStats from '../stats/ResumeStats'
import AnimatedButton from '../buttons/AnimatedButton'
import './Resume.css'
const Resume = () => {
  return (
    <div className="resume-container">
      <div className="resume-left">
        <div className="stats">

          <ResumeStats />
        </div>
      </div>

      <div className="resume-right">
      <h2 className="card-heading">
        Who I am and what i can do
      </h2>
      <p className="paragraph">Full description about me and skill i have aquired over the years</p>
      <AnimatedButton name={"Learn More"}/>
      </div>
  </div>
  )
}

export default Resume
