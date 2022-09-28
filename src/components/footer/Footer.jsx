import React, { Component } from 'react'
import { FOoter } from './Footer.styled'
import logo from '../../assets/logo.png'


export class Footer extends Component {
  render() {
    return (
      <FOoter>
        <div className="content">
          <div className="name-logo">
            <span><img src={logo} alt="" srcset="" /></span>
            <span>RIA Educational Interventions</span>
          </div>
          <div className="all-rights">
            <span>All Rights Reserved – ©RIA Educational Intervention 2022</span>
          </div>
        </div>
      </FOoter>
    )
  }
}

export default Footer
