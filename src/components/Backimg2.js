import './Backimg2styles.css'

import React, { Component } from 'react'

class Backimg2 extends Component {
  render() {
    return (
      <div className='backimg'>
        <div className='heading'>
          <h1>{this.props.heading}</h1>
          <p>{this.props.text}</p>
        </div>
      </div>
    )
  }
}

export default Backimg2
