import React, { Component } from 'react'
import { QUestions } from './Questions.styled'


export class Questions extends Component {
  render() {
    return (
      <QUestions>
        <div className="content">
          <div className="header">
            <span>Do You Have Any Question ?</span>
          </div>
          <div className="write-up">
            <span className='text'>If you have any questions or you want to  reach out to us,contact us here</span>
            <span className='email-number'><span>email</span><span>+234 813 127 4889</span></span>
          </div>
        </div>
      </QUestions>
    )
  }
}

export default Questions
