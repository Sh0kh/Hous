import React from 'react'
import '../Style/RdCard.css'
function RdCard({img,text}) {
  return (
    <div className='Rd__card'>
        <img src={img} alt="" />
        <p>
            {text}
        </p>
    </div>
  )
}

export default RdCard