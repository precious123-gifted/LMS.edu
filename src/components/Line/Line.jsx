import React, { Component } from 'react'
import LineStyle from '../../assets/line-style.png'

import {Linestyle} from './Line.styled';


export class Line extends Component {
  render() {
    return (
      <Linestyle>
        <div>
        <img src={LineStyle} alt="" srcset="" />      
        </div>
      
      </Linestyle>
    )
  }
}

export default Line


