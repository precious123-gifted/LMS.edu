import React, { Component } from 'react'
import { Whyus } from './WhyUs.styled'
import BookIcon from '../../assets/book-icon.png'
import personLearning from '../../assets/personal-learning.png'
import howorkIcon from '../../assets/homework.png'
import lessonIcon from '../../assets/livelessons.png'
import ChildIcon from '../../assets/child.png'
import libryIcon from '../../assets/videolib.png'
import leplanIcon from '../../assets/learningplan.png'
import Line from '../Line/Line'
import { useRef,useEffect } from 'react'
import {gsap,Power2} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);




export default function WhyUs({why}) {





const headerTextAnimation = ()=>{
let headerTXT = why.current.querySelector('.header-text')
let lefts = why.current.querySelectorAll('.left')


  ScrollTrigger.create({
    trigger: headerTXT,
   
    start: 'top 40%',
    end: 'bottom 15%',
   
    onEnter: () => gsap.to(headerTXT, {
     
      opacity: 1,
      stagger: 0.4,
      
      duration:1.4
    }),
    onLeave: () => gsap.to(headerTXT, {
     
      opacity: 0,
      
     
      duration:1.3
    }),
    onEnterBack: () => gsap.to(headerTXT, {
      
      opacity: 1,
      stagger: -0.4,
     
      duration:1.4
    }),
  
    onLeaveBack: () => gsap.to(headerTXT, {
     
      opacity: 0,
      ease:Power2.easeIn,
      
      duration:1.3
    }),
  });
  
  
}

const leftAnimation = () =>{
  let lefts = why.current.querySelectorAll('.left')

  lefts.forEach(left => {

    ScrollTrigger.create({
      trigger: left,
     
      start: 'top 40%',
      end: 'bottom 25%',
     
      onEnter: () => gsap.to(left, {
        
        opacity: 1,
        
        marginLeft:0,
        duration:1.3
      }),
      onLeave: () => gsap.to(left, {
        
        opacity: 0,
        
        marginLeft:'-1000px',
        duration:1.3
      }),
      onEnterBack: () => gsap.to(left, {
       
        opacity: 1,
        ease:Power2.easeIn,
        marginLeft:0,
        duration:1.3
      }),
  
      onLeaveBack: () => gsap.to(left, {
        
        opacity: 0,
        ease:Power2.easeIn,
        marginLeft:'-1000px',
        duration:1.3
      }),
    });
  
  });
  
}
const rightAnimation = () =>{
  let rights = why.current.querySelectorAll('.right')

  rights.forEach(right => {

    ScrollTrigger.create({
      trigger: right,
     
      start: 'top 40%',
      end: 'bottom 25%',
     
      onEnter: () => gsap.to(right, {
       
        opacity: 1,
        
        marginRight:0,
        duration:1.3
      }),
      onLeave: () => gsap.to(right, {
        
        opacity: 0,
        
        marginRight:'-1000px',
        duration:1.3
      }),
      onEnterBack: () => gsap.to(right, {
        
        opacity: 1,
        ease:Power2.easeIn,
        marginRight:0,
        duration:1.3
      }),
  
      onLeaveBack: () => gsap.to(right, {
        
        opacity: 0,
        ease:Power2.easeIn,
        marginRight:'-1000px',
        duration:1.3
      }),
    });
  
  });
  
}
const writeUpAnimation = () =>{
  let writeUp = why.current.querySelector('.icon')
  let writeUpContent = why.current.querySelector('.iconContent')
 

    ScrollTrigger.create({
      trigger: writeUpContent,
     
      start: 'top 40%',
      end: 'bottom 18%',
     
      onEnter: () => gsap.to(writeUpContent, {
        
        opacity: 1,
        
        marginLeft:0,
        duration:1.3
      }),
      onLeave: () => gsap.to(writeUpContent, {
      
        opacity: 0,
        
        marginLeft:'-500px',
        duration:1.3
      }),
      onEnterBack: () => gsap.to(writeUpContent, {
        
        opacity: 1,
        ease:Power2.easeIn,
        marginLeft:0,
        duration:1.3
      }),
  
      onLeaveBack: () => gsap.to(writeUpContent, {
       
        opacity: 0,
        ease:Power2.easeIn,
        marginLeft:'-500px',
        duration:1.3
      }),
    
  
  });
  
}


useEffect(()=>{




headerTextAnimation()
leftAnimation()
rightAnimation()
writeUpAnimation()





},[])




  return (
    <Whyus ref={why}>
        <div className='content' >
        <div className='header-text'><span>Why Choose Us</span></div>
        <div className="list">
          <div className="top">
          <div className="cont left"><div className="circ"><img src={howorkIcon} alt="" srcset="" /></div><span>Home Work Help</span></div>
          <div className="cont left"><div className="circ"><img src={personLearning} alt="" srcset="" /></div><span>In Person Learning</span></div>
          <div className="cont left"><div className="circ"><img src={lessonIcon} alt="" srcset="" /></div><span>Live Lessons</span></div>
          </div>
         <div className="bottom">
         <div className="cont right"><div className="circ"><img src={libryIcon} alt="" srcset="" /></div><span>Video Tutorials</span></div>
          <div className="cont right"><div className="circ"><img src={leplanIcon} alt="" srcset="" /></div><span>Get a Study Plan</span></div>
          <div className="cont right"><div className="circ"><img src={ChildIcon} alt="" srcset="" /></div><span>Montessori Sensorial Lessons</span></div>
         </div>
        
       
        </div>
        <div className='icon'>
          <div className="iconContent">
          <img src={BookIcon} alt="" srcset="" />
          <div className='writeup'>
        We bridge learning gaps as a result of academic inadequacies which stems from educational needs,inadequate curriculum,problem of 
        curriculum application and learning, unskilled and non-gifted teachers and inefficient educational environment .
        We identify the learning gaps and inexperience through interactive evaluation,friendly communication and assessment.
 We design an educational intervention program for students or wards , work with individual IEP to achieve
   the educational goals which can be done remotely,visually or in person.
 
 Students  at each school level has intervention programs to support them and to adapt to their school objectives.
 If your child already has a learning gap challenge,social and natural skills inefficiency(unable to do things that should come easy through natural abilities
 ),academic subject area,wrong school choice,school transition and relocation from and to abroad.
 We give academic advise in the best interest of our tutees.  


</div></div>
        </div>
    
        </div>
        <div className='line'>

        </div>
        <Line/>
      </Whyus>
  )
}

