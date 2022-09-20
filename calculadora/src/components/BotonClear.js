import React from 'react'
import '../stylesheet/BotonClear.css'

export const BotonClear = (props) => {
  return (
    <button className='boton-clear'
    onClick={ props.manejarClear }>
        {props.children}
    </button>
  )
}
