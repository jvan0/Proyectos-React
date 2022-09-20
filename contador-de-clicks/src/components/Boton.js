import React from 'react'
import '../stylesheet/Boton.css'

export default function Boton({ texto, esBotonClick, manejarClick }) {
  return (

    <button 
    className={ esBotonClick ? 'boton-click' : 'boton-reiniciar' }
    onClick={manejarClick}
    >
      {texto}
    </button>

  )
}
