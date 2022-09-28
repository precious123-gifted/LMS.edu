import React, { Component } from 'react'
import { BeTutor } from './Betutor.styled'
import { useEffect,useRef } from 'react'





export default function Betutor({bet}) {
  return (
    <BeTutor ref={bet}>
    <div className="content">
<div className="header">Become A Tutor</div>
<div className="write-up"><span> RIA Educational interventions provides an avenue for experienced and certified teachers to manage and grow their tutoring
business and career. Did you know that there are over 500,000 parents in Nigeria willing to pay a premium (probably equal
to or more than your regular school salary) to teach their kids or even them according to a professional standard? </span></div>
<div className="btn">
<span>Get Started</span>
</div>

    </div>
  </BeTutor>
  )
}
