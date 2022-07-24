import React from 'react'
import './Payment.scss'
function Payment({Icon, title ,more,bottomtitle }) {
  return (
    <div className={more?`payment more`:`payment`}>
    <div className="left">
       
      <span className="counter">
          {title}
          <Icon style={{marginBottom:7, fontSize:25}}/>
      </span>
      <span className="link">{bottomtitle}</span>
    </div>
   
  </div>
  )
}

export default Payment