
import "./App.css";
import LandingPage from "./components/landing-page/landingPage";
import About from './components/about/About';
import Header from './components/header/Header';
import WhyUs from './components/whyussection/WhyUs'
import How from './components/how-it-works/How'
import Betutor from './components/become-a-tutor/Betutor';
import Footer from "./components/footer/Footer";
import Questions from './components/questions/Questions';
import Line from "./components/Line/Line";
import Line2 from "./components/Line/Line2";
import { BrowserRouter, Route, Router, Routes, } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";
import { useRef } from "react";
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);





export const AppContext = createContext(null)

function App() { 
const nav= useRef(null)
const [home,setHome]=useState(false)
const about = useRef(null)
const app = useRef(null)
const header = useRef(null)
const why = useRef(null)
const how = useRef(null)
const bet = useRef(null)
const ques = useRef(null)
const foot = useRef(null)














useEffect(()=>{

})


  return (
    
      
 <AppContext.Provider value={{app,about,nav,header,how,bet,home,setHome}}>
    <div className="App" ref={app}> 
    {/* <div className="cursor"><img src={Cursor} alt="" srcset="" /></div> */}
    {
home === false?<LandingPage/>: <div className="content-page">
      
    
    <Header  />
   
    <WhyUs why= {why}/>
   
    <How how={how}/>
    <Line2/ >
    <About  about={about} / >
    <Betutor bet={bet}/>
     <Questions ques = {ques}/>
     <Footer foot={foot}/> 
     </div>

    }
     
    
    

      
     
     
   
     
        </div>
      </AppContext.Provider>
  );
}

export default App;
