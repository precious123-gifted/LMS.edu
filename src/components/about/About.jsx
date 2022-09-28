import React, { Component, useEffect } from 'react'
import { ABout } from './About.styled'
import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);



export default function About({about}) {



  const displayAboutContent = () =>{
let About = about.current
let aboutContent = About.querySelector('.content')

ScrollTrigger.create({
  trigger: aboutContent,
 
  start: 'top 40%',
  end: 'bottom 26%',
 
  onEnter: () => gsap.to(About, {
    
    opacity: 1,
    stagger: 0.2,
        duration:1.5
  }),
  onLeave: () => gsap.to(About, {
    
    opacity: 0,
    stagger: 0.2,
   
    duration:1.5
  }),
  onEnterBack: () => gsap.to(About, {
   
    opacity: 1,
    stagger: -0.2,
        duration:1.5
  }),

  onLeaveBack: () => gsap.to(About, {
    
    opacity: 0,
    stagger: -0.2,
    
    duration:1.5
  }),
});



  }



  useEffect(()=>{
displayAboutContent()
  },[])


  
  return (
    <ABout ref={about} >

<div className="content">
  <div className="header"><span>About</span></div>
  <div className="write-up">
    <span>  We are a team of young and enthusiastic people who are passionate about education 
and want to help students to learn and attain the needed skills(moral and academic) to succeed in life. In order to
 support us,join our community.
 We bridge learning gaps for students through intervention programs as they progress  through school from kindergarten,
  primary and secondary  to higher education,scaling the heights of examination classes and  other professional course of study . using both external and Nigeria curriculum. Our main focus is
   giving student and wards the right educational support for future academic stability. We use educational means to help
    them gain learning experience in order to discover their in born natural abilities. Thereby giving them learning support 
    in their various educational capacity from early years to higher learning. To Achieve this we advise parents on
    their learning needs and right schools for their educational development.</span>
  </div>
</div>
        
      </ABout>
  )
}
