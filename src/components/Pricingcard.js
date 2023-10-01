import './pricingcardstyles.css'

import React from 'react'

const Pricingcard = () => {
  return (
    <div className='pricing'>
      <div className='card-container'>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>$ 100</p>
            <p>- 3 Days -</p>
        </div>
      </div>
    </div>
  )
}

export default Pricingcard
