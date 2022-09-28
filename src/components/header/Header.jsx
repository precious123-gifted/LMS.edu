import React, { Component, useContext } from 'react'
import {HEader} from './Header.styled'
import { useRef } from 'react'
import { useEffect } from 'react'
import {gsap,Circ,Elastic,Power0,Power1,Power2} from 'gsap'
import headerIll from '../../assets/header-ill.png'
import logo from '../../assets/logo.png'
import { ScrollTrigger } from "gsap/ScrollTrigger";

import {AppContext} from '../../App.jsx'
import {NavBar} from './nav/Nav.styled'


gsap.registerPlugin(ScrollTrigger);



const Header = () => {

const{about} = useContext(AppContext)
const{header} = useContext(AppContext)
const{how} = useContext(AppContext)
const{nav}=useContext(AppContext)
const{app}=useContext(AppContext)



function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
} 




  useEffect(()=>{
    let About = about.current
    let Header = header.current
    let writeUp = header.current.querySelector('.write-up')
  let BTN = header.current.querySelector('.btn')
  let section2 = header.current.querySelector('.section2')
  let Nav = nav.current
    

// window.addEventListener('scroll',()=>{
//   console.log(Header.getBoundingClientRect().top)
//   let rect = Header.getBoundingClientRect()
//   if (rect.top > '-640') {
//    alert('ok noted')
//   }  
// })
  
  gsap.to(writeUp,2,{marginLeft:0,ease:Power2.easeIn,})
  gsap.to(BTN,3,{opacity: 1,marginLeft:0,ease:Power2.easeIn})
  gsap.to(section2,1.6,{opacity: 1,marginRight:0,ease:Power2.easeIn})

  gsap.to(Nav,4,{opacity:1,top:0,ease:Power2.easeIn,})

   
  let aboutBTN = Header.querySelector('.aboutBTN')

  
  
  aboutBTN.addEventListener('click',()=>{ 
  About.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest",duration:1.5})
  })
  

  },[])

  


const displayHeaderContent = () =>{

  let writeUp = header.current.querySelector('.write-up')
  let BTN = header.current.querySelector('.btn')
  let section2 = header.current.querySelector('.section2')
 



  ScrollTrigger.create({
    trigger: header.current,
    start: 'top 17%',
    end: 'bottom 85%',
   
   
    onLeave: () => gsap.to(writeUp, {
      
      opacity: 0,
      stagger: 0.2,
      marginLeft:'-500px',
      duration:1.3
    }),
    onEnterBack: () => gsap.to(writeUp, {
      
      opacity: 1,
      stagger: -0.2,
      marginLeft:0,
      duration:1.3
    }),


  });

  ScrollTrigger.create({
    trigger: header.current,
    start: 'top 17%',
    end: 'bottom 85%',
    
    duration:1.3,

    
    
    onLeave: () => gsap.to(BTN, {
      
      opacity: 0,
      stagger: 0.2,
      marginLeft:'-500px',
      duration:1.1
    }),
    onEnterBack: () => gsap.to(BTN, {
     
      opacity: 1,
      stagger: -0.2,
      marginLeft:0,
      duration:1.1
    }),
  });



  ScrollTrigger.create({
    trigger: header.current,
    start: 'top 17%',
    end: 'bottom 85%',
    
    duration:1.3,

    
  
    onLeave: () => gsap.to(section2, {
      
      opacity: 0,
      stagger: 0.2,
      marginRight:'-500px',
      duration:1.1
    }),
    onEnterBack: () => gsap.to(section2, {
     
      opacity: 1,
      stagger: -0.2,
      marginRight:0,
      duration:1.1
    }),
  });

}






useEffect(()=>{
  displayHeaderContent()
 let servicesTXT = header.current.querySelector('.services-TXT')
 let servicesList = header.current.querySelector('.services-list')


 servicesTXT.addEventListener('mouseover',()=>{
 servicesList.style.opacity = 1
 })


 servicesTXT.addEventListener('mouseleave',()=>{
  servicesList.style.opacity = 0
  })

})

  return (
    <HEader ref={header}>
       <NavBar className='nav' ref={nav}>
        <div className='content'>
<div className='logo-div'>
  <span><img src={logo} alt="" srcset="" /></span>
</div>
<div className='list-and-button-div'>
  <div className='list-div'>
    <span className='home list'>Home</span>
    <span className='GAT list'>Get A Tutor</span>
    <span className='services'>

      <div className='services-TXT list' >Services</div>
    <div className='services-list'>
      <div>Home Work</div>
      <div>In person learning</div>
      <div>Live lessons</div>
      <div>E-learning</div>
      <div>
Examinations Prep(SAT,Check Point,IGCSE,WAEC,NECO,
National Common Entrance.</div>
     
      </div></span>
    <span className='blog list'>Blog</span>
    <span className='aboutBTN list'>About Us</span>
    <span className='BAT list'>Become A Tutor</span>
    

  </div>
  <div className='button-div'>
    <div className='signup-div'>
      <span>Contact Us</span>
    </div>
    <div className='login-div'>
      <span>Login</span>
    </div>
  </div>
</div>
        </div>
      </NavBar>
       <div className='content'>
        <div className="section1">
        <div className='write-up'>
          <span>
          Hire The Best Tutors
For Your Academic
Success
          </span>
        </div>
        <div className='btn'>
          <span>Get A Tutor</span>
        </div> 
        </div>


        <div className="section2">
<img src={headerIll} alt="" srcset="" />
        </div>
        
       </div>
      </HEader>
  )
}

export default Header
