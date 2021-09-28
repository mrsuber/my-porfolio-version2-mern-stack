import React from 'react'
import './layout.css'
import CardSection from '../card/CardSection'
import Resume from '../resume/Resume'
import code from "./images.jpeg"
function goToInterviewPrepPage(){
  console.log("am taking you to interview prep")
}

const Layout = () => {
  return (
    <div className='layout__container'>
    <div id="interview_prep">
    <CardSection
    title={"Start Interview Preparation/Coding Chanlange"}
    text={"Notes and Challenges from top companies & mock tests to assess yourself. This is your one-stop solution for everything you need to polish your skills and ace your interview."}
    img={code}
    alt={"Coding chanlange image"}
    cote={"Failing to prepare is ...."}
    cardTitle={"The Fullstack Path"}
    cardSubtext={"Starting from the very basics of computers,data structures and algorithms, HTML5,CSS3 and more,much more."}
    buttonName={"Get Started"}
    goToPage={goToInterviewPrepPage}
    />
    </div>
    <Resume />
    <CardSection
    title={"Portfolio Projects"}
    text={"Details about My open source projects, where to find them and how to use them"}
    />


    </div>
  )
}

export default Layout
