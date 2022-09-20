import React from 'react'
import '../stylesheet/Contador.css' 

export default function Contador({ numClicks }) {



  return (
    <div className='contador'>
      { numClicks }
    </div>
  )
}
